import React, { Component } from 'react';
import BurgerMenu from './../../containers/BurgerMenu';
import Header from './../../containers/Header';
import Footer from '../Footer/index';
import { getStorage } from '../../containers/App/actions';
import { browserHistory } from 'react-router';

class AppComp extends Component {

  componentDidMount () {
    const {authInfo} = this.props;

    console.log('--app componentDidMount --');

    const token = getStorage('token');
    if (token !== null) {
      //if token exists in the local storage, set it in the app state
      this.props.setAuthInfo({isLoggedIn: true, token: token});
    } else {
      //redirect to login page if token does not exist in the local storage
      //browserHistory.push('/login');
    }
  }

  componentDidUpdate (prevProps) {

    const isLoggingOut = prevProps.isLoggedIn && !this.props.isLoggedIn;
    const isLoggingIn = !prevProps.isLoggedIn && this.props.isLoggedIn;

    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.props.setActivePage(this.props.location.pathname);
    }

    if (isLoggingIn) {
      browserHistory.replace(this.props.redirectUrl);
      console.log(this.props.redirectUrl);

    } else if (isLoggingOut) {
      browserHistory.push('/login');
    }
  }

  render () {
    const {isLoggedIn} = this.props;
    return (<section id="outer-container">
      {isLoggedIn && <BurgerMenu />}
      <main id="page-wrap">
        <Header/>
        <div className="body-container">
        <section id="body-wrapper" className=" overFlowWrap">
          {this.props.children}
        </section>
        <Footer/>
        </div>
      </main>
    </section>);
  }
}

export default AppComp;