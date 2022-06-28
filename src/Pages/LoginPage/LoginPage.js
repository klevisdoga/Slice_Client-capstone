import axios from 'axios'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './LoginPage.scss'

const URL  = 'https://kd-slice-server.herokuapp.com'

export default function LoginPage( props ) {

    const [error, setError] = useState(false)
    const [userId, setUserId] = useState('')

    const formHandler = (ev) => {
        ev.preventDefault()

        axios.post(`${URL}/login`, {
            email: ev.target.email.value,
            password: ev.target.password.value
        }).then((res) => {
            sessionStorage.setItem('token', res.data.token)
            sessionStorage.setItem('user_id', res.data.user_id)
            setUserId(res.data.user_id)

            props.history.push(`/`)
            props.handleLoggedIn()
        })
        .catch(() => {
            setError(true)
        })
        
    }


    return (
        <div className='login'>
            <h1 className='login__title'>Welcome Back.</h1>
            <div className='login__main'>
                <h2 className='login__main-title'>Log in to your <br/> Slice account.</h2>
                <form className='login__form' type='submit' onSubmit={formHandler} >
                    <input type='text' name='email' placeholder='Your email address' required />
                    <div className='login__form-bottom'>
                        <input type='password' name='password' className='login__form-bottom-password' placeholder='Password' required />
                        {error? <p className='login__form--dnm'>Incorrect Email/Password!</p> : ''}
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