import React from 'react'
import Navbar from '../Components/Navbar'
import HeroSection from '../Components/HeroSection'
import Services from '../Components/Services'
import VisionMission from '../Components/VissionMission'
import Companies from '../Components/Companies'

const Index = () => {
  return (
    <div>
        <Navbar />
        <HeroSection />
        <VisionMission />
        <Companies />
        <Services />
    </div>
  )
}

export default Index