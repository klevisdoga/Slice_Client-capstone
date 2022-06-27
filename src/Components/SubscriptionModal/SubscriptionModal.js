import React from 'react'
import './SubscriptionModal.scss'
import close from '../../Assets/Icons/shape.png'

export default function Modal({ closeModal }) {
  return (
    <div className='sub__modal-container'>
      <div className='sub__modal'>
        <img onClick={closeModal} className='sub__modal-close' src={close} alt='close pop-up button' />
        <h1 className='sub__modal-title'>{'Title'}</h1>
        <div className='sub__modal-info'>
          <div className='sub__modal-info-prev'>
            <h3 className='sub__modal-info-title'>Previous Billing Date:</h3>
            <span className='sub__modal-info-span'>{'Last billing date'}</span>
          </div>
          <div className='sub__modal-info-amount'>
            <h3 className='sub__modal-info-title'>Amount:</h3>
            <span className='sub__modal-info-span'>{'$7.99 USD'}</span>
          </div>
          <div className='sub__modal-info-next'>
            <h3 className='sub__modal-info-title'>Next Billing Date:</h3>
            <span className='sub__modal-info-span'>{'Next billing date'}</span>
          </div>
        </div>
      </div>
    </div>
  )
}
