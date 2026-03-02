import React from 'react'
import HomeHero from '../sections/HomeHero'
import transition from '../transition'

const Home = () => {
  return (
    <div className="overflow-hidden">
      <HomeHero />
    </div>
  )
}

export default transition(Home)