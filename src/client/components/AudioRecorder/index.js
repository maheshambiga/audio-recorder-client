import React, { Component } from 'react';
import StoryForm from './StoryForm';
import Main from './recorderjs/main';

class AudioRecorder extends Component {
  constructor (props) {
    super(props);

    //instantiate audio
    this.main = new Main();
    this.main.initAudio.bind(this.main);

    this.state = {isRecording: false, showForm: false, audioBlob: ''};

    this.onToggleRecording = this.onToggleRecording.bind(this);
    this.onCancelRecording = this.onCancelRecording.bind(this);
    this.onStorySubmitHandler = this.onStorySubmitHandler.bind(this);


  }

  componentDidMount () {
    this.main.initAudio();
    this.setCanvasSizeProps();

  }

  setCanvasSizeProps () {
    const footerHeight = 81;
    const headerHeight = 60;
    const pageWidth = document.getElementById('body-wrapper').offsetWidth;
    document.getElementById('analyser').
      setAttribute('style', `width:${pageWidth}px;height:${window.innerHeight -
      (footerHeight + headerHeight)}px`);

  }

  onToggleRecording () {

    if (this.state.isRecording) {
      this.setState({showForm: true, isRecording:false});

      this.main.stopRecording((blob) => {

        this.setState({audioBlob: blob});

      });

    } else {

      if(this.main !== null){
        this.main.startRecording();
      }
      this.setState({isRecording: true});
    }

  }

  componentWillUnmount () {
    if (this.state.isRecording && this.main !== null) {
      this.main.startRecording();
    }
    this.main.audioContext.close();
  }

  onCancelRecording () {
    this.setState({isRecording: false, showForm: false, audioBlob: ''});
  }

  onStorySubmitHandler (formData) {
    this.props.addStory(
      Object.assign({}, formData, {blob: this.state.audioBlob}));
    this.setState({isRecording: false, showForm: false});
  }

  render () {
    const btnLabel = (this.state.isRecording) ? 'Save' : 'Record';
    return (
      <section>

        {this.state.showForm && <div className="overlay modalContent">
          <div className="modalBody color_FFF">
            <StoryForm storySubmitHandler={this.onStorySubmitHandler}
                       onCancel={this.onCancelRecording}/>
          </div>
        </div>}


        <div
          className={`icon-mic audioMic cursorHand ${this.state.isRecording
            ? 'm-active'
            : ''}`} onClick={this.onToggleRecording}/>
        <canvas id="analyser" style={{visibility:`${this.state.isRecording}?'hidden':'visible'`}}/>

      </section>);

  }
}

export default AudioRecorder;