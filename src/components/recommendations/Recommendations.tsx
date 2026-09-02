import React from 'react'
import { ImQuotesLeft } from 'react-icons/im'
import SectionHeading from '../ui/SectionHeading'

const recommendations = [
  {
    name: 'Osuji Nnamdi Daniel',
    title: 'Senior Software Engineer | Node.js | NestJS | Go | React | React Native | Core Banking Systems | Payments',
    relationship: 'Worked with Goodness on the same team',
    text: "I remember working with Goodness on a feature to set a transaction limit a bank cashier can initiate without approval. The feature was incredibly complex due to the complicated payload structure with numerous nested arrays. Thanks to Goodness's resilience and brilliance, we completed it within the deadline. He is a highly dedicated and intelligent frontend engineer whose approach begins with understanding the problem thoroughly. In his words, \"Understanding the problem helps us reduce development time.\" He is truly an asset to any team.",
  },
]

const Recommendations = () => {
  return (
    <section id="recommendations" className="section bg-beige">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading eyebrow="What People Say" title="Recommendations" />

        <div className="flex justify-center">
          {recommendations.map((r, i) => (
            <article key={i} className="card-neo-3 p-8 max-w-3xl">
              <div className="grid place-items-center w-11 h-11 bg-yellow border-2 border-ink mb-5 text-lg">
                <ImQuotesLeft />
              </div>
              <p className="text-ink/80 italic leading-relaxed">{r.text}</p>
              <div className="mt-6 pt-5 border-t-2 border-ink">
                <h3 className="heading text-base">{r.name}</h3>
                <h4 className="text-purple text-sm mt-1 leading-snug">{r.title}</h4>
                <small className="text-ink/50 text-xs block mt-1">{r.relationship}</small>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Recommendations
