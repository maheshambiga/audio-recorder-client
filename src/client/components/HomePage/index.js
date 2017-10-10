import React, { Component } from 'react';

class HomePage extends Component {
  constructor (props) {
    super(props);

  }

  render () {
    const {authInfo} = this.props;
    return (
      <p>This is a home page.</p>
    );
  }
}

export default HomePage;