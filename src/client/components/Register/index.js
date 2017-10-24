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
      <div className="loginBackground vh91 layout vertical center-center">
        <div className="container">
          <div className="margin24 noSideMargin">
            <section className="row">
              {error &&
              <h3 className="text-danger text-center">Something went
                wrong!</h3>}
              {isFetching && !error && <Loader/>}

              <div className="layout horizontal center-center">
                <div className="col-lg-7 col-sm-12">

                  <p className="fontSize_9_5 color_FFF fontBradleyHandITC">Get
                    your headphones
                    ready</p>

                </div>
                <div className="col-lg-3 col-sm-12">
                  <RegisterUserForm {...this.props}/>
                  <SocialSignup/>

                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    );

  }
}

export default RegisterUser;