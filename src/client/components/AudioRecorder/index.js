import React, { Component } from 'react';
import StoryForm from './StoryForm';
import Main from './recorderjs/main';

class AudioRecorder extends Component {
  constructor (props) {
    super(props);
    this.main = new Main();

    this.state = {isRecording: false, showForm: false, audioBlob: ''};

    this.onToggleRecording = this.onToggleRecording.bind(this);
    this.onCancelRecording = this.onCancelRecording.bind(this);
    this.onStorySubmitHandler = this.onStorySubmitHandler.bind(this);
  }

  componentDidMount () {
    window.addEventListener('load', this.main.initAudio.bind(this.main));
  }

  onToggleRecording () {

    if (this.state.isRecording) {
      this.setState({showForm: true});

      this.main.stopRecording((blob) => {

        this.setState({audioBlob: blob});

      });

    } else {
      this.main !== null && this.main.startRecording();
      this.setState({isRecording: true});
    }

  }
  componentWillUnmount(){
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
      <div className="container">
        <div className="margin24 noSideMargin">
          <section>
            <div className="row noMargin">
              <h4>Record your story</h4>
            </div>
            <div className="row noMargin">
              <div className="margin12 onlyBottomMargin">
                <canvas id="analyser" width="800" height="150"/>
              </div>
            </div>
            <div className="row noMargin">
              <div className="margin24 onlyBottomMargin">
                <button className={`btn margin24 ${this.state.isRecording
                  ? 'btn-danger'
                  : 'btn-primary'} onlyRightMargin`}
                        onClick={this.onToggleRecording}>{btnLabel}</button>
                {this.state.isRecording && <button className="btn btn-primary"
                                                   onClick={this.onCancelRecording}>
                  Cancel</button>}
              </div>
            </div>
            {this.state.showForm &&
            <StoryForm storySubmitHandler={this.onStorySubmitHandler}/>}

          </section>
        </div>
      </div>);

  }
}

export default AudioRecorder;