import React from 'react'
import './HomePageHero.scss'

export default function HomePageHero() {
    return (
        <section className='homepage__hero'>
            <h1 className='homepage__hero-title'>STASH</h1>
            <div className='homepage__hero-slice'></div>
            
            <div className='homepage__hero__text'>
                <h1 className='homepage__hero__text-title'>Stay up to date.</h1>
                <p className='homepage__hero__text-paragraph'>Skip the surprises that come with adding a new subscription to your card. 
                    Stash is a safer, smarter way to manage any - and all online subscriptions.</p>
            </div>


        </section>
    )
}
