import React from 'react';
import { browserHistory } from 'react-router';

const LearnMore = (props) => {

  return (

    <div className="background_themeColor vh91">
          <div className="row noMargin">
            <div className="learnMore  vh91">
              <div className="container color_FFF height100">
                <div className="row height100">
                  <div className="col-lg-6 col-lg-push-6 height100">
                    <div className="margin24 onlyTopMargin height100 layout vertical center-center">
                      <p className="fontSize_9_5 bold fontBradleyHandITC">Your own stories</p>
                      <p className="fontSize_6">Everyone gets a little down in the dumps sometimes. Rather than searching the internet for cat pictures and drowning your sorrows in junk, check out these short stories. We have put together the best short stories, both real and fictional, to pull you from your sump, make you simile and inspire you.</p>
                      <button className="button primary large margin12 onlyRightMargin self-start"
                              onClick={browserHistory.goBack}>Go back
                      </button>
                    </div>
                  </div>
                </div>
              </div>
          </div>
      </div>
    </div>
  );
};

export default LearnMore;