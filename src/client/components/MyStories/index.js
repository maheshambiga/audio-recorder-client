import React, { Component } from 'react';
import Loader from '../common/Loader';
import { Link } from 'react-router';

import adventure_1 from './../../assets/images/icons/adventure_1.png';
import bedtime_1 from './../../assets/images/icons/bedtime_1.png';
import bedtime_2 from './../../assets/images/icons/bedtime_2.png';
import bedtime_3 from './../../assets/images/icons/bedtime_3.png';
import comedy_1 from './../../assets/images/icons/comedy_1.png';
import drama_1 from './../../assets/images/icons/drama_1.png';
import fantasy_1 from './../../assets/images/icons/fantasy_1.png';
import horror_1 from './../../assets/images/icons/horror_1.png';
import inspirational_2 from './../../assets/images/icons/inspirational_2.png';
import romance_2 from './../../assets/images/icons/romance_2.png';
import selfhelp_1 from './../../assets/images/icons/selfhelp_1.png';
import selfhelp_2 from './../../assets/images/icons/selfhelp_2.png';

class MyStories extends Component {
  constructor (props) {
    super(props);

  }

  componentWillReceiveProps (nextProps) {
    if (this.props.filterBy !== nextProps.filterBy) {
      this.props.getMyStories(nextProps.filterBy);
    }
  }

  componentDidMount () {
    const {filterBy} = this.props;
    this.props.getMyStories(filterBy);
  }

  onGenreChange (evt) {
    const genre = evt.target.value;

    this.props.updateFilterType(genre);

  }
  getRandomArbitrary(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  getImages(){
    return {
      "Adventure":[adventure_1],
      "Bedtime":[bedtime_1, bedtime_2, bedtime_3],
      "Comedy":[comedy_1],
      "Drama":[drama_1],
      "Horror":[horror_1],
      "Romance":[ romance_2],
      "Inspirational":[inspirational_2],
      "Fantasy":[fantasy_1],
      "Self-help":[selfhelp_1, selfhelp_2]
    }
  }
  getImage(categoryName){
    const imagesBank = this.getImages();
    const catImgsArr = imagesBank[categoryName];
    const random = this.getRandomArbitrary(0, catImgsArr.length-1);
    return catImgsArr[random];
  }
  onRemoveStoryHandler({userId, storyId}){
    this.props.removeStory({userId, storyId, filterBy:this.props.filterBy});
  }

  render () {
    const {isFetching, error, result, filterBy} = this.props;
    return (
      <div className="background_themeColor vh91">
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
                    <span className="custom-dropdown margin12 onlyLeftMargin">
                    <select value={filterBy}
                            onChange={this.onGenreChange.bind(this)}>
                      <option value='all'>All</option>
                      <option value='Adventure'>Adventure</option>
                      <option value='Bedtime'>Bedtime</option>
                      <option value='Comedy'>Comedy</option>
                      <option value='Drama'>Drama</option>
                      <option value='Horror'>Horor</option>
                      <option value='Romance'>Romance</option>
                      <option value='Inspirational'>Inspirational</option>
                      <option value='Fantasy'>Fantasy</option>
                      <option value='Self-help'>Self-help</option>
                    </select>
                    </span>
                  </div>
                </div>
                <div className="row margin36 onlyTopMargin">
                  {result.data.length > 0 ? result.data.map((user, id) => {
                    const storyCoverPhoto = {
                      backgroundImage: 'url('+this.getImage(user.story.genre)+')',
                      backgroundSize: 'contain'
                    };
                    return (
                      <div
                        className="col-xs-12 col-md-6 col-sm-6 col-lg-6 border border-success margin12 onlyBottomMargin noPad"
                        key={`story-${id}`}>
                        <div className="layout horizontal color_FFF start-justified">
                          <div className="dashBoardStoryBox ">
                            <div className="dashBoardStoryBoxImg" style={storyCoverPhoto}/>
                          </div>
                          <div className="layout vertical color_FFF start-justified margin24 onlyLeftMargin center-justified">
                            <p className="fontSize_8 overFlowWrap">{user.story.storyName}</p>
                            <p className="fontSize_4 text-uppercase textItalic overFlowWrap">{user.story.genre}</p>
                            <Link className="color_666 textUnderline margin12 onlyBottomMargin"
                                  to={`story/${user._id}/${user.story._id}`}>Listen</Link>
                            <a href="javascript:void(0);" className="color_666 textUnderline" onClick={()=>{this.onRemoveStoryHandler({userId:user._id, storyId:user.story._id})}}>Remove</a>

                          </div>

                        </div>
                      </div>
                    );
                  }) : <div className="text-center">
                    <p className="text-center fontSize_5">No items
                      found!</p><p className="margin12 onlyTopMargin">Go ahead and record a story.</p>
                  </div>}
                </div>

              </div>}</section>
          </div>
        </div>
      </div>

    );

  }
}

export default MyStories;