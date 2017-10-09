import React, { Component } from 'react';

import Loader from '../common/Loader';


import {Main} from './main';



class Dashboard extends Component {
  constructor (props) {
    super(props);
    this.main = new Main();

    this.state = {isRecording:false};

    this.onToggleRecord = this.onToggleRecord.bind(this);
  }

  componentDidMount(){

    window.addEventListener('load', this.main.initAudio.bind(this.main) );
  }
  onToggleRecord(){

    if(this.state.isRecording){
      this.main.stopRecording();
    }else{
      this.main.startRecording();
    }

    this.setState({isRecording: !this.state.isRecording});

  }

  render () {

    return (

      <section className="row">
        <p>I am dashboard!</p>
        <canvas id="analyser" width="1024" height="500" />
        <canvas id="wavedisplay" width="1024" height="500" />

        <button onClick={this.onToggleRecord}>Record</button>
        <button>Save</button>
      </section>);

  }
}

export default Dashboard;