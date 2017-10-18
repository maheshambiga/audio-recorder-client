import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import Loader from '../common/Loader';
import { GET_AUDIO_FILE_API } from './../../appConstants';

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
                  <p>{result.data[0].story.storyName}</p>
                  <p>{result.data[0].story.genre}</p>
                </div>
                <audio controls className="width-100">
                  <source
                    src={`${GET_AUDIO_FILE_API}/${result.data[0].story.path}`}
                    type="audio/wav"/>
                </audio>
              </div>}
            </section>
          </div>
        </div>
      </div>);

  }
}

export default ViewStory;