import React, { Component } from 'react';
import { Link } from 'react-router';
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

            <div className="layout horizontal start-justified center">
            {authInfo.isLoggedIn && <div
              className="icon-menu color_747676 pull-left pad12 margin6 onlySideMargin fontSize_9 cursorHand hamburgerMenu"
              onClick={this.openMenuOverlay}/>}

            <Link className="navbar-brand" style={{'marginLeft':0, 'height':'auto'}} to="/home">
              <div className="layout horizontal start-justified center">
              <img className="pull-left" src={LogoImg} width="30" height="30"
                   alt=""/>
              <span
                className="pull-right margin10 onlyLeftMargin">Storyscape</span></div>
            </Link>
            </div>

          </div>

        </div>
      </nav>
    );
  }
}

export default Header;
