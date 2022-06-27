import React, { useState } from 'react'
import { Redirect } from 'react-router-dom'
import './MyAccount.scss'
import SubscriptionModal from '../../Components/SubscriptionModal/SubscriptionModal'

export default function MyAccount({ loggedIn, handleLoggedOut, signedUp }) {

  const [modalOpen, setModalOpen] = useState(false)
  const [connected, setConnected] = useState(false)

  const signOut = () => {
    handleLoggedOut()
  }
  const openModal = () => {
    setModalOpen(true)
  }
  const closeModal = () => {
    setModalOpen(false)
  }
  const handleConnected = () => {
    setConnected(true)
  }

  if (signedUp && !connected) {
    return (
      <div>
        <button onClick={handleConnected}>Connect Your Bank Account</button>
      </div>
    )
  }

  else if (loggedIn || connected) {
    return (
      <div className='account'>
        <div className='account__title-container'>
          <h2 className='account__title'>Account</h2>
          <p className='account__signout' onClick={signOut}>Sign Out</p>
        </div>
        <div className='account__main'>
          <div className='account__upcoming'>
            <h1 className='account__upcoming-title'>Upcoming:</h1>
            <div className='account__upcoming-list'>

              {/* Will map throught data, and return one for each */}
              <div className='account__upcoming-listitem'>
                <h3 className='account__upcoming-listitem-title'>{'Title'}</h3>
                <span className='account__upcoming-listitem-date'>{'Aug 3 2022'}</span>
                <span className='account__upcoming-listitem-date'>{'$7.99 USD'}</span>
              </div>

              <div className='account__upcoming-listitem'>
                <h3 className='account__upcoming-listitem-title'>{'Title'}</h3>
                <span className='account__upcoming-listitem-date'>{'Aug 3 2022'}</span>
                <span className='account__upcoming-listitem-date'>{'$7.99 USD'}</span>
              </div>
              <div className='account__upcoming-listitem'>
                <h3 className='account__upcoming-listitem-title'>{'Title'}</h3>
                <span className='account__upcoming-listitem-date'>{'Aug 3 2022'}</span>
                <span className='account__upcoming-listitem-date'>{'$7.99 USD'}</span>
              </div>
              <div className='account__upcoming-listitem'>
                <h3 className='account__upcoming-listitem-title'>{'Title'}</h3>
                <span className='account__upcoming-listitem-date'>{'Aug 3 2022'}</span>
                <span className='account__upcoming-listitem-date'>{'$7.99 USD'}</span>
              </div>
            </div>
          </div>
          <div className='account__all'>
            <h1 className='account__all-title'>All Subscriptions:</h1>
            <div className='account__all-list'>

              {/* Will map throught data, and return one for each */}
              <div className='account__all-listitem'>
                <h3 onClick={openModal} className='account__all-listitem-title'>{'Title'}</h3>
              </div>

              <div className='account__all-listitem'>
                <h3 onClick={openModal} className='account__all-listitem-title'>{'Title'}</h3>
              </div>
              <div className='account__all-listitem'>
                <h3 onClick={openModal} className='account__all-listitem-title'>{'Title'}</h3>
              </div>
              <div className='account__all-listitem'>
                <h3 onClick={openModal} className='account__all-listitem-title'>{'Title'}</h3>
              </div>
            </div>
          </div>
          <div className='account__settings'>
            <div className='account__settings-profile'>
              <h3 className='account__settings-profile-title'>My Profile</h3>
              <div className='account__settings-profile-info'>
                <div className='account__settings-profile-info-container'>
                  <h3 className='account__settings-profile-info-title'>Account Information</h3>
                  <h4 className='account__settings-profile-info-span'>{'Klevis Doga'}</h4>
                  <h4 className='account__settings-profile-info-span'>{'kd123'}</h4>
                  <span className='account__settings-profile-info-edit'>Edit</span>
                </div>
                <div className='account__settings-profile-info-container'>
                  <h3 className='account__settings-profile-info-title'>Contact Information</h3>
                  <h4 className='account__settings-profile-info-span'>{'klevisdoga@gmail.com'}</h4>
                  <h4 className='account__settings-profile-info-span'>{'123-456-7890'}</h4>
                  <span className='account__settings-profile-info-edit'>Edit</span>
                </div>
              </div>
            </div><div className='account__settings-profile'>
              <h3 className='account__settings-profile-title'>My Card</h3>
              <div className='account__settings-profile-info'>
                <div className='account__settings-profile-info-container'>
                  <h3 className='account__settings-profile-info-title'>Card Information</h3>
                  <h4 className='account__settings-profile-info-span'>VISA ---- 1001</h4>
                  <h4 className='account__settings-profile-info-span'>7/12</h4>
                  <span className='account__settings-profile-info-edit'>Edit <span className='account__settings-profile-info-edit--divider'>|</span> </span>
                  <span className='account__settings-profile-info-edit'>Remove</span>
                </div>
                <div className='account__settings-profile-info-container'>
                  <h3 className='account__settings-profile-info-title'>Account Balance</h3>
                  <h4 className='account__settings-profile-info-span'>$0.01 USD</h4>
                </div>
              </div>
            </div>

          </div>
        </div>
        {modalOpen ? <SubscriptionModal closeModal={closeModal} /> : ''}

      </div>
    )
  }

  else

    <Redirect to='/login' />


}
