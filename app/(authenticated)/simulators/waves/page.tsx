'use client'

import { Header } from '@/components/header'
import { WaveSimulator } from '@/components/wave-simulator'

export default function WaveSimulatorPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold text-foreground mb-2">Simulador de Ondas</h1>
            <p className="text-lg text-muted-foreground">
              Explora cómo se comportan las ondas ajustando parámetros como amplitud, frecuencia y longitud de onda
            </p>
          </div>

          <WaveSimulator width={800} height={400} />

          {/* Educational Content */}
          <section className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="glass-effect rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Teoría de Ondas</h3>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Una onda es una perturbación que se propaga a través del espacio o la materia. Las ondas transportan
                  energía sin transportar materia.
                </p>
                <p>
                  Las características principales de una onda son:
                </p>
                <ul className="list-disc list-inside space-y-2">
                  <li><strong>Amplitud (A):</strong> La altura máxima de la onda desde su posición de equilibrio</li>
                  <li><strong>Período (T):</strong> Tiempo que tarda la onda en completar un ciclo</li>
                  <li><strong>Frecuencia (f):</strong> Número de ciclos por unidad de tiempo (f = 1/T)</li>
                  <li><strong>Longitud de onda (λ):</strong> Distancia entre dos crestas consecutivas</li>
                  <li><strong>Velocidad (v):</strong> v = λ × f</li>
                </ul>
              </div>
            </div>

            <div className="glass-effect rounded-lg p-6">
              <h3 className="text-xl font-bold text-foreground mb-4">Tipos de Ondas</h3>
              <div className="space-y-4 text-muted-foreground">
                <div className="bg-card rounded-lg p-4">
                  <p className="font-bold text-foreground mb-2">Ondas Mecánicas</p>
                  <p className="text-sm">
                    Requieren un medio para propagarse: sonido, ondas en el agua, ondas sísmicas
                  </p>
                </div>
                <div className="bg-card rounded-lg p-4">
                  <p className="font-bold text-foreground mb-2">Ondas Electromagnéticas</p>
                  <p className="text-sm">
                    No requieren un medio: luz, radio, rayos X, radiación infrarroja
                  </p>
                </div>
                <div className="bg-card rounded-lg p-4">
                  <p className="font-bold text-foreground mb-2">Ondas Transversales</p>
                  <p className="text-sm">
                    La perturbación es perpendicular a la dirección de propagación
                  </p>
                </div>
                <div className="bg-card rounded-lg p-4">
                  <p className="font-bold text-foreground mb-2">Ondas Longitudinales</p>
                  <p className="text-sm">
                    La perturbación es paralela a la dirección de propagación
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Activities */}
          <section className="mt-12">
            <h3 className="text-2xl font-bold text-foreground mb-6">Actividades Sugeridas</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="glass-effect rounded-lg p-6 cursor-pointer hover:neon-glow-purple transition-all">
                <h4 className="font-bold text-foreground mb-2">Experimento 1</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Mantén la amplitud y longitud constantes, varía la frecuencia y observa cómo cambia el período
                </p>
                <button className="text-primary font-medium hover:underline">Iniciar →</button>
              </div>
              <div className="glass-effect rounded-lg p-6 cursor-pointer hover:neon-glow-cyan transition-all">
                <h4 className="font-bold text-foreground mb-2">Experimento 2</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Verifica que v = λ × f ajustando los parámetros y calculando la velocidad
                </p>
                <button className="text-accent font-medium hover:underline">Iniciar →</button>
              </div>
              <div className="glass-effect rounded-lg p-6 cursor-pointer hover:neon-glow-pink transition-all">
                <h4 className="font-bold text-foreground mb-2">Experimento 3</h4>
                <p className="text-sm text-muted-foreground mb-4">
                  Observa cómo la partícula en azul se mueve perpendicular a la propagación de la onda
                </p>
                <button className="text-secondary font-medium hover:underline">Iniciar →</button>
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
