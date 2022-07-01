import React, { useState, useEffect } from 'react'
import { Redirect } from 'react-router-dom'
import './MyAccount.scss'
import SubscriptionModal from '../../Components/SubscriptionModal/SubscriptionModal'
import AddSubscriptionModal from '../../Components/AddSubscriptionModal/AddSubscriptionModal'
import PageOptions from '../../Components/PageOptions/PageOptions'
import axios from 'axios'
import PlaidLinkButton from '../../Components/PlaidLinkButton/PlaidLinkButton.tsx'
import { v4 as uuid } from 'uuid'
import { handleDates } from '../../DateFunctions/DateFunctions'

export default function MyAccount({ loggedIn, handleLoggedOut, signedUp }) {

  const [modalOpen, setModalOpen] = useState(false) // to see if the user clicked on a subscription
  const [addNew, setAddNew] = useState(false) // to see if the user selected to add a new subscription
  const [connected, setConnected] = useState(false) // to see if the user chose to connect to their bank
  const [manually, setManually] = useState(false) // to see if the user chose to add subscriptions manually
  const [userData, setUserData] = useState(false) // all of the users information except password
  const [userSubs, setUserSubs] = useState({ status: false, subscriptions: [] }) // all of the users subscriptions
  const [selectedSub, setSelectedSub] = useState('') // the ID of the selected subscription
  const [upcoming, setUpcoming] = useState({ status: false, subscriptions: [] }) // object of all upcoming subscriptions

  const token = sessionStorage.getItem('token') // authentication token sent from server

  // Functions for handling log out and the "Subscription Information" modal
  const signOut = () => {
    handleLoggedOut()
  }
  const openModal = (id) => {
    setModalOpen(true)
    setSelectedSub(id)
  }
  const closeModal = () => {
    setModalOpen(false)
    setAddNew(false)
  }
  const openAddModal = () => {
    setAddNew(true)
  }

  //Function for handling if the user chose to add subscriptions manually
  const handleManually = () => {
    setConnected(false)
    setManually(true)
  }

  // function to tell the browser what to do on inital render of the page
  useEffect(() => {

    const currentDate = handleDates().currentDate; // creating a current date to compare next billing date and current  
    const nextWeek = handleDates().nextWeek; //creating a 'next week date'

    const handleUpcoming = () => {
      let upcomingSubs = []

      //filter that finds the subscriptions that are coming up within the following 7 days
      if (userSubs.status && userSubs.subscriptions) {
        upcomingSubs = JSON.parse(userSubs.subscriptions)
          .filter(item => {
            return parseInt(item.nextDate.split('-').join('')) < nextWeek
          })
          .filter(item => {
            return parseInt(item.nextDate.split('-').join('')) > currentDate
          })
        setUpcoming({ status: true, subscriptions: upcomingSubs })
      }
    }

    // Get the users data(subscriptions) from DB .then setting it to their appropriate states
    axios.get(`${process.env.REACT_APP_LOCAL_SERVER}/account`, {
      headers: {
        authorization: 'Bearer ' + token
      },
    })
      .then(res => [
        setUserSubs({ status: true, subscriptions: res.data[0].subscriptions }),
        setUserData(res.data[0]),
        res.data[0].connected === 'true' ? setConnected(true) : '',
      ])

    handleUpcoming();
    
  }, [token, userSubs.status, userSubs.subscriptions]);


  // when the user first signs up they will be taken to the  optionsPage  where they chose to connect to their bank or manually input their subscriptions
  if (signedUp && !connected && !manually) {
    return (
      <PageOptions handleManually={handleManually} />
    )
  }

  //once an option has been chosed they will see their account page holding their userData(name, email, etc) and their subscriptions
  if (loggedIn || connected || manually || token) {
    return (
      <div className='account'>
        <div className='account__title-container'>
          <h2 className='account__title'>Account</h2>
          <p className='account__signout' onClick={signOut}>Sign Out</p>
        </div>

        {/* Upcoming subscription dates */}
        <div className='account__main'>
          <div className='account__upcoming'>
            <h1 className='account__upcoming-title'>Upcoming:</h1>
            <div className='account__upcoming-list'>
              {upcoming.status ? upcoming.subscriptions?.map(info => {
                return (
                  <div key={uuid()} className='account__upcoming-listitem'>
                    <h3 className='account__upcoming-listitem-title'>{info.name}</h3>
                    <span className='account__upcoming-listitem-date'>{info.nextDate}</span>
                    <span className='account__upcoming-listitem-date'>{`$${info.amount} USD`}</span>
                  </div>
                )
              }) : <p>No upcoming subscriptions</p>}
            </div>
          </div>

          {/* List of all subscriptions */}
          <div className='account__all'>
            <h1 className='account__all-title'>All Subscriptions:</h1>
            <div className='account__all-list'>
              {userSubs.status && userSubs.subscriptions ? JSON.parse(userSubs.subscriptions).map(subs => {
                return (
                  <div key={uuid()} className='account__all-listitem'>
                    <h3 onClick={() => openModal(subs.id)} className='account__all-listitem-title'>{subs.name}</h3>
                  </div>
                )
              }) : ''}
              <div className='account__all-listitem'>
                <button onClick={openAddModal} className='account__all-listitem--add'>Add</button>
              </div>
            </div>
          </div>

          {/* User profile settings and information */}
          <div className='account__settings'>
            <div className='account__settings-profile'>
              <h3 className='account__settings-profile-title'>My Profile</h3>
              <div className='account__settings-profile-info'>
                <div className='account__settings-profile-info-container'>
                  <h3 className='account__settings-profile-info-title'>Account Information</h3>
                  <h4 className='account__settings-profile-info-span'>{`${userData.firstName} ${userData.lastName}`}</h4>
                  <h4 className='account__settings-profile-info-span'>{userData.userName ? userData.userName : ''}</h4>
                  <span className='account__settings-profile-info-edit'>Edit</span>
                </div>
                <div className='account__settings-profile-info-container'>
                  <h3 className='account__settings-profile-info-title'>Contact Information</h3>
                  <h4 className='account__settings-profile-info-span'>{userData.email}</h4>
                  <h4 className='account__settings-profile-info-span'>{userData.phone ? userData.phone : ''}</h4>
                  <span className='account__settings-profile-info-edit'>Edit</span>
                </div>
              </div>
            </div><div className='account__settings-profile'>
              <h3 className='account__settings-profile-title'>My Card</h3>
              <div className='account__settings-profile-info'>
                {connected ?
                  <>
                    <div className='account__settings-profile-info-container'>
                      <h3 className='account__settings-profile-info-title'>Card Information</h3>
                      <h4 className='account__settings-profile-info-span'>VISA ---- 1001</h4>
                      <h4 className='account__settings-profile-info-span'>7/12</h4>
                      <span className='account__settings-profile-info-edit'>Edit <span className='account__settings-profile-info-edit--divider'>|</span> </span>
                      <span onClick={handleManually} className='account__settings-profile-info-edit'>Remove</span>
                    </div>
                    <div className='account__settings-profile-info-container'>
                      <h3 className='account__settings-profile-info-title'>Account Balance</h3>
                      <h4 className='account__settings-profile-info-span'>$0.01 USD</h4>
                    </div>
                  </> : <div className='account__settings-profile-info-container'><PlaidLinkButton /></div>}
              </div>
            </div>

          </div>
        </div>
        {modalOpen ? <SubscriptionModal selectedSub={selectedSub} userSubs={userSubs} closeModal={closeModal} /> : ''}
        {addNew ? <AddSubscriptionModal closeModal={closeModal} subscriptions={userSubs.subscriptions} /> : ''}
      </div>
    )
  }
}
