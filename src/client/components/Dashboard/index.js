import React, { Component } from 'react';

import Loader from '../common/Loader';

class Dashboard extends Component {
  constructor (props) {
    super(props);

  }
  componentWillUnmount(){

  }

  render () {

    return (

      <section className="row">
        <p>I am dashboard!</p>

      </section>);

  }
}

export default Dashboard;