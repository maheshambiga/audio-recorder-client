import React, { Component } from 'react';

import Header from './../../containers/Header';
import Footer from '../Footer/index';
import {getStorage} from '../../containers/App/actions';
import {browserHistory} from 'react-router';


class AppComp extends Component{

  componentDidMount(){
    const {authInfo} = this.props;

    console.log('--app componentDidMount --');

    const token = getStorage('token');
    if(token!== null){
      //if token exists in the local storage, set it in the app state
      this.props.setAuthInfo({isLoggedIn:true, token:token});
    }else{
      //redirect to login page if token does not exist in the local storage
      //browserHistory.push('/login');
    }
  }

  componentDidUpdate(prevProps){

    const isLoggingOut = prevProps.isLoggedIn && !this.props.isLoggedIn;
    const isLoggingIn = !prevProps.isLoggedIn && this.props.isLoggedIn;

    if (isLoggingIn) {
      browserHistory.push(this.props.redirectUrl);


    } else if (isLoggingOut) {
      browserHistory.push('/login');
    }
  }
  render(){
    return (<section>
      <Header/>
      <section className="container body-container overFlowWrap">
        {this.props.children}
      </section>
      <Footer/>
    </section>);
  }
}

export default AppComp;