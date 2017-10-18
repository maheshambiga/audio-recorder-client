import React from 'react';
import { browserHistory } from 'react-router';

const LearnMore = (props) => {


  return (

    <div className="background_themeColor vh91">
      <div className="container">
        <div className="margin24 noSideMargin">
          <div className="row noMargin">
            <div className="learnMoreLeft pull-left">
              <div className="learnMoreLeftImg "/>
            </div>
            <div className="learnMoreRightSection color_FFF pull-right">
              <p className="fontSize_9_2 bold fontBradleyHandITC">Your own stories</p>
              <p>Everyone gets a little down in the dumps sometimes. Rather than searching the internet for cat pictures and drowning your sorrows in junk, check out these short stories. We have put together the best short stories, both real and fictional, to pull you from your sump, make you simile and inspire you.</p>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnMore;