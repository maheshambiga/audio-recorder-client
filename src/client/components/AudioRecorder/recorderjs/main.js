/* Copyright 2013 Chris Wilson

   Licensed under the Apache License, Version 2.0 (the "License");
   you may not use this file except in compliance with the License.
   You may obtain a copy of the License at

       http://www.apache.org/licenses/LICENSE-2.0

   Unless required by applicable law or agreed to in writing, software
   distributed under the License is distributed on an "AS IS" BASIS,
   WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
   See the License for the specific language governing permissions and
   limitations under the License.
*/
import { drawBuffer } from './AudioDisplay';
import { Recorder } from './recorder';

export class Main {
  constructor () {
    window.AudioContext = window.AudioContext || window.webkitAudioContext;

    this.audioContext = new AudioContext();
    this.audioInput = null;

    this.realAudioInput = null;
    this.inputPoint = null;
    this.audioRecorder = null;
    this.rafID = null;
    this.analyserContext = null;
    this.canvasWidth = 0;
    this.canvasHeight = 0;
    this.recIndex = 0;
    this.analyserNode = null;

    this.audioRecorder = null;
    this.blob = null;//audio content
    //blob notifier
    this.callback = null;
  }

  saveAudio () {
    this.audioRecorder.exportWAV(this.doneEncoding.bind(this));
    // could get mono instead by saying
    // audioRecorder.exportMonoWAV( doneEncoding );
  }

  gotBuffers (buffers) {
    /*const canvas = document.getElementById('wavedisplay');
    drawBuffer(canvas.width, canvas.height, canvas.getContext('2d'),
      buffers[0]);*/
    console.log("gotBuffers-->", buffers);

    // the ONLY time gotBuffers is called is right after a new recording is completed -
    // so here's where we should set up the download.
    this.audioRecorder.exportWAV(this.doneEncoding.bind(this));
  }

  doneEncoding (blob) {
    //Recorder.setupDownload( blob, "myRecording" + ((recIndex<10)?"0":"") + recIndex + ".wav" );
    this.blob = blob;
    console.log("doneEncoding-->", blob);

    this.callback(blob);
    this.recIndex++;
  }

  stopRecording (cb) {
    this.callback = cb;
    this.audioRecorder.stop();

    this.audioRecorder.getBuffers(this.gotBuffers.bind(this));
  }

  startRecording () {
    this.blob = null;//clear blob for new recording
    this.audioRecorder.clear();
    this.audioRecorder.record();

  }

  convertToMono (input) {
    const splitter = this.audioContext.createChannelSplitter(2);
    const merger = this.audioContext.createChannelMerger(2);

    input.connect(splitter);
    splitter.connect(merger, 0, 0);
    splitter.connect(merger, 0, 1);
    return merger;
  }

  cancelAnalyserUpdates () {
    window.cancelAnimationFrame(this.rafID);
    this.rafID = null;
  }

  updateAnalysers (time) {
    if (!this.analyserContext) {
      let canvas = document.getElementById('analyser');
      this.canvasWidth = canvas.width;
      this.canvasHeight = canvas.height;
      this.analyserContext = canvas.getContext('2d');
    }

    // analyzer draw code here
    {
      const SPACING = 3;
      const BAR_WIDTH = 1;
      const numBars = Math.round(this.canvasWidth / SPACING);
      const freqByteData = new Uint8Array(this.analyserNode.frequencyBinCount);

      this.analyserNode.getByteFrequencyData(freqByteData);

      this.analyserContext.clearRect(0, 0, this.canvasWidth, this.canvasHeight);
      this.analyserContext.fillStyle = '#F6D565';
      this.analyserContext.lineCap = 'round';
      const multiplier = this.analyserNode.frequencyBinCount / numBars;

      // Draw rectangle for each frequency bin.
      for (let i = 0; i < numBars; ++i) {
        let magnitude = 0;
        const offset = Math.floor(i * multiplier);
        // gotta sum/average the block, or we miss narrow-bandwidth spikes
        for (let j = 0; j < multiplier; j++)
          magnitude += freqByteData[offset + j];
        magnitude = magnitude / multiplier;
        const magnitude2 = freqByteData[i * multiplier];
        this.analyserContext.fillStyle = 'hsl( ' +
          Math.round((i * 360) / numBars) + ', 100%, 50%)';
        this.analyserContext.fillRect(i * SPACING, this.canvasHeight, BAR_WIDTH,
          -magnitude);
      }
    }

    this.rafID = window.requestAnimationFrame(this.updateAnalysers.bind(this));
  }

  toggleMono () {
    if (this.audioInput != this.realAudioInput) {
      this.audioInput.disconnect();
      this.realAudioInput.disconnect();
      this.audioInput = this.realAudioInput;
    } else {
      this.realAudioInput.disconnect();
      this.audioInput = this.convertToMono(realAudioInput);
    }

    this.audioInput.connect(this.inputPoint);
  }

  gotStream (stream) {
    console.log(this);
    this.inputPoint = this.audioContext.createGain();

    // Create an AudioNode from the stream.
    this.realAudioInput = this.audioContext.createMediaStreamSource(stream);
    this.audioInput = this.realAudioInput;
    this.audioInput.connect(this.inputPoint);

//    audioInput = convertToMono( input );

    this.analyserNode = this.audioContext.createAnalyser();
    this.analyserNode.fftSize = 2048;
    this.inputPoint.connect(this.analyserNode);

    this.audioRecorder = new Recorder(this.inputPoint);

    const zeroGain = this.audioContext.createGain();
    zeroGain.gain.value = 0.0;
    this.inputPoint.connect(zeroGain);
    zeroGain.connect(this.audioContext.destination);
    this.updateAnalysers();
  }

  initAudio () {

    if (!navigator.getUserMedia)
      navigator.getUserMedia = navigator.webkitGetUserMedia ||
        navigator.mozGetUserMedia;
    if (!navigator.cancelAnimationFrame)
      navigator.cancelAnimationFrame = navigator.webkitCancelAnimationFrame ||
        navigator.mozCancelAnimationFrame;
    if (!navigator.requestAnimationFrame)
      navigator.requestAnimationFrame = navigator.webkitRequestAnimationFrame ||
        navigator.mozRequestAnimationFrame;

    if (navigator.getUserMedia) {
      navigator.getUserMedia(
        {
          'audio': {
            'mandatory': {
              'googEchoCancellation': 'false',
              'googAutoGainControl': 'false',
              'googNoiseSuppression': 'false',
              'googHighpassFilter': 'false',
            },
            'optional': [],
          },
        }, this.gotStream.bind(this), function (err) {
          alert('Error getting audio', err.name);

        });
    }

  }


}