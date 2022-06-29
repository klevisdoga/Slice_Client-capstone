import React from 'react'
import './SubscriptionModal.scss'
import close from '../../Assets/Icons/shape.png'

export default function Modal({ closeModal, userSubs, selectedSub }) {

  if(userSubs.status && userSubs.subscriptions) {

    const subInfo = JSON.parse(userSubs.subscriptions)
    const filteredInfo = subInfo.find(info => info.id ===  selectedSub)

    return (
      <div className='sub__modal-container'>
        <div className='sub__modal'>
          <img onClick={closeModal} className='sub__modal-close' src={close} alt='close pop-up button' />
          <h1 className='sub__modal-title'>{filteredInfo.name}</h1>
          <div className='sub__modal-info'>
            <div className='sub__modal-info-prev'>
              <h3 className='sub__modal-info-title'>Previous Billing Date:</h3>
              <span className='sub__modal-info-span'>{filteredInfo.date}</span>
            </div>
            <div className='sub__modal-info-amount'>
              <h3 className='sub__modal-info-title'>Amount:</h3>
              <span className='sub__modal-info-span'>{`$${filteredInfo.amount} USD`}</span>
            </div>
            <div className='sub__modal-info-next'>
              <h3 className='sub__modal-info-title'>Next Billing Date:</h3>
              <span className='sub__modal-info-span'>{filteredInfo.nextDate}</span>
            </div>
          </div>
            <button className='sub__modal-delete'>DELETE</button>
        </div>
      </div>
    )
  }
}
