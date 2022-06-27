import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './LoginPage.scss'

export default function LoginPage( props ) {

    const [match, setMatch] = useState(true)

    const formHandler = (ev) => {
        ev.preventDefault()

        props.history.push('/account')
        props.handleLoggedIn()
    }


    return (
        <div className='login'>
            <h1 className='login__title'>Welcome Back.</h1>
            <div className='login__main'>
                <h2 className='login__main-title'>Log in to your <br/> Slice account.</h2>
                <form className='login__form' type='submit' onSubmit={formHandler} >
                    <input type='text' name='email' placeholder='Your email address' required />
                    <div className='login__form-bottom'>
                        <input type='text' name='password' className='login__form-bottom-password' placeholder='Password' required />
                        {!match ? <p className='login__form--dnm'>Incorrect password or email!</p> : ''}
                    </div>
                    <button className='login__form-button'>Log in</button>
                </form>
                <div className='signup__redirect'>
                    <p className='signup__redirect-text'>Don't have an account?<Link to='/signup'> Sign up</Link> here!</p>
                </div>
            </div>
        </div>
    )
}