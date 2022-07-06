import React, { useCallback, useState } from 'react';
import axios from 'axios';
import { usePlaidLink, PlaidLinkOnSuccess, PlaidLinkOnEvent, PlaidLinkOnExit, PlaidLinkOptions, } from 'react-plaid-link';

const PlaidLinkButton = () => {
  const [token, setToken] = useState<String | null>(null);
  const id = sessionStorage.getItem('user_id')
  const isOAuthRedirect = window.location.href.includes('?oauth_state_id=');

  // generate a link_token when component mounts
  React.useEffect(() => {
    if (isOAuthRedirect) {
      setToken(localStorage.getItem('link_token'));
      return;
    }
    const createLinkToken = async () => {
      setTimeout(() => {
        axios.get(`${process.env.REACT_APP_LOCAL_SERVER}/access/create_link_token`)
          .then(res => {
            setToken(res.data)
            localStorage.setItem('link_token', res.data);
          })
      }, 100)

      // store link_token temporarily in case of OAuth redirect
    }
    createLinkToken();
  }, []);

  const onSuccess = useCallback<PlaidLinkOnSuccess>((publicToken, metadata) => {

    // send public_token to your server
    axios.post(`${process.env.REACT_APP_LOCAL_SERVER}/access/public_token_exchange`, {
      public_token: publicToken
    })
      .then(res => {
        const access_token = res.data

        axios.post(`${process.env.REACT_APP_LOCAL_SERVER}/access/transactions/recurring`, {
          access_token: access_token,
          user_id: id
        })
          .then(resolve => {
            window.location.reload()
          })
      })
  }, []);

  const onEvent = useCallback<PlaidLinkOnEvent>((eventName, metadata) => {

    // log onEvent callbacks from Link
    console.log(eventName, metadata);
  }, []);

  const onExit = useCallback<PlaidLinkOnExit>((error, metadata) => {

    // log onExit callbacks from Link, handle errors
    console.log(error, metadata);
  }, []);

  const config: PlaidLinkOptions = {
    // token must be the same token used for the first initialization of Link
    token,
    onSuccess,
    onEvent,
    onExit,
  };

  if (isOAuthRedirect) {
    // receivedRedirectUri must include the query params
    config.receivedRedirectUri = window.location.href;
  }

  const {
    open,
    ready,
    // error,
    // exit
  } = usePlaidLink(config);

  React.useEffect(() => {
    // If OAuth redirect, instantly open link when it is ready instead of
    // making user click the button
    if (isOAuthRedirect && ready) {
      open();
    }
  }, [ready, open, isOAuthRedirect]);

  // No need to render a button on OAuth redirect as link opens instantly
  return isOAuthRedirect ? (
    <></>
  ) : (
    <button className='account__settings-connect' onClick={() => open()} disabled={!ready}>
      Connect
    </button>
  );
};

export default PlaidLinkButton;
