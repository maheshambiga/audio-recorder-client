import React from 'react';
import {Link} from 'react-router';
const Stories = () => {

  return (<div className="background_themeColor">
    <div className="container">
      <div className="margin24 noSideMargin">
        <div className="row noMargin">
          <div className="col-lg-12 col-sm-12  col-md-12 color_FFF">
            <p className="fontSize_9_2 bold">Stories</p>

            <ol>
              <li><Link to="story1">Story 1</Link></li>
              <li><Link to="story2">Story 2</Link></li>
              <li><Link to="story3">Story 3</Link></li>
            </ol>
          </div>
        </div>

      </div>
    </div>
  </div>);
};

export default Stories;