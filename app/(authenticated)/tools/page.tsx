'use client'

import { Header } from '@/components/header'
import { ScientificCalculator } from '@/components/scientific-calculator'

export default function ToolsPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-2">Herramientas y Recursos</h1>
            <p className="text-lg text-muted-foreground">
              Utilidades interactivas para apoyar tu aprendizaje de física
            </p>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Scientific Calculator */}
            <div>
              <ScientificCalculator />
            </div>

            {/* Conversion Tool */}
            <div className="glass-effect rounded-lg p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Conversor de Unidades</h3>

              <div className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Distancia
                  </label>
                  <div className="flex gap-2">
                    <input
                      type="number"
                      placeholder="Valor"
                      className="flex-1 px-3 py-2 bg-background border border-border rounded text-foreground text-sm"
                    />
                    <select className="px-3 py-2 bg-background border border-border rounded text-foreground text-sm">
                      <option>metros</option>
                      <option>km</option>
                      <option>cm</option>
                      <option>mm</option>
                      <option>millas</option>
                    </select>
                  </div>
                </div>

                <div className="bg-card rounded-lg p-4">
                  <p className="text-xs text-muted-foreground mb-1">Equivalencia</p>
                  <p className="font-bold text-foreground">0.00 km</p>
                </div>

                <div className="space-y-2">
                  <p className="text-xs font-bold text-muted-foreground">Conversiones rápidas:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {['m → km', 'km → m', 'cm → m', 'm → cm'].map((conv) => (
                      <button
                        key={conv}
                        className="px-3 py-2 rounded bg-card hover:bg-border transition text-xs font-medium text-foreground"
                      >
                        {conv}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Constants Reference */}
            <div className="glass-effect rounded-lg p-6">
              <h3 className="text-lg font-bold text-foreground mb-4">Constantes Físicas</h3>

              <div className="space-y-3">
                <div className="bg-card rounded-lg p-3">
                  <p className="text-xs text-muted-foreground">Gravedad (g)</p>
                  <p className="font-mono font-bold text-primary">9.81 m/s²</p>
                </div>
                <div className="bg-card rounded-lg p-3">
                  <p className="text-xs text-muted-foreground">Velocidad de la Luz (c)</p>
                  <p className="font-mono font-bold text-accent">3×10⁸ m/s</p>
                </div>
                <div className="bg-card rounded-lg p-3">
                  <p className="text-xs text-muted-foreground">Número de Avogadro</p>
                  <p className="font-mono font-bold text-secondary">6.022×10²³</p>
                </div>
                <div className="bg-card rounded-lg p-3">
                  <p className="text-xs text-muted-foreground">π</p>
                  <p className="font-mono font-bold text-primary">3.14159265</p>
                </div>
                <button className="w-full mt-2 px-4 py-2 rounded bg-primary text-primary-foreground hover:opacity-90 transition text-sm font-medium">
                  Ver más constantes
                </button>
              </div>
            </div>
          </div>

          {/* Formula Reference */}
          <section className="mb-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Fórmulas Importantes</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Kinematics */}
              <div className="glass-effect rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-4">Cinemática</h3>
                <div className="space-y-3 text-sm">
                  <div className="bg-card rounded p-3">
                    <p className="text-muted-foreground mb-1">Velocidad</p>
                    <p className="font-mono font-bold text-primary">v = d/t</p>
                  </div>
                  <div className="bg-card rounded p-3">
                    <p className="text-muted-foreground mb-1">Aceleración</p>
                    <p className="font-mono font-bold text-primary">a = Δv/Δt</p>
                  </div>
                  <div className="bg-card rounded p-3">
                    <p className="text-muted-foreground mb-1">Ecuación de Movimiento</p>
                    <p className="font-mono font-bold text-primary">x = x₀ + v₀t + ½at²</p>
                  </div>
                  <div className="bg-card rounded p-3">
                    <p className="text-muted-foreground mb-1">Energía Cinética</p>
                    <p className="font-mono font-bold text-primary">KE = ½mv²</p>
                  </div>
                </div>
              </div>

              {/* Dynamics */}
              <div className="glass-effect rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-4">Dinámica</h3>
                <div className="space-y-3 text-sm">
                  <div className="bg-card rounded p-3">
                    <p className="text-muted-foreground mb-1">Segunda Ley de Newton</p>
                    <p className="font-mono font-bold text-accent">F = ma</p>
                  </div>
                  <div className="bg-card rounded p-3">
                    <p className="text-muted-foreground mb-1">Peso</p>
                    <p className="font-mono font-bold text-accent">W = mg</p>
                  </div>
                  <div className="bg-card rounded p-3">
                    <p className="text-muted-foreground mb-1">Momento/Impulso</p>
                    <p className="font-mono font-bold text-accent">p = mv</p>
                  </div>
                  <div className="bg-card rounded p-3">
                    <p className="text-muted-foreground mb-1">Trabajo</p>
                    <p className="font-mono font-bold text-accent">W = F·d·cos(θ)</p>
                  </div>
                </div>
              </div>

              {/* Waves */}
              <div className="glass-effect rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-4">Ondas</h3>
                <div className="space-y-3 text-sm">
                  <div className="bg-card rounded p-3">
                    <p className="text-muted-foreground mb-1">Velocidad de Onda</p>
                    <p className="font-mono font-bold text-secondary">v = λf</p>
                  </div>
                  <div className="bg-card rounded p-3">
                    <p className="text-muted-foreground mb-1">Período</p>
                    <p className="font-mono font-bold text-secondary">T = 1/f</p>
                  </div>
                  <div className="bg-card rounded p-3">
                    <p className="text-muted-foreground mb-1">Ecuación de Onda</p>
                    <p className="font-mono font-bold text-secondary">y = A sin(kx - ωt)</p>
                  </div>
                  <div className="bg-card rounded p-3">
                    <p className="text-muted-foreground mb-1">Intensidad</p>
                    <p className="font-mono font-bold text-secondary">I = P/A</p>
                  </div>
                </div>
              </div>

              {/* Vectors */}
              <div className="glass-effect rounded-lg p-6">
                <h3 className="font-bold text-foreground mb-4">Vectores</h3>
                <div className="space-y-3 text-sm">
                  <div className="bg-card rounded p-3">
                    <p className="text-muted-foreground mb-1">Magnitud</p>
                    <p className="font-mono font-bold text-primary">|A| = √(Ax² + Ay²)</p>
                  </div>
                  <div className="bg-card rounded p-3">
                    <p className="text-muted-foreground mb-1">Producto Punto</p>
                    <p className="font-mono font-bold text-primary">A·B = |A||B|cos(θ)</p>
                  </div>
                  <div className="bg-card rounded p-3">
                    <p className="text-muted-foreground mb-1">Producto Cruz</p>
                    <p className="font-mono font-bold text-primary">A×B = |A||B|sin(θ)</p>
                  </div>
                  <div className="bg-card rounded p-3">
                    <p className="text-muted-foreground mb-1">Componentes</p>
                    <p className="font-mono font-bold text-primary">Ax = |A|cos(θ)</p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Quick References */}
          <section className="glass-effect rounded-lg p-8">
            <h2 className="text-2xl font-bold text-foreground mb-6">Prefijos Métricos</h2>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {[
                { prefix: 'tera (T)', value: '10¹²' },
                { prefix: 'giga (G)', value: '10⁹' },
                { prefix: 'mega (M)', value: '10⁶' },
                { prefix: 'kilo (k)', value: '10³' },
                { prefix: 'centi (c)', value: '10⁻²' },
                { prefix: 'mili (m)', value: '10⁻³' },
                { prefix: 'micro (μ)', value: '10⁻⁶' },
                { prefix: 'nano (n)', value: '10⁻⁹' },
              ].map(({ prefix, value }) => (
                <div key={prefix} className="bg-card rounded-lg p-4 text-center">
                  <p className="font-bold text-foreground text-sm">{prefix}</p>
                  <p className="text-muted-foreground text-xs mt-1">{value}</p>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
