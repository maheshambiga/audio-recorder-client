import React from 'react';
import { Link } from 'react-router';

const Stories = () => {

  return (<div className="background_dbdddd vh91">

      <div className="container storyWrapper">
        <div className="row noMargin">
          <div
            className="storyBannerImg banner_story_1 layout horizontal vertical center-center" />

          <div className="margin24 noSideMargin fontSize_5">
            <ol>
              <li><Link to="story1">Story 1</Link></li>
              <li><Link to="story2">Story 2</Link></li>
              <li><Link to="story3">Story 3</Link></li>
            </ol>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Stories;