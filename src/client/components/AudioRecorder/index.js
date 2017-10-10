import React, { Component } from 'react';
import axios from 'axios';

import { Main } from './recorderjs/main';

class AudioRecorder extends Component {
  constructor (props) {
    super(props);
    this.main = new Main();

    this.state = {isRecording: false};

    this.onToggleRecord = this.onToggleRecord.bind(this);
  }

  componentDidMount () {

    window.addEventListener('load', this.main.initAudio.bind(this.main));
  }

  blobToBase64 (blob, cb) {
    const reader = new FileReader();
    reader.onload = function () {
      const dataUrl = reader.result;
      const base64 = dataUrl.split(',')[1];
      cb(base64);
    };
    reader.readAsDataURL(blob);
  }

  onToggleRecord () {

    if (this.state.isRecording) {
      this.main.stopRecording((blob) => {

        this.blobToBase64(blob, (base64) => {

          const update = {'blob': base64, name: 'first story', genre: 'funny'};
          axios({
            method: 'post',
            data: update,
            url: 'http://localhost:3000/api/v1/upload',
          }).then((res) => {
            console.log(res.data);
          });
        });

      });
    } else {
      this.main.startRecording();
    }

    this.setState({isRecording: !this.state.isRecording});

  }

  render () {

    return (

      <section className="row">
        <p>I am dashboard!</p>
        <canvas id="analyser" width="1024" height="500"/>


        <button onClick={this.onToggleRecord}>Record</button>
        <button>Save</button>
      </section>);

  }
}

export default AudioRecorder;