import React from 'react';
import { browserHistory } from 'react-router';

const HomePage = (props) => {

  const onClickGetStartedHandler = () => {
    browserHistory.push('/login');
  };
  const onClickLearnMoreHandler = () => {

  };

  return (

    <div className="background_themeColor">
      <div className="container">
        <div className="margin24 noSideMargin">
          <div className="homePageLeftSection color_FFF">
            <p className="fontSize_9_2 bold">Interesting concepts to set your
              mind in your wave.</p>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged. It was
              popularised in the 1960s with the release of Letraset sheets
              containing Lorem Ipsum passages, and more recently with desktop
              publishing software like Aldus PageMaker including versions of
              Lorem Ipsum.</p>
          </div>
          <div>
            <div className="homePageTree"/>
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