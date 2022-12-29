import React from 'react'
import Artworks from './Artworks'
import Hero from './Hero'
import NavBar from './NavBar'
import Transactions from './Transactions'

const LandingPage = () => {
  return (
    <div className="max-w-6xl mx-auto">
      <NavBar/>
      <Hero/>
      <Artworks/>
      <Transactions/>
    </div>
  )
}

export default LandingPage