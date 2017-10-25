import React, { Component } from 'react';
import {browserHistory} from 'react-router';
import CustomLoginForm from './CustomLoginForm';
import SocialSignup from './../../containers/SocialSingup';
import Loader from '../common/Loader';

class LoginPage extends Component {
  constructor (props) {
    super(props);

  }
  componentWillMount(){
    const {isLoggedIn} = this.props.authInfo;
    if(isLoggedIn){
      browserHistory.replace('/dashboard');
    }
  }

  componentWillUnmount () {
    this.props.invalidateUserLogin();
  }

  render () {
    const {isFetching, error, result} = this.props;
    return (
      <div className="loginBackground vh91 layout vertical center-center">
        <div className="">
          <div className="container ">
            <div className="margin24 noSideMargin">
              <section className="row">
                {error &&
                <h3 className="text-danger text-center">Something went wrong!</h3>}
                {isFetching && !error && <Loader/>}
                <div className="">
                <div className="col-lg-7 col-sm-12 col-xs-12">
                  <p className="fontSize_9_5 color_FFF fontBradleyHandITC">Get your headphones ready</p>
                </div>
                <div className="col-lg-3 col-sm-12 col-xs-12">
                  <CustomLoginForm {...this.props}/>
                  <SocialSignup/>

                </div>
                </div>

              </section>
            </div>
          </div>
        </div>
      </div>);

  }
}

export default LoginPage;