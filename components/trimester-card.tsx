'use client'

import Link from 'next/link'

export interface TrimesterCardProps {
  trimester: number
  title: string
  description: string
  topics: string[]
  gradient: string
  icon: string
  progress?: number
}

export function TrimesterCard({
  trimester,
  title,
  description,
  topics,
  gradient,
  icon,
  progress = 0,
}: TrimesterCardProps) {
  return (
    <Link href={`/trimester/${trimester}`}>
      <div className={`glass-effect rounded-xl p-6 cursor-pointer hover:scale-105 transition-transform duration-300 group overflow-hidden relative`}>
        {/* Background gradient */}
        <div className={`absolute inset-0 opacity-10 ${gradient}`}></div>

        <div className="relative z-10">
          <div className="flex items-start justify-between mb-4">
            <div>
              <span className={`text-4xl ${gradient} bg-clip-text text-transparent`}>{icon}</span>
            </div>
            <span className={`text-xs px-2 py-1 rounded-full ${gradient} text-white font-semibold`}>
              T{trimester}
            </span>
          </div>

          <h3 className="text-xl font-bold text-foreground mb-2">{title}</h3>
          <p className="text-sm text-muted-foreground mb-4">{description}</p>

          {/* Topics */}
          <div className="flex flex-wrap gap-2 mb-4">
            {topics.map((topic, i) => (
              <span key={i} className="text-xs bg-card px-2 py-1 rounded text-muted-foreground">
                {topic}
              </span>
            ))}
          </div>

          {/* Progress bar */}
          <div className="mt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-muted-foreground">Progress</span>
              <span className="text-xs font-semibold text-primary">{progress}%</span>
            </div>
            <div className="w-full bg-card rounded-full h-2">
              <div
                className={`h-full rounded-full transition-all duration-300 ${gradient}`}
                style={{ width: `${progress}%` }}
              ></div>
            </div>
          </div>
        </div>
      </div>
    </Link>
  )
}
