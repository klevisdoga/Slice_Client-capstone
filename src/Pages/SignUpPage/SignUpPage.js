import axios from 'axios'
import React, { useState } from 'react'
import { Link, Redirect } from 'react-router-dom'
import './SignUpPage.scss'

const SERVER_URL = 'http://kd-slice-server.herokuapp.com'


export default function SignUpPage(props) {

    const [match, setMatch] = useState(true)
    const [error, setError] = useState(false)
    const id = sessionStorage.getItem('user_id')

    const formHandler = (ev) => {
        ev.preventDefault()

        const password = ev.target.password.value
        const confirm = ev.target.confirmPass.value

        if (confirm !== password) {
            setMatch(false)
        } else if (confirm === password) {

            axios.post(`${'http://localhost:8888'}/signup`, {
                firstName: ev.target.firstName.value,
                lastName: ev.target.lastName.value,
                email: ev.target.email.value,
                password: ev.target.password.value,
            })
                .then((res) => {
                    props.handleLoggedIn()
                    props.handleSignedUp()
                    ev.target.reset()
                    sessionStorage.setItem('user_id', res.data.userId)
                })
                .catch(() => {
                    setError(true)
                })
        }
    }

    return (
        <div className='signup'>
            <h1 className='signup__title'>Create an account to get started.</h1>
            <div className='signup__main'>
                <form className='signup__form' type='submit' onSubmit={formHandler} >
                    <div className='signup__form-top'>
                        <input type='text' name='firstName' className='signup__form-top-first' placeholder='First name' required />
                        <input type='text' name='lastName' className='signup__form-top-last' placeholder='Last name' required />
                    </div>
                    <input type='email' name='email' placeholder='Your email address' required />
                    <div className='signup__form-bottom'>
                        <input type='password' name='password' className='signup__form-bottom-password' placeholder='Password' required />
                        <input type='password' name='confirmPass' className={`signup__form-bottom-confirm`} placeholder='Confirm' required />
                        {!match ? <p className='signup__form--dnm'>Password does not match</p> : ''}
                        {error ? <p className='signup__form--dnm'>Email already in use.</p> : ''}
                    </div>
                    <button className='signup__form-button'>Create Account</button>
                </form>
                <div className='signup__redirect'>
                    <p className='signup__redirect-text'>Already have an account? Please <Link to='/login'>Log in</Link></p>
                </div>
            </div>
        </div>
    )
}
