import React from 'react'
import appleMusic from '../../Assets/Images/partners/2560px-Apple_Music_logo.svg.png'
import doorDash from '../../Assets/Images/partners/2560px-DoorDash_Logo.svg.png'
import amazonPrime from '../../Assets/Images/partners/Amazon_Prime_Video_logo.svg.png'
import disneyPlus from '../../Assets/Images/partners/Disney+_logo.svg.png'
import fit4Less from '../../Assets/Images/partners/Fit4Less-logo.png'
import hulu from '../../Assets/Images/partners/Hulu_Logo.svg.png'
import iCloud from '../../Assets/Images/partners/iCloud-Emblem.png'
import netflix from '../../Assets/Images/partners/Netflix_2015_logo.svg.png'
import spotify from '../../Assets/Images/partners/Spotify_Logo_RGB_Green.png'

export default function PartnerImages() {

  const images = [appleMusic, doorDash, amazonPrime, disneyPlus, fit4Less, hulu, iCloud, netflix, spotify, appleMusic, doorDash, amazonPrime, disneyPlus, fit4Less, hulu, iCloud, netflix, spotify, appleMusic, doorDash, amazonPrime, disneyPlus, fit4Less, hulu, iCloud, netflix, spotify ]

  return (
    <div className='about__partners-images' >
      {images.map(image => {
        return (
          <img className='about__partners-image' src={image} alt='apple music badge' />
        )
      })}
    </div>
  )
}
