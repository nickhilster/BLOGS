// Typed port of the reusable generative-art engine pieces from the Pain-ter
// app (nickhilster/Pain-ter, abstract-canvas.html) — noise, force field, and
// the agent/particle simulation. Only the algorithmic core is ported; the
// paint-tool UI, IndexedDB persistence, and fullscreen/toolbar code do not
// come along, since this runs as a passive ambient background, not a paint
// surface.

const NOISE_TABLE_SIZE = 512
const NOISE_TABLE_MASK = NOISE_TABLE_SIZE - 1

function createNoiseTable(): Float32Array {
  const table = new Float32Array(NOISE_TABLE_SIZE)
  for (let i = 0; i < NOISE_TABLE_SIZE; i++) table[i] = Math.random() * 2 - 1
  return table
}

const noiseTable = createNoiseTable()

function lerp(a: number, b: number, t: number): number {
  return a + (b - a) * t
}

export function snoise(x: number): number {
  const xi = Math.floor(x) & NOISE_TABLE_MASK
  const xf = x - Math.floor(x)
  const t = xf * xf * (3 - 2 * xf)
  return lerp(noiseTable[xi], noiseTable[(xi + 1) & NOISE_TABLE_MASK], t)
}

export function fbm(x: number, octaves = 4): number {
  let v = 0
  let a = 0.5
  let f = 1
  for (let i = 0; i < octaves; i++) {
    v += snoise(x * f) * a
    a *= 0.5
    f *= 2
  }
  return v
}

export function hexRGB(hex: string): { r: number; g: number; b: number } {
  const n = parseInt(hex.replace('#', ''), 16)
  return { r: (n >> 16) & 255, g: (n >> 8) & 255, b: n & 255 }
}

export function rgbStr(r: number, g: number, b: number, a = 1): string {
  return `rgba(${r}, ${g}, ${b}, ${a})`
}

export type ForceType = 'attract' | 'repel'

interface ForceEntry {
  x: number
  y: number
  radius: number
  strength: number
  type: ForceType
  life: number
}

export class ForceField {
  private forces: ForceEntry[] = []

  add(x: number, y: number, radius: number, strength: number, type: ForceType = 'attract'): void {
    this.forces.push({ x, y, radius, strength, type, life: 1 })
  }

  update(dt: number): void {
    for (let i = this.forces.length - 1; i >= 0; i--) {
      this.forces[i].life -= dt * 2.8
      if (this.forces[i].life <= 0) this.forces.splice(i, 1)
    }
  }

  get(px: number, py: number): { fx: number; fy: number } {
    let fx = 0
    let fy = 0
    for (const f of this.forces) {
      const dx = f.x - px
      const dy = f.y - py
      const d2 = dx * dx + dy * dy
      const r2 = f.radius * f.radius
      if (d2 > r2) continue
      const d = Math.sqrt(d2) + 1
      const fall = (1 - Math.sqrt(d2) / f.radius) * f.strength * f.life
      const sign = f.type === 'repel' ? -1 : 1
      fx += (sign * dx * fall) / d
      fy += (sign * dy * fall) / d
    }
    return { fx, fy }
  }

  clear(): void {
    this.forces = []
  }
}

export interface AmbientStyle {
  maxAgents: number
  spawnRate: number
  palettes: string[][]
  palette: string[]
  getPalette(): string[]
  spawnAgent(width: number, height: number): [number, number]
  initAgent(agent: AmbientAgent): void
  updateAgent(agent: AmbientAgent, dt: number, forceField: ForceField, width: number, height: number): void
  drawAgent(agent: AmbientAgent, ctx: CanvasRenderingContext2D): void
}

export class AmbientAgent {
  x: number
  y: number
  px: number
  py: number
  vx = 0
  vy = 0
  age = 0
  maxAge = 0
  size = 1
  alpha = 1
  growRate = 0
  color = '#ffffff'
  phase = Math.random() * Math.PI * 2
  readonly noiseOffset: number
  readonly style: AmbientStyle

  constructor(x: number, y: number, style: AmbientStyle) {
    this.x = x
    this.y = y
    this.px = x
    this.py = y
    this.noiseOffset = Math.random() * 9999
    this.style = style
    style.initAgent(this)
  }

  update(dt: number, forceField: ForceField, width: number, height: number): void {
    this.px = this.x
    this.py = this.y
    this.style.updateAgent(this, dt, forceField, width, height)
    this.age++
  }

  draw(ctx: CanvasRenderingContext2D): void {
    this.style.drawAgent(this, ctx)
  }

  isDead(): boolean {
    return this.age >= this.maxAge
  }
}

export class AmbientAgentManager {
  agents: AmbientAgent[] = []
  private spawnTimer = 0
  private width: number
  private height: number
  private readonly style: AmbientStyle

  constructor(width: number, height: number, style: AmbientStyle) {
    this.width = width
    this.height = height
    this.style = style
    style.palette = style.getPalette()
  }

  resize(width: number, height: number): void {
    this.width = width
    this.height = height
  }

  update(dt: number, forceField: ForceField): void {
    this.spawnTimer += dt
    const interval = 0.08 + (this.agents.length / this.style.maxAgents) * 0.3
    if (this.spawnTimer > interval && this.agents.length < this.style.maxAgents) {
      this.spawnTimer = 0
      const count = Math.min(this.style.spawnRate, this.style.maxAgents - this.agents.length)
      for (let i = 0; i < count; i++) {
        const [sx, sy] = this.style.spawnAgent(this.width, this.height)
        this.agents.push(new AmbientAgent(sx, sy, this.style))
      }
    }
    for (const agent of this.agents) agent.update(dt, forceField, this.width, this.height)
    this.agents = this.agents.filter((agent) => !agent.isDead())
  }

  draw(ctx: CanvasRenderingContext2D): void {
    for (const agent of this.agents) agent.draw(ctx)
  }
}
