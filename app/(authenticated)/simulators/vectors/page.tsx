'use client'

import { Header } from '@/components/header'
import { VectorSimulator } from '@/components/vector-simulator'

export default function VectorSimulatorPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Simulador de Vectores</h1>
            <p className="text-lg text-muted-foreground">
              Aprende sobre operaciones vectoriales: suma, resta, producto punto y producto cruz
            </p>
          </div>

          <VectorSimulator width={800} height={400} />

          {/* Educational Content */}
          <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-effect rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">¿Qué es un Vector?</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Un vector es una cantidad que tiene magnitud (tamaño) y dirección. Se representa gráficamente como una
                  flecha.
                </p>
                <p>
                  <strong>Características:</strong>
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Magnitud:</strong> La longitud del vector, calculada como √(x² + y²)</li>
                  <li><strong>Dirección:</strong> El ángulo que forma con el eje X</li>
                  <li><strong>Punto de aplicación:</strong> Donde comienza el vector</li>
                </ul>
              </div>
            </div>

            <div className="glass-effect rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Operaciones Vectoriales</h3>
              <div className="space-y-3 text-muted-foreground">
                <div className="bg-card rounded-lg p-4">
                  <p className="font-bold text-foreground mb-1">Suma: A + B</p>
                  <p className="text-sm">Coloca el inicio de B en el final de A</p>
                </div>
                <div className="bg-card rounded-lg p-4">
                  <p className="font-bold text-foreground mb-1">Resta: A - B</p>
                  <p className="text-sm">Suma A con el opuesto de B: A + (-B)</p>
                </div>
                <div className="bg-card rounded-lg p-4">
                  <p className="font-bold text-foreground mb-1">Producto Punto: A · B</p>
                  <p className="text-sm">A·B = |A||B|cos(θ), resultado es un escalar</p>
                </div>
                <div className="bg-card rounded-lg p-4">
                  <p className="font-bold text-foreground mb-1">Producto Cruz: A × B</p>
                  <p className="text-sm">A×B = |A||B|sin(θ), resultado es perpendicular a ambos</p>
                </div>
              </div>
            </div>
          </section>

          {/* Applications */}
          <section className="mt-12">
            <h3 className="text-2xl font-bold text-foreground mb-6">Aplicaciones en Física</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="glass-effect rounded-lg p-6">
                <h4 className="font-bold text-foreground mb-2">Movimiento</h4>
                <p className="text-sm text-muted-foreground">
                  Los vectores se usan para describir desplazamiento, velocidad y aceleración
                </p>
              </div>
              <div className="glass-effect rounded-lg p-6">
                <h4 className="font-bold text-foreground mb-2">Fuerzas</h4>
                <p className="text-sm text-muted-foreground">
                  Las fuerzas son vectores. Pueden sumarse para encontrar la fuerza resultante
                </p>
              </div>
              <div className="glass-effect rounded-lg p-6">
                <h4 className="font-bold text-foreground mb-2">Trabajo y Energía</h4>
                <p className="text-sm text-muted-foreground">
                  El trabajo es el producto punto de fuerza y desplazamiento: W = F · d
                </p>
              </div>
            </div>
          </section>

          {/* Practice Exercises */}
          <section className="mt-12 glass-effect rounded-lg p-8">
            <h3 className="text-2xl font-bold text-foreground mb-6">Ejercicios de Práctica</h3>
            <div className="space-y-4">
              <div className="bg-card rounded-lg p-4">
                <p className="font-bold text-foreground mb-2">Ejercicio 1</p>
                <p className="text-muted-foreground text-sm mb-3">
                  Dado A = (3, 4) y B = (1, 2), calcula A + B y su magnitud
                </p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Respuesta"
                    className="flex-1 px-3 py-2 bg-background border border-border rounded text-foreground text-sm"
                  />
                  <button className="px-4 py-2 bg-primary text-primary-foreground rounded text-sm font-medium hover:opacity-90">
                    Verificar
                  </button>
                </div>
              </div>

              <div className="bg-card rounded-lg p-4">
                <p className="font-bold text-foreground mb-2">Ejercicio 2</p>
                <p className="text-muted-foreground text-sm mb-3">
                  Dado A = (2, 3) y B = (4, 1), calcula el producto punto A · B
                </p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Respuesta"
                    className="flex-1 px-3 py-2 bg-background border border-border rounded text-foreground text-sm"
                  />
                  <button className="px-4 py-2 bg-primary text-primary-foreground rounded text-sm font-medium hover:opacity-90">
                    Verificar
                  </button>
                </div>
              </div>

              <div className="bg-card rounded-lg p-4">
                <p className="font-bold text-foreground mb-2">Ejercicio 3</p>
                <p className="text-muted-foreground text-sm mb-3">
                  Si |A| = 5 y |B| = 3, y el ángulo entre ellos es 60°, ¿cuál es A · B?
                </p>
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Respuesta"
                    className="flex-1 px-3 py-2 bg-background border border-border rounded text-foreground text-sm"
                  />
                  <button className="px-4 py-2 bg-primary text-primary-foreground rounded text-sm font-medium hover:opacity-90">
                    Verificar
                  </button>
                </div>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
