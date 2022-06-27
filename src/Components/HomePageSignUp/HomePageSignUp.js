import React from 'react'
import { Link } from 'react-router-dom'
import './HomePageSignUp.scss'

export default function HomePageSignUp({ signedUp, loggedIn }) {

    if (loggedIn) {
        return (
            <section className='homepage__signup'>
                <div className='homepage__signup__text'>
                    <h1 className='homepage__signup__text-title'>Get started today.</h1>
                </div>
                <Link to={'/account'} className='homepage__signup-button homepage__signup-button--account'>My Account</Link>
            </section>
        )
    }
    return (
        <section className='homepage__signup'>
            <div className='homepage__signup__text'>
                <h1 className='homepage__signup__text-title'>Get started today.</h1>
                <p>Sign up to get started and register for the brand new Slice Card including a $25 sign up bonus!</p>
            </div>
            <Link to={'/signup'} className='homepage__signup-button'>Sign Up</Link>
        </section>
    )
}
