import React, { useState, useEffect } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './PageNav.scss'
import burger from '../../Assets/Images/clipart3030668.png'

export default function PageNav({ loggedIn }) {

  const [menu, setMenu] = useState(false);
  const id = sessionStorage.getItem('user_id')

  const handleOpenMenu = () => {
    setMenu(true)
  }

  const handleCloseMenu = () => {
    setMenu(false)
    document.body.style.overflow = "scroll"
  }
  if (menu) {
    document.body.style.overflow = "hidden"
  }



  return (
    <header className='header'>
      <Link to={'/'}><h1 className='header__logo'>SLICE</h1></Link>
      <img onClick={handleOpenMenu} src={burger} alt='burger menu icon' className='header__burger-nav' />
      <nav className={`header__nav ${menu ? "header__nav--open" : ""}`}>
        <span onClick={handleCloseMenu} className='header__nav-close'>X</span>
        <NavLink onClick={handleCloseMenu} to={'/'} className='header__nav-home header__nav-item'>HOME</NavLink>
        <NavLink onClick={handleCloseMenu} to={'/about'} className='header__nav-about header__nav-item'>ABOUT</NavLink>
        <NavLink onClick={handleCloseMenu} to={'/'} className='header__nav-contact header__nav-item'>CONTACT</NavLink>
        {loggedIn ?
          <NavLink onClick={handleCloseMenu} to={`/account/${id}`} className='header__nav-login header__nav-item'>ACCOUNT</NavLink>
          :
          <>
            <NavLink onClick={handleCloseMenu} to={'/signup'} className='header__nav-signup header__nav-item'>SIGN UP</NavLink>
            <NavLink onClick={handleCloseMenu} to={'/login'} className='header__nav-signup header__nav-item'>LOG IN</NavLink>
          </>
        }
      </nav>
    </header>
  )
}
