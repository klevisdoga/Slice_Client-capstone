import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import './PageNav.scss'
import burger from '../../Assets/Images/clipart3030668.png'

export default function PageNav({loggedIn}) {

  const [menu, setMenu] = useState('false');

  const handleOpenMenu = () => {
    setMenu('true')
  }
  const handleCloseMenu = () => {
    setMenu('false')
  }
  if (menu === 'true') {
    return (
      <nav className='header__nav'>
        <span onClick={handleCloseMenu} className='header__nav-close'>X</span>
        <NavLink onClick={handleCloseMenu} to={'/'} className='header__nav-home header__nav-item'>HOME</NavLink>
        <NavLink onClick={handleCloseMenu} to={'/about'} className='header__nav-about header__nav-item'>ABOUT</NavLink>
        <NavLink onClick={handleCloseMenu} to={'/'} className='header__nav-contact header__nav-item'>CONTACT</NavLink>
        {loggedIn === 'true' ?
          <NavLink onClick={handleCloseMenu} to={'/'} className='header__nav-login header__nav-item'>LOGIN</NavLink>
          :
          <NavLink onClick={handleCloseMenu} to={'/'} className='header__nav-signup header__nav-item'>SIGN UP</NavLink>
        }
      </nav>
    )
  }
  return (
    <header className='header'>
      <h1 className='header__logo'>STASH</h1>
      <img onClick={handleOpenMenu} src={burger} alt='burger menu icon' className='header__burger-nav' />

    </header>
  )
}
