import React, { useRef } from 'react'
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

  const scroller = useRef()

  const preventScrolling = () => {
    scroller.preventScrolling()
  }
  return (
    <div className='about__partners-images' ref={scroller}>
      <img className='about__partners-image' src={appleMusic} alt='apple music badge' />
      <img className='about__partners-image' src={doorDash} alt='door dash badge' />
      <img className='about__partners-image' src={amazonPrime} alt='amazon prime badge' />
      <img className='about__partners-image' src={disneyPlus} alt='disney + badge' />
      <img className='about__partners-image' src={fit4Less} alt='fit4less badge' />
      <img className='about__partners-image' src={hulu} alt='hulu badge' />
      <img className='about__partners-image' src={iCloud} alt='icloud badge' />
      <img className='about__partners-image' src={netflix} alt='netflix badge' />
      <img className='about__partners-image' src={spotify} alt='spotify badge' />
      <img className='about__partners-image' src={appleMusic} alt='apple music badge' />
      <img className='about__partners-image' src={doorDash} alt='door dash badge' />
      <img className='about__partners-image' src={amazonPrime} alt='amazon prime badge' />
      <img className='about__partners-image' src={disneyPlus} alt='disney + badge' />
      <img className='about__partners-image' src={fit4Less} alt='fit4less badge' />
      <img className='about__partners-image' src={hulu} alt='hulu badge' />
      <img className='about__partners-image' src={iCloud} alt='icloud badge' />
      <img className='about__partners-image' src={netflix} alt='netflix badge' />
      <img className='about__partners-image' src={spotify} alt='spotify badge' />
    </div>
  )
}
