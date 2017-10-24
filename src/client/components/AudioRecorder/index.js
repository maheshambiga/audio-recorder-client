import React, { Component } from 'react';
import StoryForm from './StoryForm';
import Main from './recorderjs/main';


class AudioRecorder extends Component {
  constructor (props) {
    super(props);

    //simple timer
    this.timer = null;

    //instantiate audio
    this.main = new Main();
    this.main.initAudio.bind(this.main);


    this.state = {isRecording: false, showForm: false, audioBlob: '', timeElapsed:''};

    this.onToggleRecording = this.onToggleRecording.bind(this);
    this.onCancelRecording = this.onCancelRecording.bind(this);
    this.onStorySubmitHandler = this.onStorySubmitHandler.bind(this);


  }

  componentDidMount () {
    navigator.getUserMedia && this.main.initAudio();
    this.setCanvasSizeProps();

  }

  setCanvasSizeProps () {
    const footerHeight = 81;
    const headerHeight = 60;
    const topMargin = 60;
    const pageWidth = document.getElementById('body-wrapper').offsetWidth;
    document.getElementById('analyser').
      setAttribute('style', `width:${pageWidth}px;height:${window.innerHeight -
      (footerHeight + headerHeight + topMargin)}px`);

  }

  onToggleRecording () {

    if (this.state.isRecording) {
      this.setState({showForm: true, isRecording:false});

      this.main.stopRecording((blob) => {

        this.setState({audioBlob: blob});
        this.stopTimer();

      });

    } else {

      if(this.main !== null){
        this.startTimer();
        this.main.startRecording();
      }
      this.setState({isRecording: true});
    }

  }

  componentWillUnmount () {
    if (this.state.isRecording && this.main !== null) {
      this.main.startRecording();
    }
    navigator.getUserMedia && this.main.audioContext.close();
  }

  onCancelRecording () {
    this.setState({isRecording: false, showForm: false, audioBlob: ''});
  }

  onStorySubmitHandler (formData) {
    this.props.addStory(
      Object.assign({}, formData, {blob: this.state.audioBlob}));
    this.setState({isRecording: false, showForm: false});
    this.stopTimer();
  }
  pad(n){
    return ('00' + n).slice(-2);
  }

  startTimer(){
    const startTime = Date.now();
    const second =1000;
    const minute = second * 60;
    const hour = minute * 60;

    this.timer = setInterval(()=>{
      const currentTime = Date.now();
      const difference = currentTime - startTime;

      const hours = this.pad((difference / hour) | 0);
      const minutes = this.pad(((difference % hour) / minute) | 0);
      const seconds = this.pad(((difference % minute) / second) | 0);

      this.setState({timeElapsed:`${hours + ':' + minutes + ':' + seconds}`});
    }, 250);
  }
  stopTimer(){
    clearInterval(this.timer);
  }
  render () {
    const btnLabel = (this.state.isRecording) ? 'Save' : 'Record';
    return (
      <section className="background_959595 vh91">

        {this.state.showForm && <div className="overlay modalContent">
          <div className="modalBody color_FFF">
            <StoryForm storySubmitHandler={this.onStorySubmitHandler}
                       onCancel={this.onCancelRecording}/>
          </div>
        </div>}

        <div className="audioRecorder">
          {navigator.getUserMedia && <div className={`icon-mic text-center color_FFF audioMic cursorHand ${this.state.isRecording
              ? 'm-active'
              : ''}`} onClick={this.onToggleRecording}/>}
          {!navigator.getUserMedia && <p className="fontSize_8 color_FFF text-center">Native device media(getUserMedia) not supported in this browser.</p>}
          {this.state.isRecording && <span className="color_FFF bold fontSize_9_5">{this.state.timeElapsed}</span>}
        </div>

        <canvas id="analyser" style={{'border':'1px solid red'}}/>


      </section>);

  }
}

export default AudioRecorder;