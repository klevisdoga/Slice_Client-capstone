import React from 'react'
import axios from 'axios'
import './AddSubscriptionModal.scss'
import close from '../../Assets/Icons/shape.png'

export default function AddSubscriptionModal({ closeModal }) {
    const user_id = sessionStorage.getItem('user_id')

    const formHandler = (ev) => {
        ev.preventDefault()

        axios.post(`${process.env.REACT_APP_LOCAL_SERVER}/subscription/add`, {
            user_id: user_id,
            title: ev.target.title.value,
            date: ev.target.date.value,
            amount: ev.target.amount.value
        })
        .then(res => {
            console.log(res)
            ev.target.reset()
        })      


    }
    return (
        <div className='addsub__modal-container'>
            <div className='addsub__modal'>
                <img onClick={closeModal} className='addsub__modal-close' src={close} alt='close pop-up button' />
                <h1 className='addsub__modal-title'>Add New Subscription</h1>
                <form type='submit' onSubmit={formHandler} className='addsub__modal-info'>
                    <div className='addsub__modal-info--box'>
                        <label htmlFor='title'>Name</label>
                        <input type='text' name='title' placeholder='Netflix' required />
                    </div>
                    <div className='addsub__modal-info--box'>
                        <label htmlFor='date'>Last Billing Date</label>
                        <input type='text' name='date' placeholder='2022-03-01' required />
                    </div>
                    <div className='addsub__modal-info--box'>
                        <label htmlFor='amount'>Amount</label>
                        <input type='text' name='amount' placeholder='12.99' required />
                    </div>
                    <button className='addsub__modal-add'>ADD</button>
                </form>
            </div>
        </div>
    )
}
