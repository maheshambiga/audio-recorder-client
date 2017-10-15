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
      <div className="container">
        <div className="margin24 noSideMargin">
          <section className="row">
            {error &&
            <h3 className="text-danger text-center">Something went wrong!</h3>}
            {isFetching && !error && <Loader/>}

            <div className="col-lg-6 col-lg-push-2">

              <div className="col-lg-6 col-md-6">
                <RegisterUserForm {...this.props}/>
                {typeof result.success !== typeof undefined &&
                <p>{result.message}</p>}

              </div>
              <div className="col-lg-6 col-md-6 col-lg-push-1">

                <SocialSignup/>

              </div>
            </div>
          </section>
        </div>
      </div>

    );

  }
}

export default RegisterUser;