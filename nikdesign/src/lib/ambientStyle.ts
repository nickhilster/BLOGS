// A single ambient "style" for the homepage background canvas, built the
// same way Pain-ter's `ColorSoul` (Rothko-inspired) style is: soft radial
// glows that drift on simple noise and gently fade in/out over a long
// lifetime. Tuned specifically to sit legibly *behind* page text rather
// than as a fullscreen paint surface — long lifetimes, low alpha, and a
// palette per color mode. The actual light/dark visual adaptation (screen
// vs. multiply) is applied by the caller via the canvas element's CSS
// `mix-blend-mode`, not by this style.
import type { AmbientStyle } from './ambientField'
import { fbm, hexRGB, rgbStr } from './ambientField'

export type AmbientMode = 'light' | 'dark'

const LIGHT_PALETTES: string[][] = [
  ['#4f7fc7', '#e08a5b', '#4fae94', '#8b6fd0'],
  ['#5b8fd6', '#d67a8a', '#5fae7a', '#caa33d'],
]

const DARK_PALETTES: string[][] = [
  ['#3b6ea5', '#2f9e8f', '#6c5ce7', '#c9a227'],
  ['#5b3a8e', '#3fa9a0', '#8654c9', '#33e6a0'],
]

function rand(lo: number, hi: number): number {
  return lo + Math.random() * (hi - lo)
}

function randInt(lo: number, hi: number): number {
  return Math.floor(rand(lo, hi + 1))
}

function randPick<T>(items: T[]): T {
  return items[Math.floor(Math.random() * items.length)]
}

export function createAmbientStyle(mode: AmbientMode): AmbientStyle {
  const palettes = mode === 'dark' ? DARK_PALETTES : LIGHT_PALETTES
  const alphaRange: [number, number] = mode === 'dark' ? [0.08, 0.18] : [0.07, 0.15]

  return {
    maxAgents: 26,
    spawnRate: 1,
    palettes,
    palette: palettes[0],
    getPalette() {
      return randPick(palettes)
    },
    spawnAgent(width, height) {
      return [rand(width * 0.05, width * 0.95), rand(height * 0.05, height * 0.95)]
    },
    initAgent(agent) {
      agent.color = randPick(agent.style.palette)
      agent.maxAge = randInt(600, 1200)
      agent.size = rand(120, 340)
      agent.alpha = rand(alphaRange[0], alphaRange[1])
      agent.vx = rand(-0.15, 0.15)
      agent.vy = rand(-0.12, 0.12)
      agent.growRate = rand(0.03, 0.12)
    },
    updateAgent(agent, dt, forceField, width, height) {
      const nx = fbm(agent.noiseOffset + agent.age * 0.0015) * 0.5
      const ny = fbm(agent.noiseOffset + 500 + agent.age * 0.0015) * 0.5
      agent.vx += nx * dt * 3
      agent.vy += ny * dt * 3
      const { fx, fy } = forceField.get(agent.x, agent.y)
      agent.vx += fx * dt * 6
      agent.vy += fy * dt * 6
      agent.vx *= 0.96
      agent.vy *= 0.96
      agent.x += agent.vx
      agent.y += agent.vy
      agent.size += agent.growRate
      const margin = agent.size * 1.5
      if (agent.x < -margin) agent.x = width + margin
      if (agent.x > width + margin) agent.x = -margin
      if (agent.y < -margin) agent.y = height + margin
      if (agent.y > height + margin) agent.y = -margin
    },
    drawAgent(agent, ctx) {
      // Fade in quickly (so the background reads as present within a couple
      // of seconds rather than a slow multi-second creep) and fade out
      // gradually, instead of a symmetric sine envelope.
      const lifeRatio = Math.min(agent.age / agent.maxAge, 1)
      const fadeIn = Math.min(1, lifeRatio / 0.06)
      const fadeOut = 1 - Math.max(0, (lifeRatio - 0.75) / 0.25)
      const envelope = Math.min(fadeIn, fadeOut)
      const alpha = agent.alpha * envelope
      if (alpha <= 0) return
      const { r, g, b } = hexRGB(agent.color)
      const gradient = ctx.createRadialGradient(agent.x, agent.y, 0, agent.x, agent.y, agent.size)
      gradient.addColorStop(0, rgbStr(r, g, b, alpha))
      gradient.addColorStop(0.6, rgbStr(r, g, b, alpha * 0.4))
      gradient.addColorStop(1, rgbStr(r, g, b, 0))
      ctx.fillStyle = gradient
      ctx.beginPath()
      ctx.arc(agent.x, agent.y, agent.size, 0, Math.PI * 2)
      ctx.fill()
    },
  }
}
