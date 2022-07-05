import React from 'react'
import './PageFooter.scss'
import instagram from '../../Assets/Images/5ecec78673e4440004f09e77.png';
import facebook from '../../Assets/Images/social_facebook_icon_177155.png';
import twitter from '../../Assets/Images/twitter-icon-circle-logo.png';
import github from '../../Assets/Images/25231.png'
import plaid from '../../Assets/Images/1200px-Plaid_logo.svg.png'
import { Link, NavLink } from 'react-router-dom';

export default function PageFooter() {
    return (
        <footer className='footer'>
            <div className='footer__socials--background'>
                <div className='footer__socials'>
                    <div className='footer__socials-container'>
                        <a href='https://www.instagram.com/klevisdoga'><img src={instagram} alt='instagram icon' className='footer__socials-image' /></a>
                        <a href='https://www.facebook.com'><img src={facebook} alt='facebook icon' className='footer__socials-image footer__socials-image--facebook' /></a>
                        <a href='https://www.github.com/klevisdoga'><img src={github} alt='github icon' className='footer__socials-image' /></a>
                        <a href='https://www.twitter.com'><img src={twitter} alt='twitter icon' className='footer__socials-image footer__socials-image--twitter' /></a>
                    </div>
                    <div className='footer__socials-colab'>
                        <Link to={'/'} className='footer__socials-colab--slice'>SLICE</Link>
                        <span className='footer__socials-colab--x'>X</span>
                        <a href='https://www.plaid.com' className='footer__socials-colab--plaid-link'>PLAID</a>
                    </div>
                </div>
            </div>
            <div className='footer__nav'>
                <div className='footer__nav-info'>
                    <h4 className='footer__nav-info--title footer__nav-info--title-info'>HELP AND INFO</h4>
                    <NavLink to={'/'}>FAQ</NavLink>
                    <NavLink to={'/'}>Contact us</NavLink>
                </div>
                <div className='footer__nav-info'>
                    <h4 className='footer__nav-info--title footer__nav-info--title-more'>MORE</h4>
                    <NavLink to={'/'}>Slice App</NavLink>
                    <NavLink to={'/'}>Gift Vouchers</NavLink>
                </div>
                <div className='footer__nav-info'>
                    <h4 className='footer__nav-info--title footer__nav-info--title-about'>ABOUT SLICE</h4>
                    <NavLink to={'/about'}>About Us</NavLink>
                    <NavLink to={'/'}>Careers</NavLink>
                </div>
            </div>
            <p className='footer__copyright'> &copy; Stash 2022 </p>
        </footer>
    )
}
