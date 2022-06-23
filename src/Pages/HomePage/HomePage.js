import React from 'react'
import HomePageHero from '../../Components/HomePageHero/HomePageHero'
import HomePageInfo from '../../Components/HomePageInfo/HomePageInfo'
import HomePageSignUp from '../../Components/HomePageSignUp/HomePageSignUp'

export default function HomePage() {
  
  return (
    <main className='homepage'>
      <HomePageHero />
      <HomePageInfo />
      <HomePageSignUp />
    </main>
  )
}
