import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import './App.scss';
import PageNav from './Components/PageNav/PageNav';
import HomePage from './Pages/HomePage/HomePage';
import SignUpPage from './Pages/SignUpPage/SignUpPage';
import PageFooter from './Components/PageFooter/PageFooter';
import LoginPage from './Pages/LoginPage/LoginPage';
import MyAccount from './Pages/MyAccount/MyAccount'

function App() {
  const [loggedIn, setLoggedIn] = useState(false)
  const [signedUp, setSignedUp] = useState(false)
  const id = sessionStorage.getItem('user_id')

  const handleLoggedIn = () => {
    setLoggedIn(true)
  }
  const handleLoggedOut = () => {
    setLoggedIn(false)
    setSignedUp(false)
    sessionStorage.removeItem('token')
    sessionStorage.removeItem('user_id')
  }

  const handleSignedUp = () => {
    setSignedUp(true)
  }

  const token = sessionStorage.getItem('token')
  useEffect(() => {
    if (!token) {
      handleLoggedOut()
    } else if (token) {
      handleLoggedIn()
    }
  }, [token]);

  return (
    <div className="App">
      <BrowserRouter>
        <PageNav loggedIn={loggedIn} />
        <Switch>
          <Route path='/' exact render={(routerProps) => {
            return (
              <HomePage
                loggedIn={loggedIn}
                {...routerProps} />
            )
          }} />

          {signedUp
            ?
            <Redirect from='/signup' to={`/account/${id}`} />
            :
            <Route path='/signup' render={(routerProps) => {
              return (
                <SignUpPage
                  handleLoggedIn={handleLoggedIn}
                  handleSignedUp={handleSignedUp}
                  signedUp={signedUp}
                  {...routerProps} />
              )
            }} />
          }
          <Route path='/login' render={(routerProps) => {
            return (
              <LoginPage
                handleLoggedIn={handleLoggedIn}
                {...routerProps} />
            )
          }} />

          {!loggedIn && !token
            ? <Redirect from='/account/' to='/login' />
            :
            <Route path='/account/:userId' exact render={(routerProps) => {
              return (
                <MyAccount
                  handleLoggedOut={handleLoggedOut}
                  loggedIn={loggedIn}
                  signedUp={signedUp}
                  {...routerProps} />
              )
            }} />
          }
        </Switch>
        <PageFooter />
      </BrowserRouter>
    </div>
  );
}

export default App;
