import React, { Component } from 'react';
import Loader from '../common/Loader';


class ViewStory extends Component {
  constructor (props) {
    super(props);

  }

  componentDidMount () {
    const {userId, storyId} = this.props.params;
    this.props.viewStory({userId, storyId});
  }

  render () {
    const {isFetching, error, result} = this.props;
    return (
      <section>
        {error !== null &&
        <h3 className="text-danger text-center">Something went wrong!</h3>}
        {isFetching === true && error === null && <Loader/>}
        {isFetching === false && error === null &&
        Object.keys(result).length > 0 && <div className="clearfix">
          <div className="row">
            <p>{result.data[0].story.storyName}</p>
            <p>{result.data[0].story.genre}</p>
          </div>
          <audio controls autoPlay={true}>
            <source src={`http://localhost:3000/api/v1/audio/${String(result.data[0].story.path).replace('uploads/', '')}`} type="audio/wav"/>
          </audio>
        </div>}
      </section>)

  }
}

export default ViewStory;