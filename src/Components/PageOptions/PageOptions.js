import React from 'react'
import PlaidLinkButton from '../PlaidLinkButton/PlaidLinkButton.tsx'
import './PageOptions.scss'

export default function PageOptions({ handleConnected, handleManually }) {
  return (
    <div className='account__connect'>
      <h1 className='account__connect-title'>Select an option.</h1>

      <div className='account__connect-started-container'>
        <div className='account__connect-started account__connect-started--one'>
          <h3 className='account__connect-started-title'> Connnect your bank account.</h3>
          <PlaidLinkButton handleConnected={handleConnected} />
        </div>
        <div className='account__connect-started account__connect-started--two'>
          <h3 className='account__connect-started-title'> Add your subscriptions manually.</h3>
          <button onClick={handleManually} className='account__connect-started-button'>Manually</button>
        </div>
      </div>

    </div>
  )
}
