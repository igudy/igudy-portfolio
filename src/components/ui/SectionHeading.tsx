import React from 'react'

type Props = {
  eyebrow: string
  title: string
  description?: string
  badgeColor?: string
  light?: boolean
}

const SectionHeading = ({ eyebrow, title, description, badgeColor = 'bg-yellow', light = false }: Props) => {
  return (
    <div className="text-center mb-12">
      <span className={`badge-neo ${badgeColor}`}>{eyebrow}</span>
      <h2 className={`heading text-3xl md:text-5xl mt-5 ${light ? 'text-white' : ''}`}>{title}</h2>
      {description && (
        <p className={`mt-4 max-w-2xl mx-auto ${light ? 'text-white/80' : 'text-ink/70'}`}>
          {description}
        </p>
      )}
    </div>
  )
}

export default SectionHeading
