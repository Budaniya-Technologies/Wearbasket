"use client"
import React from 'react'
import HeroSession from './HeroSession'
import GrideSection from './GrideSection'
import Ussection from '../About/Ussection'
import TopSellerProducts from '../About/TopSellerProducts'

const Home1 = () => {
  return (
    <div>
      <HeroSession />
      <Ussection />
      <TopSellerProducts />
      <GrideSection />
      
    </div>
  )
}

export default Home1
