'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import { Header } from '@/components/header'
import { createClient } from '@/lib/supabase/client'

export default function HomePage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const checkAuth = async () => {
      const supabase = createClient()
      const {
        data: { user },
      } = await supabase.auth.getUser()
      setIsAuthenticated(!!user)
      setLoading(false)
    }
    checkAuth()
  }, [])

  if (loading) {
    return (
      <>
        <Header />
        <div className="min-h-screen bg-background flex items-center justify-center">
          <div className="text-center">
            <div className="animate-spin rounded-full h-12 w-12 border-2 border-primary border-t-transparent mx-auto mb-4"></div>
            <p className="text-muted-foreground">Cargando...</p>
          </div>
        </div>
      </>
    )
  }

  if (isAuthenticated) {
    return (
      <>
        <Header />
        <main className="min-h-screen bg-background">
          <section className="container mx-auto px-4 py-20 text-center">
            <h1 className="text-5xl font-bold text-foreground mb-4">Bienvenido a Physics Lab</h1>
            <p className="text-xl text-muted-foreground mb-8">Tu plataforma interactiva de aprendizaje de física</p>
            <Link
              href="/dashboard"
              className="inline-block px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition text-lg font-bold"
            >
              Ir al Dashboard
            </Link>
          </section>
        </main>
      </>
    )
  }

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="container mx-auto px-4 py-20">
          <div className="relative">
            <div className="absolute top-0 left-0 w-80 h-80 gradient-math opacity-20 rounded-full blur-3xl"></div>
            <div className="absolute top-40 right-0 w-80 h-80 gradient-wave opacity-20 rounded-full blur-3xl"></div>

            <div className="relative z-10 text-center mb-20">
              <h1 className="text-6xl font-bold text-foreground mb-4">Physics Lab</h1>
              <p className="text-2xl text-muted-foreground mb-8">
                Aprende física a través de simulaciones interactivas y gamificación
              </p>

              <div className="flex gap-4 justify-center mb-16 flex-wrap">
                <Link
                  href="/auth/sign-up"
                  className="px-8 py-4 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition text-lg font-bold neon-glow-purple"
                >
                  Comienza Ahora
                </Link>
                <Link
                  href="/auth/login"
                  className="px-8 py-4 rounded-lg border-2 border-primary text-primary hover:bg-primary hover:bg-opacity-10 transition text-lg font-bold"
                >
                  Inicia Sesión
                </Link>
                <Link
                  href="/about"
                  className="px-8 py-4 rounded-lg border-2 border-accent text-accent hover:bg-accent hover:bg-opacity-10 transition text-lg font-bold"
                >
                  Más Información
                </Link>
              </div>
            </div>
          </div>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            <div className="glass-effect rounded-xl p-8 hover:neon-glow-purple transition-all duration-300">
              <div className="text-5xl mb-4">🧪</div>
              <h3 className="text-xl font-bold text-foreground mb-3">Simuladores Interactivos</h3>
              <p className="text-muted-foreground">
                Explora conceptos de física mediante simulaciones en tiempo real. Aprende viendo cómo funcionan las leyes
                físicas.
              </p>
            </div>

            <div className="glass-effect rounded-xl p-8 hover:neon-glow-cyan transition-all duration-300">
              <div className="text-5xl mb-4">🎮</div>
              <h3 className="text-xl font-bold text-foreground mb-3">Gamificación Completa</h3>
              <p className="text-muted-foreground">
                Gana puntos, badges y logros mientras aprendes. Mantén tu racha de aprendizaje diario y sube de nivel.
              </p>
            </div>

            <div className="glass-effect rounded-xl p-8 hover:neon-glow-pink transition-all duration-300">
              <div className="text-5xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-foreground mb-3">Seguimiento de Progreso</h3>
              <p className="text-muted-foreground">
                Visualiza tu progreso en tiempo real. Analiza tus mejoras trimestre a trimestre.
              </p>
            </div>
          </div>

          {/* Trimesters Preview */}
          <div className="mb-20">
            <h2 className="text-4xl font-bold text-foreground mb-12 text-center">Trimestres Disponibles</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Trimester 1 */}
              <div className="glass-effect rounded-xl p-8 overflow-hidden relative group cursor-not-allowed">
                <div className="absolute inset-0 opacity-10 gradient-math"></div>
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 rounded-full gradient-math text-white text-sm font-bold mb-4">
                    Trimestre 1
                  </span>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Matemática Aplicada</h3>
                  <p className="text-muted-foreground mb-6">
                    Domina los fundamentos matemáticos necesarios para la física: vectores, escalares y trigonometría.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-card px-3 py-1 rounded text-muted-foreground">Vectores</span>
                    <span className="text-xs bg-card px-3 py-1 rounded text-muted-foreground">Escalares</span>
                    <span className="text-xs bg-card px-3 py-1 rounded text-muted-foreground">Trigonometría</span>
                  </div>
                </div>
              </div>

              {/* Trimester 2 */}
              <div className="glass-effect rounded-xl p-8 overflow-hidden relative group cursor-not-allowed">
                <div className="absolute inset-0 opacity-10 gradient-vector"></div>
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 rounded-full gradient-vector text-white text-sm font-bold mb-4">
                    Trimestre 2
                  </span>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Análisis Vectorial</h3>
                  <p className="text-muted-foreground mb-6">
                    Comprende el movimiento en el espacio y las fuerzas. Operaciones vectoriales avanzadas y aplicaciones.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-card px-3 py-1 rounded text-muted-foreground">Vectores 3D</span>
                    <span className="text-xs bg-card px-3 py-1 rounded text-muted-foreground">Operaciones</span>
                    <span className="text-xs bg-card px-3 py-1 rounded text-muted-foreground">Mecánica</span>
                  </div>
                </div>
              </div>

              {/* Trimester 3 */}
              <div className="glass-effect rounded-xl p-8 overflow-hidden relative group cursor-not-allowed">
                <div className="absolute inset-0 opacity-10 gradient-wave"></div>
                <div className="relative z-10">
                  <span className="inline-block px-3 py-1 rounded-full gradient-wave text-white text-sm font-bold mb-4">
                    Trimestre 3
                  </span>
                  <h3 className="text-2xl font-bold text-foreground mb-2">Ondas y Fenómenos</h3>
                  <p className="text-muted-foreground mb-6">
                    Explora el movimiento ondulatorio, la propagación del sonido y la luz. Fenómenos naturales fascinantes.
                  </p>
                  <div className="flex flex-wrap gap-2">
                    <span className="text-xs bg-card px-3 py-1 rounded text-muted-foreground">Ondas</span>
                    <span className="text-xs bg-card px-3 py-1 rounded text-muted-foreground">Sonido</span>
                    <span className="text-xs bg-card px-3 py-1 rounded text-muted-foreground">Luz</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="glass-effect rounded-2xl p-12 text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">¿Listo para Comenzar?</h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Únete a miles de estudiantes aprendiendo física de forma interactiva
            </p>
            <Link
              href="/auth/sign-up"
              className="inline-block px-8 py-4 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition text-lg font-bold neon-glow-purple"
            >
              Crear Cuenta Gratis
            </Link>
          </div>
        </section>
      </main>
    </>
  )
}
