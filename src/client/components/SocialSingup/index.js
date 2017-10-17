import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

import FacebookLogin from 'react-facebook-login';
import {GOOGLE,FACEBOOK} from './../../containers/SocialSingup/constants';

const SocialSignup = ({registerUser}) => {
  const onGoogleSignInSuccssHandler = (response)=>{

    const {email, familyName, givenName, googleId, imageUrl, name}  = response.profileObj;
    registerUser({

      "id": googleId,
      name,
      imageUrl,
      email,
      "type":GOOGLE,
      token:response.accessToken
    });
  };
  const onGoogleSignInFailureHandler = (response)=>{
    console.log('onGoogleSignInFailureHandler-', response);
  };
  const onFacebookClickHandler = (response)=>{
    console.log('onFacebookClickHandler-', response);
  };
  const onFacebookSignInSuccssHandler = (response)=>{


    const {email, userID, picture, name, accessToken}  = response;
    registerUser({

      "id": userID,
      name,
      "imageUrl": picture.data.url,
      email,
      "type":FACEBOOK,
      token: accessToken
    });
  };
  return (<div className=" margin24 noSideMargin">
    <GoogleLogin onSuccess={onGoogleSignInSuccssHandler}
                 onFailure={onGoogleSignInFailureHandler}
                 clientId="6508075040-nv97qej2oqcr2fagj5b55ci5vluesj9t.apps.googleusercontent.com"
                 className="loginBtn m-google width-100 "/>

    <FacebookLogin onClick={onFacebookClickHandler}
                   callback={onFacebookSignInSuccssHandler}
                   disableMobileRedirect={false}
                   appId="507097652976160"
                   fields="name,email,picture"
                   cssClass="loginBtn m-facebook width-100" />
  </div>);
};


export default SocialSignup;