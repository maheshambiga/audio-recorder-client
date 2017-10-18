import React from 'react';
import { browserHistory } from 'react-router';

const HomePage = (props) => {

  const onClickGetStartedHandler = () => {
    browserHistory.push('/login');
  };
  const onClickLearnMoreHandler = () => {
    browserHistory.push('/learn-more');
  };

  return (

    <div className="background_themeColor vh91">
      <div className="container">
        <div className="margin24 noSideMargin">
          <div className="row noMargin">
            <div className="homePageLeftSection color_FFF">
              <p className="fontSize_9_2 bold">Interesting stories to set your
                mind in your wave.</p>
              <p>Hear directly from the people who know it best. From tech to politics to creativity and more — whatever your interest, we’ve got you covered.</p>
            </div>
            <div>
              <div className="homePageTree"/>
            </div>
          </div>
          <div className="row margin18 onlyTopMargin">
            <button className="button primary large margin12 onlyRightMargin"
                    onClick={onClickGetStartedHandler}>Get started
            </button>
            <button className="button primary large"
                    onClick={onClickLearnMoreHandler}>Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;