import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

import FacebookLogin from 'react-facebook-login';
import {setStorage} from './../../containers/App/actions';

const SocialSignup = ({setAuthInfo}) => {
  const onGoogleSignInSuccssHandler = (response)=>{
    console.log('onGoogleSignInSuccssHandler-', response);
    setStorage('token',response.accessToken);
    setAuthInfo({isLoggedIn:true, token:response.accessToken});
  };
  const onGoogleSignInFailureHandler = (response)=>{
    console.log('onGoogleSignInFailureHandler-', response);
  };
  const onFacebookClickHandler = (response)=>{
    console.log('onFacebookClickHandler-', response);
  };
  const onFacebookSignInSuccssHandler = (response)=>{
    console.log('onFacebookSignInSuccssHandler-', response.accessToken);
    setStorage('token',response.accessToken);
    setAuthInfo({isLoggedIn:true, token:response.accessToken});
  };
  return (<div>
    <GoogleLogin onSuccess={onGoogleSignInSuccssHandler}
                 onFailure={onGoogleSignInFailureHandler}
                 clientId="898381849176-i6o5tfnm1e69fsgb0frr12l1klc08k01.apps.googleusercontent.com"
                 className="loginBtn m-google width-100 "/>

    <FacebookLogin onClick={onFacebookClickHandler}
                   callback={onFacebookSignInSuccssHandler}
                   appId="507097652976160"
                   fields="name,email,picture"
                   cssClass="loginBtn m-facebook width-100" />
  </div>);
};


export default SocialSignup;