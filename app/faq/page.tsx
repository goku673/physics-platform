'use client'

import { useState } from 'react'
import { Header } from '@/components/header'

interface FAQItem {
  question: string
  answer: string
}

const faqItems: FAQItem[] = [
  {
    question: '¿Cuánto cuesta Physics Lab?',
    answer:
      'Physics Lab es completamente gratuito. Creemos que la educación de calidad debe ser accesible para todos. Puedes acceder a todos los simuladores, ejercicios y herramientas sin costo alguno.',
  },
  {
    question: '¿Necesito descargar algo?',
    answer:
      'No, Physics Lab es una plataforma web completamente. Solo necesitas un navegador moderno como Chrome, Firefox, Safari o Edge. Funciona en computadoras, tablets y dispositivos móviles.',
  },
  {
    question: '¿Cuál es el nivel recomendado para usar Physics Lab?',
    answer:
      'Physics Lab está diseñado para estudiantes de 13 a 18 años (y adultos interesados en física). El currículo cubre conceptos de nivel secundario, desde matemática aplicada hasta ondas. Sin embargo, cualquiera puede usarlo.',
  },
  {
    question: '¿Puedo aprender a mi propio ritmo?',
    answer:
      'Absolutamente. No hay límites de tiempo ni presión. Puedes completar los ejercicios y simuladores cuando quieras, a tu propio ritmo. El sistema de gamificación está diseñado para motivarte, no para presionarte.',
  },
  {
    question: '¿Qué pasa si me atasco en un concepto?',
    answer:
      'Cada simulador incluye explicaciones detalladas y ejercicios progresivos. Puedes pausar, experimentar, y volver a intentarlo cuantas veces necesites. Además, nuestras herramientas incluyen calculadora científica y referencias de fórmulas.',
  },
  {
    question: '¿Cómo funcionan los badges y puntos?',
    answer:
      'Los badges se desbloquean al completar desafíos específicos (completar un trimestre, mantener una racha, etc.). Los puntos se ganan resolviendo ejercicios correctamente. Ambos sistemas te ayudan a rastrear tu progreso y mantener la motivación.',
  },
  {
    question: '¿Puedo ver mi progreso?',
    answer:
      'Sí, tienes un dashboard completo que muestra tu nivel, puntos totales, racha, badges ganados y progreso en cada trimestre y tópico. Puedes ver exactamente qué has completado y qué te falta.',
  },
  {
    question: '¿Es segura mi información?',
    answer:
      'Sí. Utilizamos Supabase, una plataforma segura con encriptación de datos. Tu información personal y progreso están protegidos con los más altos estándares de seguridad.',
  },
  {
    question: '¿Puedo competir con otros estudiantes?',
    answer:
      'Sí, tenemos un sistema de leaderboard global donde puedes ver tu posición y competir amistosamente con otros estudiantes de todo el mundo. Las posiciones se basan en puntos totales y racha.',
  },
  {
    question: '¿Puedo exportar mi progreso?',
    answer:
      'Actualmente puedes ver tu progreso en el dashboard. Estamos trabajando en opciones de exportación para que puedas compartir tu certificado de finalización.',
  },
  {
    question: '¿Los simuladores funcionan sin conexión a internet?',
    answer:
      'Los simuladores funcionan mejor con conexión a internet, pero algunos pueden funcionar en modo offline. Recomendamos tener una conexión estable para la mejor experiencia.',
  },
  {
    question: '¿Cómo puedo reportar un error?',
    answer:
      'Si encuentras un error o tienes sugerencias, por favor contáctanos a través del formulario de contacto. Tu feedback es valioso y nos ayuda a mejorar la plataforma continuamente.',
  },
]

export default function FAQPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <div className="container mx-auto px-4 py-12 max-w-3xl">
          {/* Header */}
          <div className="mb-12">
            <h1 className="text-4xl font-bold text-foreground mb-2">Preguntas Frecuentes</h1>
            <p className="text-lg text-muted-foreground">
              Encuentra respuestas a las preguntas más comunes sobre Physics Lab
            </p>
          </div>

          {/* FAQ Items */}
          <div className="space-y-4">
            {faqItems.map((item, index) => (
              <div
                key={index}
                className="glass-effect rounded-lg overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 flex items-center justify-between hover:bg-card transition"
                >
                  <h3 className="text-lg font-bold text-foreground text-left">{item.question}</h3>
                  <span
                    className={`text-primary transition-transform duration-300 ${
                      openIndex === index ? 'rotate-180' : ''
                    }`}
                  >
                    ▼
                  </span>
                </button>

                {openIndex === index && (
                  <div className="px-6 py-4 bg-card border-t border-border">
                    <p className="text-muted-foreground">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Contact Section */}
          <div className="mt-12 glass-effect rounded-lg p-8 text-center">
            <h2 className="text-2xl font-bold text-foreground mb-4">¿No encontraste tu pregunta?</h2>
            <p className="text-muted-foreground mb-6">
              Si tienes otras preguntas o necesitas ayuda, no dudes en contactarnos
            </p>
            <button className="px-8 py-3 rounded-lg bg-primary text-primary-foreground hover:opacity-90 transition font-bold">
              Contáctanos
            </button>
          </div>

          {/* Categories */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold text-foreground mb-6">Categorías</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {[
                { emoji: '🎓', title: 'Educación', count: 5 },
                { emoji: '💻', title: 'Técnico', count: 3 },
                { emoji: '🎮', title: 'Gamificación', count: 2 },
                { emoji: '📊', title: 'Progreso', count: 2 },
                { emoji: '🔒', title: 'Seguridad', count: 1 },
                { emoji: '❓', title: 'General', count: 2 },
              ].map((cat, idx) => (
                <div key={idx} className="glass-effect rounded-lg p-6 text-center cursor-pointer hover:neon-glow-purple transition-all">
                  <div className="text-4xl mb-2">{cat.emoji}</div>
                  <h3 className="font-bold text-foreground mb-1">{cat.title}</h3>
                  <p className="text-sm text-muted-foreground">{cat.count} preguntas</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
