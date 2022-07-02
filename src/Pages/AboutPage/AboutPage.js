import React from 'react'
import PartnerImages from '../../Components/PartnerImages/PartnerImages'
import './AboutPage.scss'

export default function AboutPage() {

    return (
        <div className='about'>
            <div className='about__hero'>
                <h1 className='about__hero-title'>SLICE</h1>
            </div>
            <div className='about__partners'>
                <PartnerImages />
            </div>
            <div className='about__body'>
                <div className='about__body-purpose'>
                    <h2 className='about__body-purpose-title'>Our Purpose</h2>
                    <p className='about__body-purpose-text'>
                        The purpose of Slice App is to help people have control over their subscriptions.
                        I personally struggle with managing my subscriptions and staying up to date with when my bills are due.
                        Because of this I come across A LOT of surprises when checking my bank account...
                        expecting it to be at a certain amount just to realize it's not! <br />
                        If you are someone who's like me or just doesnt have time to sit there and dig through statements and play the guessing game to find out all your subscriptions,
                        this is the perfect place to solve that and stay in control over your subscriptions
                    </p>
                </div>
                <div className='about__body-me'>
                    <h2 className='about__body-me-title'>About Me</h2>
                    <p className='about__body-me-text'>
                        If you've made it this far.... I thank you for taking the time to learn a bit more about slice and myself. My name is Klevis Doga and this is my capstone project for the BrainStation Web Development Diploma Bootcamp (You can learn more about them <a target="_blank" href='https://www.brainstation.io'>here</a>).<br />
                        Before joining the bootcamp I was a retail trader in the US Equity/Options market. Around March 2022, I decided it way time to learn something new and find a career path that would help me achieve my goals in life... This lead me to Coding/Programming. Since a young age I was always good with solving problems and have alwasy been interested in the way technology works. After some research I found the PERFECT career for me. After covid nearly every business has gone remote which is right up my alley! With the freedom to work from anywhere in the world, and an industry that is CONSTANTLY evolving, this is the place for me.
                    </p>
                </div>
                <p className='about__body-me-endtext'>
                    If you'd like to know a little bit more about me and my journey feel free to reach out and connect!<br />
                    I hope you either found some value out of Slice App!
                </p>
            </div>
        </div>
    )
}

