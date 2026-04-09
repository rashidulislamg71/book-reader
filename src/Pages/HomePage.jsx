import React from 'react'
import Books from '../Components/HomePageComponents/Books/Books'
import HeroSection from '../Components/HomePageComponents/HeroSection'
import BookDetailsCard from '../Components/HomePageComponents/Books/BookDetailsCard'

function HomePage() {
  return (
    <div>
      <BookDetailsCard />
      <HeroSection />
      <Books />
    </div>
  )
}

export default HomePage