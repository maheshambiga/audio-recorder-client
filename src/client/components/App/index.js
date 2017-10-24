import React, { Component } from 'react';
import BurgerMenu from './../../containers/BurgerMenu';
import Header from './../../containers/Header';
import Footer from '../Footer/index';
import { getStorage } from '../../containers/App/actions';
import { browserHistory } from 'react-router';

class AppComp extends Component {

  componentDidMount() {
    const { isLoggedIn } = this.props;

    const token = getStorage('token');
    if (token !== null) {
      //if token exists in the local storage, set it in the app state
      this.props.setAuthInfo({ isLoggedIn: true, token: token });
    } else {
      //redirect to login page if token does not exist in the local storage
      if (!isLoggedIn) {
        browserHistory.push('/home');
      }

    }
  }
  componentWillReceiveProps(nextProps) {
    //set redirect URL if user is logged in and location is not login so that user could land on the same page as while logging out.
    if (this.props.isLoggedIn && nextProps.location.pathname !== '/login' && this.props.location.pathname !== nextProps.location.pathname) {
      this.props.setRedirectUrl(nextProps.location.pathname);
    }
  }

  componentDidUpdate(prevProps) {

    const isLoggingOut = prevProps.isLoggedIn && !this.props.isLoggedIn;
    const isLoggingIn = !prevProps.isLoggedIn && this.props.isLoggedIn;

    //set active page to highlight the selected menu option
    if (prevProps.location.pathname !== this.props.location.pathname) {
      this.props.setActivePage(this.props.location.pathname);
    }

    //on login redirect to previous URL
    if (isLoggingIn) {
      browserHistory.replace(this.props.redirectUrl);

    } else if (isLoggingOut) {
      browserHistory.replace('/login');
    }
  }

  render() {
    const { isLoggedIn } = this.props;
    return (<section id="outer-container">
      {isLoggedIn && <BurgerMenu />}
      <div id="page-wrap">
        <Header />
        <main className="body-container">
          <section id="body-wrapper" className="overFlowWrap">
            {this.props.children}
          </section>
        </main>
        <Footer />
      </div>
    </section>);
  }
}

export default AppComp;
