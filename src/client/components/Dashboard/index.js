import React, { Component } from 'react';
import Loader from '../common/Loader';
import { Link } from 'react-router';

class Dashboard extends Component {
  constructor (props) {
    super(props);

  }

  componentWillReceiveProps (nextProps) {
    if (this.props.filterBy !== nextProps.filterBy) {
      this.props.getStories(nextProps.filterBy);
    }
  }

  componentDidMount () {
    const {filterBy} = this.props;
    this.props.getStories(filterBy);
  }

  onGenreChange (evt) {
    const genre = evt.target.value;

    this.props.updateFilterType(genre);

  }

  render () {
    const {isFetching, error, result, filterBy} = this.props;
    return (
      <div className="background_themeColor">
        <div className="container">
          <div className="margin24 noSideMargin">
            <section>
              {error !== null &&
              <h3 className="text-danger text-center">Something went
                wrong!</h3>}
              {isFetching === true && error === null && <Loader/>}
              {isFetching === false && error === null &&
              Object.keys(result).length > 0 && <div className="clearfix">

                <div className="row">
                  <div className="col-lg-12">
                    <span> Filter by:</span>
                    <span className="custom-dropdown ">
                    <select value={filterBy}
                            onChange={this.onGenreChange.bind(this)}>
                      <option value='all'>All</option>
                      <option value='Comedy'>Comedy</option>
                      <option value='Drama'>Drama</option>
                      <option value='Horror fiction'>Horror fiction</option>
                      <option value='Romance'>Romance</option>
                      <option value='Tragedy'>Tragedy</option>
                      <option value='Fantasy'>Fantasy</option>
                      <option value='Mythology'>Mythology</option>
                    </select>
                    </span>
                  </div>

                </div>
                <div className="row margin36 onlyTopMargin">
                  {result.data.length > 0 ? result.data.map((result, id) => {
                    return (
                      <div
                        className="col-xs-12 col-md-6 col-sm-6 col-lg-6 border border-success margin12 onlyBottomMargin"
                        key={`story-${id}`}>
                        <div className="layout horizontal color_FFF start-justified center">
                          <div className="dashBoardStoryBox ">
                            <div className="dashBoardStoryBoxImg"/>
                          </div>
                          <div className="dashBoardStoryName pad12 onlyLeftPad">
                            <p className="fontSize_8 overFlowWrap">{result.story.storyName}</p>
                            <p>By: {result.createdBy}</p>
                            <Link
                              to={`story/${result._id}/${result.story._id}`}>Listen</Link>
                          </div>

                        </div>
                      </div>
                    );
                  }) : <h5 className="text-secondary pad24 text-center">No items
                    found!</h5>}
                </div>

              </div>}</section>
          </div>
        </div>
      </div>

    );

  }
}

export default Dashboard;