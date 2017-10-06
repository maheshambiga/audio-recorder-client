import React, { Component } from 'react';
import {browserHistory} from 'react-router';

class EnsureLoggedIn extends Component {
  constructor (props) {
    super(props);

  }
  componentDidMount() {
    const { currentURL, isLoggedIn } = this.props;

    if (!isLoggedIn) {
      // set the current url/path for future redirection (we use a Redux action)
      // then redirect (we use a React Router method)
      this.props.setRedirectUrl(currentURL);
      browserHistory.replace("/login");
    }
  }

  render() {
    const {isLoggedIn} = this.props;
    if (isLoggedIn) {
      return this.props.children;
    } else {
      return null;
    }
  }
}

export default EnsureLoggedIn;