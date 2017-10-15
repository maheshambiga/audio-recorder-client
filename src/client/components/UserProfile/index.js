import React, { Component } from 'react';
import {includeToken} from './../../containers/Login/actions';
import Loader from '../common/Loader';

class UserProfile extends Component {
  constructor (props) {
    super(props);

  }
  componentDidMount(){

    const isLoggedIn = this.props.authInfo.isLoggedIn;
    //this will be called when user enters the app directly i.e. already logged in
    if(isLoggedIn){
      includeToken(this.props.authInfo.token);
      this.props.getUserProfile();
    }

  }

  componentDidUpdate(prevProps){
    const isLoggedIn = this.props.authInfo.isLoggedIn;
    //this will be called when user authenticates himself first i.e. enters the app from login page
    if(isLoggedIn && prevProps.authInfo.isLoggedIn !== isLoggedIn){
      includeToken(this.props.authInfo.token);
      this.props.getUserProfile();
    }
  }

  render () {
    const {authInfo, userProfile} = this.props;
    const {name, picture} = userProfile.result;
    return (
      <section className="">
        {userProfile.error &&
        <h3 className="text-danger text-center">Something went wrong!</h3>}
        {userProfile.isFetching && !userProfile.error && <Loader/>}
        <div className="layout horizontal start-justified center">

          <div className="profileImage margin6 on onlyRightMargin">
            <img className="width-100 pull-left " src={picture}/>
          </div>
          <span className="pull-right color_FFF">{name}</span>
        </div>

      </section>

    );

  }
}

export default UserProfile;