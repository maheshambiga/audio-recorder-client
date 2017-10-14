import React, { Component } from 'react';
import { Link } from 'react-router';
import UserProfile from './../../containers/UserProfile';
import LogoImg from './../../assets/images/logo.png';

class Header extends Component {
  constructor (props) {
    super(props);
    this.state = {
      isNavBarOpened: false,
    };

    this.openMenuOverlay = this.openMenuOverlay.bind(this);
  }

  openMenuOverlay () {
    const {isOpen} = this.props.menuState;
    this.props.toggleMenu(!isOpen);
  }

  render () {
    const {authInfo} = this.props;
    return (
      <nav className="navbar navbar-inverse navbar-fixed-top">
        <div className="container">
          <div className="navbar-header">


            {authInfo.isLoggedIn && <div
              className="icon-menu color_FFF pull-left pad12 margin18 onlySideMargin fontSize_9 cursorHand"
              onClick={this.openMenuOverlay}/>}
            <Link className="navbar-brand" to="/home">
              <img className="pull-left" src={LogoImg} width="30" height="30"
                   alt=""/>
              <span
                className="pull-right margin10 onlyLeftMargin">Storyscape</span>
            </Link>

          </div>
          {authInfo.isLoggedIn && <div className="navbar-right">
            <UserProfile/>
          </div>}

        </div>
      </nav>
    );
  }
}

export default Header;
