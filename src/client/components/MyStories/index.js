import React, { Component } from 'react';
import Loader from '../common/Loader';
import { Link } from 'react-router';


class MyStories extends Component {
  constructor (props) {
    super(props);

  }
  componentWillReceiveProps(nextProps){
    if(this.props.filterBy !== nextProps.filterBy){
      this.props.getMyStories(nextProps.filterBy);
    }
  }

  componentDidMount () {
    const {filterBy} = this.props;
    this.props.getMyStories(filterBy);
  }
  onGenreChange(evt){
    const genre = evt.target.value;

    this.props.updateFilterType(genre);

  }

  render () {
    const {isFetching, error, result, filterBy} = this.props;
    return (
      <section>
        {error !== null &&
        <h3 className="text-danger text-center">Something went wrong!</h3>}
        {isFetching === true && error === null && <Loader/>}
        {isFetching === false && error === null &&
        Object.keys(result).length > 0 && <div className="clearfix">

          <div className="row">
            <div className="col-lg-1">
              Filter by:
            </div>
            <div className="col-lg-8">
              <select value={filterBy} onChange={this.onGenreChange.bind(this)}>
                <option value='all'>All</option>
                <option value='Comedy'>Comedy</option>
                <option value='Drama'>Drama</option>
                <option value='Horror fiction'>Horror fiction</option>
                <option value='Romance'>Romance</option>
                <option value='Tragedy'>Tragedy</option>
                <option value='Fantasy'>Fantasy</option>
                <option value='Mythology'>Mythology</option>
              </select>
            </div>
          </div>
          <div className="row margin36 onlyTopMargin">
          {result.data.length > 0 ? result.data.map((result,id) => {
            return (
              <div className="col-xs-12 col-md-3 border border-success" key={`story-${id}`}>
                <p>{result.createdBy}</p>
                <p>{result.story.storyName}</p>
                <p>{result.story.genre}</p>
                <Link to={`story/${result._id}/${result.story._id}`}>View</Link>
              </div>
            );
          }) : <h5 className="text-secondary pad24 text-center">No items
            found!</h5>}
          </div>

        </div>}</section>

    );

  }
}

export default MyStories;