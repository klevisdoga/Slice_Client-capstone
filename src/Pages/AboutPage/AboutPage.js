import React from 'react'
import { Link } from 'react-router-dom'
import PartnerImages from '../../Components/PartnerImages/PartnerImages'
import './AboutPage.scss'

export default function AboutPage() {

    return (
        <div className='about'>
            <div className='about__hero'>
                <Link to={'/'}><h1 className='about__hero-title'>ABOUT</h1></Link>
            </div>
            <div className='about__partners'>
                <PartnerImages />
            </div>
            <div className='about__body'>
                <div className='about__body-purpose'>
                    <h1 className='about__body-purpose-title'>Slice</h1>
                    <p className='about__body-purpose-text'>
                        Slice was designed to help you manage and track your online subscriptions.
                        With the use of the Plaid API (Leading third party Fintech company) users can feel confident and assured that their banking transactions are in safe hands!
                    </p>
                    <p className='about__body-purpose-text'>
                        The purpose of Slice is to avoid surprises when checking your account balance or banking statements.
                        It is now easier than ever to add an online subscription to your list of bills,
                        and most people can't keep up with all the different dates! This is where we come in.
                        Slice let's you house all your subscriptions by either manually inputting each subscription,
                        or logging into your online banking via Plaid and finding your subscriptions through your transaction history.
                        Slice is completely free and easy to use!
                    </p>
                </div>
                <div className='about__body-divider'>
                    <div className='about__body-divider--slice'></div>
                </div>
                <div className='about__body-me'>
                    <h1 className='about__body-me-title'>The developer</h1>
                    <p className='about__body-me-text'>
                        If you've made it this far.... I thank you for taking the time to learn a bit more about Slice and myself.
                        My name is Klevis Doga and this is my capstone project for the BrainStation Web Development Diploma Bootcamp
                        (You can learn more about them <a target="_blank" rel="noreferrer" href='https://www.brainstation.io'>here</a>).
                    </p>
                    <p className='about__body-me-text'>
                        Technology grasped my interest from as early on as I can remember, my passion for technology has continued to accelerate at almost the same pace as the industry has.
                        I've always been fascinated by the complexities of how programs, applications, and websites function.
                        Technology is the very way you are able to read this right now almost anywhere in the world!

                        The most rewarding aspect of this industry is tackling problems, as the feeling of solving them is euphoric.
                        It's because of this passion and approach that I decided to pursue a career as a programmer...
                        the ability to develop something with the potential of transforming people's lives while also solving complex problems on a daily basis.
                        I believe that being a developer is much more than a career. It allows you to be free, creative, and constantly learn and innovate as things are forever growing.
                    </p>
                </div>
                <p className='about__body-me-endtext'>
                    If you'd like to know a little bit more about or Slice, feel free to reach out and <a href='https://www.linkedin.com/in/klevisdoga' target="_blank" rel="noreferrer">connect</a>!<br />
                    I hope you either found some value out of Slice App!
                </p>
            </div>
        </div >
    )
}

