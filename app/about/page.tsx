'use client'

import { Header } from '@/components/header'
import Link from 'next/link'

export default function AboutPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12">
          {/* Hero Section */}
          <div className="glass-effect rounded-2xl p-12 mb-12 relative overflow-hidden">
            <div className="absolute inset-0 opacity-10 gradient-math"></div>
            <div className="relative z-10">
              <h1 className="text-5xl font-bold text-foreground mb-4">Sobre Physics Lab</h1>
              <p className="text-2xl text-muted-foreground mb-6">
                Transformando la educación científica a través de simulaciones interactivas
              </p>
              <p className="text-lg text-muted-foreground max-w-3xl">
                Physics Lab es una plataforma educativa innovadora diseñada para hacer que el aprendizaje de la física sea
                accesible, interactivo y divertido para estudiantes de todas las edades.
              </p>
            </div>
          </div>

          {/* Mission */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            <div className="glass-effect rounded-lg p-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Nuestra Misión</h2>
              <p className="text-muted-foreground mb-4">
                Democratizar la educación en física proporcionando herramientas interactivas que permitan a los
                estudiantes entender conceptos complejos a través de la visualización y la experimentación.
              </p>
              <p className="text-muted-foreground">
                Creemos que aprender debe ser un proceso divertido y motivador. Por eso hemos diseñado simuladores que
                permiten a los estudiantes explorar, experimentar y descubrir las leyes de la física por sí mismos.
              </p>
            </div>

            <div className="glass-effect rounded-lg p-8">
              <h2 className="text-3xl font-bold text-foreground mb-4">Nuestros Valores</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="font-bold text-foreground mb-2">Excelencia Educativa</h3>
                  <p className="text-muted-foreground text-sm">
                    Contenido riguroso basado en estándares educativos internacionales
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Accesibilidad</h3>
                  <p className="text-muted-foreground text-sm">
                    Educación disponible para todos, independientemente de su nivel inicial
                  </p>
                </div>
                <div>
                  <h3 className="font-bold text-foreground mb-2">Innovación</h3>
                  <p className="text-muted-foreground text-sm">
                    Utilizar tecnología de punta para mejorar la experiencia de aprendizaje
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* Features */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Características Principales</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  icon: '🧪',
                  title: 'Simuladores Interactivos',
                  description:
                    'Explora fenómenos físicos en tiempo real con simuladores completamente personalizables',
                },
                {
                  icon: '📊',
                  title: 'Visualización Avanzada',
                  description:
                    'Gráficos y visualizaciones en 2D y 3D para una comprensión más profunda de conceptos',
                },
                {
                  icon: '🎮',
                  title: 'Gamificación',
                  description:
                    'Badges, puntos y rachas para mantener la motivación y el compromiso con el aprendizaje',
                },
                {
                  icon: '📈',
                  title: 'Seguimiento de Progreso',
                  description:
                    'Analíticos detallados que te muestran exactamente dónde estás y hacia dónde vas',
                },
                {
                  icon: '🧭',
                  title: 'Rutas Personalizadas',
                  description:
                    'Aprende al tu propio ritmo con una estructura flexible adaptada a tus necesidades',
                },
                {
                  icon: '🏆',
                  title: 'Comunidad Global',
                  description:
                    'Compite con estudiantes de todo el mundo y celebra tus logros juntos',
                },
              ].map((feature, idx) => (
                <div key={idx} className="glass-effect rounded-lg p-6 hover:neon-glow-purple transition-all duration-300">
                  <div className="text-5xl mb-4">{feature.icon}</div>
                  <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* How It Works */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Cómo Funciona</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              {[
                {
                  step: 1,
                  title: 'Registrate',
                  description: 'Crea tu cuenta gratis en minutos',
                },
                {
                  step: 2,
                  title: 'Elige tu Trimestre',
                  description: 'Selecciona el área que deseas estudiar',
                },
                {
                  step: 3,
                  title: 'Aprende y Experimenta',
                  description: 'Usa los simuladores para entender conceptos',
                },
                {
                  step: 4,
                  title: 'Gana Logros',
                  description: 'Completa desafíos y sube en el ranking',
                },
              ].map((item) => (
                <div key={item.step} className="glass-effect rounded-lg p-6 text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-xl flex items-center justify-center mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.description}</p>
                </div>
              ))}
            </div>
          </section>

          {/* Curriculum */}
          <section className="mb-12">
            <h2 className="text-3xl font-bold text-foreground mb-8 text-center">Currículo Completo</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  gradient: 'gradient-math',
                  trimester: 'Trimestre 1',
                  title: 'Matemática Aplicada',
                  topics: [
                    'Vectores Básicos',
                    'Escalares y Magnitudes',
                    'Trigonometría',
                    'Operaciones Vectoriales',
                  ],
                },
                {
                  gradient: 'gradient-vector',
                  trimester: 'Trimestre 2',
                  title: 'Análisis Vectorial',
                  topics: ['Vectores 3D', 'Producto Punto', 'Producto Cruz', 'Mecánica Básica'],
                },
                {
                  gradient: 'gradient-wave',
                  trimester: 'Trimestre 3',
                  title: 'Ondas y Fenómenos',
                  topics: [
                    'Introducción a Ondas',
                    'Movimiento Ondulatorio',
                    'Sonido y Luz',
                    'Fenómenos Naturales',
                  ],
                },
              ].map((term, idx) => (
                <div key={idx} className="glass-effect rounded-lg p-6 overflow-hidden relative">
                  <div className={`absolute inset-0 opacity-10 ${term.gradient}`}></div>
                  <div className="relative z-10">
                    <span className={`inline-block px-3 py-1 rounded-full text-white text-xs font-bold ${term.gradient} mb-4`}>
                      {term.trimester}
                    </span>
                    <h3 className="text-2xl font-bold text-foreground mb-4">{term.title}</h3>
                    <ul className="space-y-2">
                      {term.topics.map((topic, i) => (
                        <li key={i} className="text-muted-foreground text-sm flex items-start gap-2">
                          <span className="text-primary mt-1">✓</span>
                          {topic}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* CTA */}
          <section className="glass-effect rounded-2xl p-12 text-center">
            <h2 className="text-4xl font-bold text-foreground mb-4">¿Listo para Comenzar?</h2>
            <p className="text-muted-foreground mb-8 text-lg max-w-2xl mx-auto">
              Únete a miles de estudiantes que ya están transformando su forma de aprender física
            </p>
            <Link
              href="/auth/sign-up"
              className="inline-block px-8 py-4 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition text-lg font-bold neon-glow-purple"
            >
              Crear Cuenta Gratis
            </Link>
          </section>
        </div>
      </main>
    </>
  )
}
