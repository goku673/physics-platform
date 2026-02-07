'use client'

import { useEffect, useRef, useState } from 'react'

export interface VectorSimulatorProps {
  width?: number
  height?: number
}

export function VectorSimulator({ width = 800, height = 400 }: VectorSimulatorProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const [vec1X, setVec1X] = useState(150)
  const [vec1Y, setVec1Y] = useState(-100)
  const [vec2X, setVec2X] = useState(100)
  const [vec2Y, setVec2Y] = useState(120)
  const [operation, setOperation] = useState<'add' | 'subtract' | 'dot' | 'cross'>('add')

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const centerX = width / 2
    const centerY = height / 2
    const scale = 1

    // Clear canvas
    ctx.fillStyle = 'rgba(15, 15, 35, 0.1)'
    ctx.fillRect(0, 0, width, height)

    // Draw grid
    ctx.strokeStyle = 'rgba(147, 112, 219, 0.1)'
    ctx.lineWidth = 1
    for (let i = centerX; i < width; i += 50) {
      ctx.beginPath()
      ctx.moveTo(i, 0)
      ctx.lineTo(i, height)
      ctx.stroke()
    }
    for (let i = centerX; i >= 0; i -= 50) {
      ctx.beginPath()
      ctx.moveTo(i, 0)
      ctx.lineTo(i, height)
      ctx.stroke()
    }
    for (let i = centerY; i < height; i += 50) {
      ctx.beginPath()
      ctx.moveTo(0, i)
      ctx.lineTo(width, i)
      ctx.stroke()
    }
    for (let i = centerY; i >= 0; i -= 50) {
      ctx.beginPath()
      ctx.moveTo(0, i)
      ctx.lineTo(width, i)
      ctx.stroke()
    }

    // Draw axes
    ctx.strokeStyle = 'rgba(147, 112, 219, 0.5)'
    ctx.lineWidth = 2
    ctx.beginPath()
    ctx.moveTo(0, centerY)
    ctx.lineTo(width, centerY)
    ctx.stroke()
    ctx.beginPath()
    ctx.moveTo(centerX, 0)
    ctx.lineTo(centerX, height)
    ctx.stroke()

    // Helper function to draw arrow
    const drawArrow = (
      fromX: number,
      fromY: number,
      toX: number,
      toY: number,
      color: string,
      label: string
    ) => {
      const headlen = 15
      const angle = Math.atan2(toY - fromY, toX - fromX)

      // Draw line
      ctx.strokeStyle = color
      ctx.lineWidth = 3
      ctx.beginPath()
      ctx.moveTo(fromX, fromY)
      ctx.lineTo(toX, toY)
      ctx.stroke()

      // Draw arrowhead
      ctx.fillStyle = color
      ctx.beginPath()
      ctx.moveTo(toX, toY)
      ctx.lineTo(toX - headlen * Math.cos(angle - Math.PI / 6), toY - headlen * Math.sin(angle - Math.PI / 6))
      ctx.lineTo(toX - headlen * Math.cos(angle + Math.PI / 6), toY - headlen * Math.sin(angle + Math.PI / 6))
      ctx.closePath()
      ctx.fill()

      // Draw label
      ctx.fillStyle = color
      ctx.font = 'bold 14px Arial'
      ctx.fillText(label, toX + 10, toY - 5)
    }

    // Draw Vector 1
    drawArrow(centerX, centerY, centerX + vec1X, centerY - vec1Y, '#f093fb', 'A')

    // Draw Vector 2
    drawArrow(centerX, centerY, centerX + vec2X, centerY - vec2Y, '#4facfe', 'B')

    // Calculate and draw result
    let resultX = 0,
      resultY = 0,
      resultLabel = '',
      resultColor = ''

    switch (operation) {
      case 'add':
        resultX = vec1X + vec2X
        resultY = vec1Y + vec2Y
        resultLabel = 'A + B'
        resultColor = '#00f2fe'
        break
      case 'subtract':
        resultX = vec1X - vec2X
        resultY = vec1Y - vec2Y
        resultLabel = 'A - B'
        resultColor = '#ffd60a'
        break
      case 'dot': {
        const dot = vec1X * vec2X + vec1Y * vec2Y
        const length = Math.sqrt(dot * dot)
        resultX = length * Math.cos(Math.atan2(vec1Y, vec1X) + Math.atan2(vec2Y, vec2X)) * 0.5
        resultY = length * Math.sin(Math.atan2(vec1Y, vec1X) + Math.atan2(vec2Y, vec2X)) * 0.5
        resultLabel = `A·B = ${dot.toFixed(0)}`
        resultColor = '#a8dadc'
        break
      }
      case 'cross': {
        const cross = vec1X * vec2Y - vec1Y * vec2X
        resultX = Math.cos(Math.atan2(vec1Y, vec1X) + Math.PI / 2) * (Math.abs(cross) / 100)
        resultY = Math.sin(Math.atan2(vec1Y, vec1X) + Math.PI / 2) * (Math.abs(cross) / 100)
        resultLabel = `A × B = ${cross.toFixed(0)}`
        resultColor = '#f4a261'
        break
      }
    }

    if (operation !== 'dot' && operation !== 'cross') {
      drawArrow(centerX, centerY, centerX + resultX, centerY - resultY, resultColor, resultLabel)
    } else {
      // For dot and cross product, show as text
      ctx.fillStyle = resultColor
      ctx.font = 'bold 16px Arial'
      ctx.fillText(resultLabel, 20, 30)
    }
  }, [vec1X, vec1Y, vec2X, vec2Y, operation, width, height])

  return (
    <div className="space-y-6">
      <div className="glass-effect rounded-lg p-6">
        <h3 className="text-lg font-bold text-foreground mb-4">Simulador de Vectores</h3>

        <canvas
          ref={canvasRef}
          width={width}
          height={height}
          className="w-full border border-border rounded-lg mb-6"
        />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Vector A Controls */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground flex items-center gap-2">
              <span className="w-4 h-4 rounded" style={{ backgroundColor: '#f093fb' }}></span>
              Vector A
            </h4>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                X: <span className="text-primary">{vec1X}</span>
              </label>
              <input
                type="range"
                min="-250"
                max="250"
                value={vec1X}
                onChange={(e) => setVec1X(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Y: <span className="text-primary">{vec1Y}</span>
              </label>
              <input
                type="range"
                min="-250"
                max="250"
                value={vec1Y}
                onChange={(e) => setVec1Y(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div className="bg-card rounded-lg p-3 text-sm">
              <p className="text-muted-foreground">Magnitud:</p>
              <p className="text-foreground font-bold">
                {Math.sqrt(vec1X * vec1X + vec1Y * vec1Y).toFixed(2)}
              </p>
            </div>
          </div>

          {/* Vector B Controls */}
          <div className="space-y-4">
            <h4 className="font-bold text-foreground flex items-center gap-2">
              <span className="w-4 h-4 rounded" style={{ backgroundColor: '#4facfe' }}></span>
              Vector B
            </h4>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                X: <span className="text-accent">{vec2X}</span>
              </label>
              <input
                type="range"
                min="-250"
                max="250"
                value={vec2X}
                onChange={(e) => setVec2X(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-foreground mb-2">
                Y: <span className="text-accent">{vec2Y}</span>
              </label>
              <input
                type="range"
                min="-250"
                max="250"
                value={vec2Y}
                onChange={(e) => setVec2Y(Number(e.target.value))}
                className="w-full"
              />
            </div>

            <div className="bg-card rounded-lg p-3 text-sm">
              <p className="text-muted-foreground">Magnitud:</p>
              <p className="text-foreground font-bold">
                {Math.sqrt(vec2X * vec2X + vec2Y * vec2Y).toFixed(2)}
              </p>
            </div>
          </div>
        </div>

        {/* Operation Selection */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-foreground mb-3">Operación:</label>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {(['add', 'subtract', 'dot', 'cross'] as const).map((op) => (
              <button
                key={op}
                onClick={() => setOperation(op)}
                className={`py-2 px-3 rounded-lg font-medium transition ${
                  operation === op
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-card text-foreground hover:bg-border'
                }`}
              >
                {op === 'add' && 'A + B'}
                {op === 'subtract' && 'A - B'}
                {op === 'dot' && 'A · B'}
                {op === 'cross' && 'A × B'}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Results */}
      <div className="glass-effect rounded-lg p-6">
        <h4 className="text-lg font-bold text-foreground mb-4">Resultados</h4>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-card rounded-lg p-4">
            <p className="text-sm text-muted-foreground mb-2">Vector A</p>
            <p className="text-foreground font-mono font-bold">
              ({vec1X}, {vec1Y})
            </p>
          </div>
          <div className="bg-card rounded-lg p-4">
            <p className="text-sm text-muted-foreground mb-2">Vector B</p>
            <p className="text-foreground font-mono font-bold">
              ({vec2X}, {vec2Y})
            </p>
          </div>
          <div className="bg-card rounded-lg p-4">
            <p className="text-sm text-muted-foreground mb-2">Producto Punto</p>
            <p className="text-foreground font-mono font-bold">
              {(vec1X * vec2X + vec1Y * vec2Y).toFixed(2)}
            </p>
          </div>
          <div className="bg-card rounded-lg p-4">
            <p className="text-sm text-muted-foreground mb-2">Producto Cruz (Z)</p>
            <p className="text-foreground font-mono font-bold">
              {(vec1X * vec2Y - vec1Y * vec2X).toFixed(2)}
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
