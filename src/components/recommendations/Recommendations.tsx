import React from 'react'
import { ImQuotesLeft } from 'react-icons/im'
import './recommendations.css'

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
    <section id="recommendations">
      <h5>What People Say</h5>
      <h2>Recommendations</h2>

      <div className="container recommend__container">
        {recommendations.map((r, i) => (
          <article className="recommend__card" key={i}>
            <ImQuotesLeft className="recommend__quote" />
            <p className="recommend__text">{r.text}</p>
            <div className="recommend__author">
              <h3>{r.name}</h3>
              <h4>{r.title}</h4>
              <small>{r.relationship}</small>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Recommendations
