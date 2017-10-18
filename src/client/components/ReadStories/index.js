import React from 'react';
import { Link } from 'react-router';

const Stories = () => {

  return (<div className="background_dbdddd vh91">

      <div className="container storyWrapper">
        <div className="row noMargin">
          <div
            className="storyBannerImg banner_story layout horizontal vertical center-center" />

          <div className="margin24 noSideMargin fontSize_5">
            <p>Reading is more complex than the sound of the word and its meaning. It’s about the information, images and ideas it initiates. We teach the symbols or letters first and then their sounds. Then we teach how to arrange them into words which are then assigned meaning.</p>
            <p>We learn that there is an extractable and relatable meaning to the way the letters are arranged and that there can even exist multiple messages to be extracted from between the lines.</p>

            <p className="margin10 noSideMargin">So here are the few write ups to the door of information and entertainment by letters,</p>
            <ol>
              <li><Link to="story1" className="block">The Princess and the Most Faithful Knight</Link></li>
              <li><Link to="story2" className="margin6 noSideMargin block">Happily, thereafter.</Link></li>
              <li><Link to="story3" className="block">Thinking Out of the Box</Link></li>
            </ol>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Stories;