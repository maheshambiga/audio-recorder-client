import React, { Component } from 'react';
import GoogleLogin from 'react-google-login';

import FacebookLogin from 'react-facebook-login';


const SocialSignup = ({authenticateUser}) => {
  const onGoogleSignInSuccssHandler = (response)=>{

    const {email, familyName, givenName, googleId, imageUrl, name}  = response.profileObj;
    authenticateUser({

      "id": googleId,
      "name": name,
      "imageUrl": imageUrl,
      "email": email,
      "type":"google"
    });
  };
  const onGoogleSignInFailureHandler = (response)=>{
    console.log('onGoogleSignInFailureHandler-', response);
  };
  const onFacebookClickHandler = (response)=>{
    console.log('onFacebookClickHandler-', response);
  };
  const onFacebookSignInSuccssHandler = (response)=>{


    const {email, userID, picture, name}  = response;
    authenticateUser({

      "id": userID,
      "name": name,
      "imageUrl": picture.data.url,
      "email": email,
      "type":"facebook"
    });
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