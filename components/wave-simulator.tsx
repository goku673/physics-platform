'use client'

import { useEffect, useRef, useState } from 'react'

export interface WaveSimulatorProps {
  width?: number
  height?: number
}

export function WaveSimulator({ width = 800, height = 400 }: WaveSimulatorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [amplitude, setAmplitude] = useState(50)
  const [frequency, setFrequency] = useState(0.02)
  const [wavelength, setWavelength] = useState(100)
  const [speed, setSpeed] = useState(1)
  const [isRunning, setIsRunning] = useState(true)
  const animationRef = useRef<number | null>(null)
  const timeRef = useRef(0)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const animate = () => {
      if (!isRunning) {
        animationRef.current = requestAnimationFrame(animate)
        return
      }

      // Clear canvas
      ctx.fillStyle = 'rgba(15, 15, 35, 0.1)'
      ctx.fillRect(0, 0, width, height)

      // Draw grid
      ctx.strokeStyle = 'rgba(147, 112, 219, 0.1)'
      ctx.lineWidth = 1
      for (let i = 0; i < width; i += 50) {
        ctx.beginPath()
        ctx.moveTo(i, 0)
        ctx.lineTo(i, height)
        ctx.stroke()
      }
      for (let i = 0; i < height; i += 50) {
        ctx.beginPath()
        ctx.moveTo(0, i)
        ctx.lineTo(width, i)
        ctx.stroke()
      }

      // Draw center line
      ctx.strokeStyle = 'rgba(147, 112, 219, 0.3)'
      ctx.lineWidth = 1
      ctx.beginPath()
      ctx.moveTo(0, height / 2)
      ctx.lineTo(width, height / 2)
      ctx.stroke()

      // Draw wave
      ctx.strokeStyle = '#9370db'
      ctx.lineWidth = 3
      ctx.beginPath()

      for (let x = 0; x < width; x++) {
        const y =
          (height / 2) +
          amplitude * Math.sin((x / wavelength) * Math.PI * 2 - frequency * timeRef.current * speed)
        if (x === 0) {
          ctx.moveTo(x, y)
        } else {
          ctx.lineTo(x, y)
        }
      }
      ctx.stroke()

      // Draw particle motion indicator
      const particleX = 100
      const particleY =
        (height / 2) +
        amplitude * Math.sin((particleX / wavelength) * Math.PI * 2 - frequency * timeRef.current * speed)

      ctx.fillStyle = '#4facfe'
      ctx.beginPath()
      ctx.arc(particleX, particleY, 6, 0, Math.PI * 2)
      ctx.fill()

      // Draw velocity vector
      const dydx = amplitude * (Math.PI * 2 / wavelength) * Math.cos((particleX / wavelength) * Math.PI * 2 - frequency * timeRef.current * speed)
      const vx = -20
      const vy = dydx * vx * (amplitude / wavelength)

      ctx.strokeStyle = '#f5576c'
      ctx.lineWidth = 2
      ctx.beginPath()
      ctx.moveTo(particleX, particleY)
      ctx.lineTo(particleX + vx, particleY + vy)
      ctx.stroke()

      // Arrow head
      const angle = Math.atan2(vy, vx)
      const size = 8
      ctx.fillStyle = '#f5576c'
      ctx.beginPath()
      ctx.moveTo(particleX + vx, particleY + vy)
      ctx.lineTo(
        particleX + vx - size * Math.cos(angle - Math.PI / 6),
        particleY + vy - size * Math.sin(angle - Math.PI / 6)
      )
      ctx.lineTo(
        particleX + vx - size * Math.cos(angle + Math.PI / 6),
        particleY + vy - size * Math.sin(angle + Math.PI / 6)
      )
      ctx.fill()

      timeRef.current++
      animationRef.current = requestAnimationFrame(animate)
    }

    animationRef.current = requestAnimationFrame(animate)

    return () => {
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current)
      }
    }
  }, [amplitude, frequency, wavelength, speed, width, height, isRunning])

  return (
    <div className="space-y-6">
      <div className="glass-effect rounded-lg p-6">
        <h3 className="text-lg font-bold text-foreground mb-4">Simulador de Ondas</h3>

        <canvas
          ref={canvasRef}
          width={width}
          height={height}
          className="w-full border border-border rounded-lg mb-6"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Amplitude Control */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Amplitud: <span className="text-primary">{amplitude}</span>
            </label>
            <input
              type="range"
              min="10"
              max="150"
              value={amplitude}
              onChange={(e) => setAmplitude(Number(e.target.value))}
              className="w-full"
            />
            <p className="text-xs text-muted-foreground mt-2">
              La amplitud controla la altura máxima de la onda
            </p>
          </div>

          {/* Frequency Control */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Frecuencia: <span className="text-accent">{frequency.toFixed(3)}</span>
            </label>
            <input
              type="range"
              min="0.01"
              max="0.1"
              step="0.001"
              value={frequency}
              onChange={(e) => setFrequency(Number(e.target.value))}
              className="w-full"
            />
            <p className="text-xs text-muted-foreground mt-2">
              La frecuencia determina cuántas ondas por unidad de tiempo
            </p>
          </div>

          {/* Wavelength Control */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Longitud de Onda: <span className="text-secondary">{wavelength}</span>
            </label>
            <input
              type="range"
              min="30"
              max="300"
              value={wavelength}
              onChange={(e) => setWavelength(Number(e.target.value))}
              className="w-full"
            />
            <p className="text-xs text-muted-foreground mt-2">
              La longitud de onda es la distancia entre dos crestas consecutivas
            </p>
          </div>

          {/* Speed Control */}
          <div>
            <label className="block text-sm font-medium text-foreground mb-2">
              Velocidad: <span className="text-primary">{speed.toFixed(1)}x</span>
            </label>
            <input
              type="range"
              min="0.1"
              max="3"
              step="0.1"
              value={speed}
              onChange={(e) => setSpeed(Number(e.target.value))}
              className="w-full"
            />
            <p className="text-xs text-muted-foreground mt-2">
              Controla la velocidad de la animación
            </p>
          </div>
        </div>

        {/* Play/Pause Button */}
        <div className="mt-6 flex gap-4">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition font-medium"
          >
            {isRunning ? '⏸ Pausar' : '▶ Reproducir'}
          </button>
          <button
            onClick={() => {
              timeRef.current = 0
            }}
            className="px-4 py-2 rounded-lg border border-primary text-primary hover:bg-primary hover:bg-opacity-10 transition font-medium"
          >
            ↺ Reiniciar
          </button>
        </div>
      </div>

      {/* Info Section */}
      <div className="glass-effect rounded-lg p-6">
        <h4 className="text-lg font-bold text-foreground mb-4">Conceptos Clave</h4>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-card rounded-lg p-4">
            <p className="text-sm text-muted-foreground mb-2">Amplitud (A)</p>
            <p className="text-foreground font-semibold">{amplitude} unidades</p>
            <p className="text-xs text-muted-foreground mt-2">
              Desplazamiento máximo desde la posición de equilibrio
            </p>
          </div>
          <div className="bg-card rounded-lg p-4">
            <p className="text-sm text-muted-foreground mb-2">Longitud de Onda (λ)</p>
            <p className="text-foreground font-semibold">{wavelength} px</p>
            <p className="text-xs text-muted-foreground mt-2">
              Distancia espacial de un ciclo completo
            </p>
          </div>
          <div className="bg-card rounded-lg p-4">
            <p className="text-sm text-muted-foreground mb-2">Período (T)</p>
            <p className="text-foreground font-semibold">
              {(1 / (frequency * 10)).toFixed(2)} s
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              Tiempo para completar un ciclo completo
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
