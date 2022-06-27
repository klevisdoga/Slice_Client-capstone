import React, { useState, useEffect } from 'react'
import './HomePageHero.scss'

export default function HomePageHero() {

    const [slice, setSlice] = useState(false)

    useEffect(() => {

        setTimeout(() => {
            setSlice(true)
        }, 1000)

    }, []);

    return (
        <section className='homepage__hero'>
            <div className='homepage__hero-title'>
                SLICE
            </div>
            <div className={`homepage__hero-slice ${slice ? 'homepage__hero-slice--anim' : ''}`}></div>
            <div className='homepage__hero__text'>
                <h1 className='homepage__hero__text-title'>Slice the surprises.</h1>
                <p className='homepage__hero__text-paragraph'>Slice away the surprises that come with adding a new subscription to your card.
                    Slice is a safer, smarter way to manage any - and all online subscriptions.</p>
            </div>


        </section>
    )
}
