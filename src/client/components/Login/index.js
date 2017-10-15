import React, { Component } from 'react';
import CustomLoginForm from './CustomLoginForm';
import SocialSignup from './../../containers/SocialSingup';
import Loader from '../common/Loader';

class LoginPage extends Component {
  constructor (props) {
    super(props);

  }

  componentWillUnmount () {
    this.props.invalidateUserLogin();
  }

  render () {
    const {isFetching, error, result} = this.props;
    return (
      <div className="container">
        <div className="margin24 noSideMargin">
          <section className="row">
            {error &&
            <h3 className="text-danger text-center">Something went wrong!</h3>}
            {isFetching && !error && <Loader/>}
            <div className="col-lg-6 col-lg-push-2">

              <div className="col-lg-6 col-md-6">
                <CustomLoginForm {...this.props}/>


              </div>
              <div className="col-lg-6 col-md-6 col-lg-push-1">

                <SocialSignup/>

              </div>


            </div>

          </section>
        </div>
      </div>);

  }
}

export default LoginPage;