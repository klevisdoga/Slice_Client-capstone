import React from 'react'
import HomePageHero from '../../Components/HomePageHero/HomePageHero'
import HomePageInfo from '../../Components/HomePageInfo/HomePageInfo'
import HomePageSignUp from '../../Components/HomePageSignUp/HomePageSignUp'

export default function HomePage({ loggedIn }) {


  return (
    <main className='homepage'>
      <HomePageHero />
      <HomePageInfo />
      <HomePageSignUp
        loggedIn={loggedIn} />
    </main>
  )
}
