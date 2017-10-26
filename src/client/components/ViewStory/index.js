import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Loader from '../common/Loader';
import { GET_AUDIO_FILE_API } from './../../appConstants';
import './../../assets/styles/audioPlayer.css';
import AudioPlayer from 'react-responsive-audio-player';

class ViewStory extends Component {
  constructor (props) {
    super(props);
    this.onGoBackHandler = this.onGoBackHandler.bind(this);
  }

  componentDidMount () {
    const {userId, storyId} = this.props.params;
    this.props.viewStory({userId, storyId});
  }

  onGoBackHandler () {
    browserHistory.goBack();
  }

  render () {
    const {isFetching, error, result} = this.props;
    return (
      <div className="background_themeColor vh91">
        <div className="container">
          <div className="margin24 noSideMargin">
            <div
              className="icon-arrow-left2 fontSize_8 cursorHand margin24 onlyBottomMargin"
              onClick={browserHistory.goBack}/>
            <section>
              {error !== null &&
              <h3 className="text-danger text-center">Something went
                wrong!</h3>}
              {isFetching === true && error === null && <Loader/>}
              {isFetching === false && error === null &&
              Object.keys(result).length > 0 && <div className="clearfix">
                <div className="row noMargin">
                  <div className="col-lg-12">
                    <div className="listenStory">
                      <p className="text-center pad24 onlyTopPad fontBradleyHandITC fontSize_7 fontWeightBold noMargin">{result.data[0].story.storyName}</p>
                      <p className="center fontBradleyHandITC fontSize_6 fontWeightBold">{result.data[0].story.genre}</p>
                    </div>
                  </div>
                </div>
                <AudioPlayer
                  playlist={[{ url: `https://storage.googleapis.com/story_audios_bucket/${result.data[0].story.path}`,
                  displayText: `A story by ${result.data[0].createdBy}` }]}
                             hideBackSkip={true}
                             autoplay={true}
                             autoplayDelayInSeconds={2}
                             hideForwardSkip={true}
                             cycle={false} />
              </div>}
            </section>
          </div>
        </div>
      </div>);

  }
}

export default ViewStory;