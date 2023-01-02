import React from 'react'
import Hero from './Hero'
import Artworks from './Artworks'
import { getAllNFTs } from '../Blockchain.services'

const LandingPage = () => {
  return (
    <div className="max-w-6xl mx-auto">    
      <Hero/>
      <Artworks/>
    </div>
  )
}

export default LandingPage