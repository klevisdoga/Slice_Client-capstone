import React from 'react'
import './HomePageInfo.scss'

export default function HomePageInfo() {
    return (
        <section className='homepage__info'>
            <div className='homepage__info__text'>
                <h1 className='homepage__info__text-title'>Manage.</h1>
                <p>Manage any subscription all from a single website!
                    Cancel or Upgrade your existing subscription with a click of a button</p>
            </div>
            <div className='homepage__info-text'>
                <h1 className='homepage__info__text-title'>Track.</h1>
                <p>Skip the surprises! <br/>
                    Stay notified on upcoming billing dates 3 days before they happen.</p>
            </div>
            <div className='homepage__info-text'>
                <h1 className='homepage__info__text-title'>Discover</h1>
                <p>Find new favorites.<br/>
                    New services are being created by the day, browse around and find your new favorite!</p>
            </div>

        </section>
    )
}
