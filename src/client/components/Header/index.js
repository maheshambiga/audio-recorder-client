import React, { Component } from 'react';
import { Link } from 'react-router';
import UserProfile from './../../containers/UserProfile';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavBarOpened: false,
    };
  }
  componentDidMount(){
    console.log('--header componentDidMount --');
  }

  render() {
    const {authInfo} = this.props;
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">
            <Link className="navbar-brand" href="/">Mesh</Link>
          </div>
          {authInfo.isLoggedIn && <div className="navbar-right">
            <UserProfile />
          </div>}

        </div>
      </nav>
    );
  }
}

export default Header;
