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

    <div className="background_themeColor vh91 homepage_bg">
      <div className="container ">
        <div className="row margin24 onlyTopMargin">
          <div className="col-xs-12 col-md-6 color_FFF">
            <p className="fontSize_9_5 bold">Interesting stories to set your
                mind in your wave.</p>
            <p>We
              all love stories. We’re born for them. Stories affirm who we are. We all want
              affirmations that our lives have meaning. And nothing does a greater
              affirmation than when we connect through stories.</p>
            <p>It can cross the barriers of
              time, past, present and future, and allow us to experience the similarities
              between ourselves and through others, real and imagined.</p>
          </div>
        </div>
        <div className="row" style={{ position: "relative", top: "60px" }}>
          <div className="col-xs-12"><button className="button primary large margin12 onlyRightMargin"
            onClick={onClickGetStartedHandler}>Get started
            </button>
            <button className="button primary large"
              onClick={onClickLearnMoreHandler}>Learn more
            </button></div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
