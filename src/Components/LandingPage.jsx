import React from 'react'
import Artworks from './Artworks'
import Hero from './Hero'
import Transactions from './Transactions'

const LandingPage = () => {
  return (
    <div className="max-w-6xl mx-auto">    
      <Hero/>
      <Artworks/>
      <Transactions/>
    </div>
  )
}

export default LandingPage