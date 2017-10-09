/*License (MIT)

Copyright © 2013 Matt Diamond

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated
documentation files (the "Software"), to deal in the Software without restriction, including without limitation
the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and
to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of
the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO
THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF
CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER
DEALINGS IN THE SOFTWARE.
*/

//const MyWorker = require("worker-loader?inline!./recorecorder.workerrder.worker.js");
//const workerScript = require('raw-loader!./recorderworker.js');
//import MyWorker from "recorder.worker.js";

export class Recorder {
  constructor (source, cfg) {
    this.WORKER_PATH = 'recorderjs/recorderWorker.js';
    this.config = cfg || {};
    const bufferLen = this.config.bufferLen || 4096;
    this.context = source.context;
    if (!this.context.createScriptProcessor) {
      this.node = this.context.createJavaScriptNode(bufferLen, 2, 2);
    } else {
      this.node = this.context.createScriptProcessor(bufferLen, 2, 2);
    }

    this.recording = false;
    this.currCallback = null;

    this.createWorker();

    source.connect(this.node);
    this.node.connect(this.context.destination);
  }



  createWorker () {

    /*if(document.location.host !== "localhost:7000"){
      const MyWorker = require(`worker-loader!./recorderworker`);
      this.worker = new MyWorker();
    }else{//work around to load cross origin worker
      var url = 'http://localhost:2992/js/664571de366d86a9906c.worker.js';
      var response;

      var get = new XMLHttpRequest();
      get.open("GET", url, true);
      get.onreadystatechange = function() {
        if(get.readyState == 4 && get.status == 200) {
          console.log('ajax call successful');
          response = get.responseText;
        }
      };
      get.send();

      var blob;
      try {
        blob = new Blob([response], {type: 'application/javascript'});
      } catch (e) { // Backwards-compatibility
        window.BlobBuilder = window.BlobBuilder || window.WebKitBlobBuilder || window.MozBlobBuilder;
        blob = new BlobBuilder();
        blob.append(response);
        blob = blob.getBlob();
      }
      this.worker = new Worker(URL.createObjectURL(blob));

    }*/
    const MyWorker = require(`worker-loader!./recorderworker`);
    this.worker = new MyWorker();


   // this.worker = new Worker();
    this.worker.postMessage({
      command: 'init',
      config: {
        sampleRate: this.context.sampleRate,
      },
    });
    this.node.onaudioprocess = (e) => {
      if (!this.recording) return;
      this.worker.postMessage({
        command: 'record',
        buffer: [
          e.inputBuffer.getChannelData(0),
          e.inputBuffer.getChannelData(1),
        ],
      });
    };

    this.worker.onmessage = (e)=> {
      const blob = e.data;
      this.currCallback(blob);
    };
  }

  configure (cfg) {
    for (let prop in cfg) {
      if (cfg.hasOwnProperty(prop)) {
        this.config[prop] = cfg[prop];
      }
    }
  }

  record () {
    this.recording = true;
  }

  stop () {
    this.recording = false;
  }

  clear () {
    this.worker.postMessage({command: 'clear'});
  }

  getBuffers (cb) {
    this.currCallback = cb || this.config.callback;
    this.worker.postMessage({command: 'getBuffers'});
  }

  exportWAV (cb, type) {
    console.log("exportWAV-->");
    this.currCallback = cb || this.config.callback;
    type = type || this.config.type || 'audio/wav';
    if (!this.currCallback) throw new Error('Callback not set');
    this.worker.postMessage({
      command: 'exportWAV',
      type: type,
    });
  }

  exportMonoWAV (cb, type) {
    this.currCallback = cb || this.config.callback;
    const msgType = type || this.config.type || 'audio/wav';
    if (!this.currCallback) throw new Error('Callback not set');
    this.worker.postMessage({
      command: 'exportMonoWAV',
      type: msgType,
    });
  }
}