import React, { Component } from 'react';

import RegisterUserForm from './RegisterUser';
import SocialSignup from './../../containers/SocialSingup';
import Loader from '../common/Loader';

class RegisterUser extends Component {
  constructor (props) {
    super(props);

  }

  componentWillUnmount () {
    this.props.invalidateUserRegister();
  }

  render () {
    const {isFetching, error, result} = this.props;
    return (
      <div className="loginBackground">
        <div className="container">
          <div className="margin24 noSideMargin">
            <section className="row">
              {error &&
              <h3 className="text-danger text-center">Something went
                wrong!</h3>}
              {isFetching && !error && <Loader/>}

              <div className="col-lg-7 col-lg-push-1">

                <p className="fontSize_9_5 color_FFF fontBradleyHandITC">Get
                  your headphones
                  ready</p>

              </div>
              <div className="col-lg-3">
                <RegisterUserForm {...this.props}/>
                <SocialSignup/>

              </div>
            </section>
          </div>
        </div>
      </div>
    );

  }
}

export default RegisterUser;