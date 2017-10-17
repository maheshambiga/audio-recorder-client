import React from 'react';
import { IndexRoute, Redirect, Route } from 'react-router';

import App from './containers/App';
import LoginPage from './containers/Login/index';
import RegisterUser from './containers/Register/index';
import Dashboard from './containers/Dashboard/index';
import EnsureLoggedInContainer from './containers/EnsureLoggedIn';
import RecordAudio from './containers/AudioRecorder';
import HomePage from './components/HomePage';
import LeanMore from './components/LearnMore';
import ViewStory from './containers/ViewStory';
import MyStories from './containers/MyStories';
import Stories from './components/ReadStories';
import Story1 from './components/ReadStories/Story1';
import Story2 from './components/ReadStories/Story2';
import Story3 from './components/ReadStories/Story3';

export const routes = (
  <Route path="/" component={App}>
    <Redirect from="/" to="home" />
    <Route path="login" component={LoginPage}/>
    <Route path="register" component={RegisterUser}/>
    <Route path="home" component={HomePage}/>
    <Route path="learn-more" component={LeanMore}/>
    <Route path="stories" component={Stories}/>
    <Route path="story1" component={Story1}/>
    <Route path="story2" component={Story2}/>
    <Route path="story3" component={Story3}/>
    <Route component={EnsureLoggedInContainer}>
      <Route path='record-audio' component={RecordAudio}/>
      <Route path='dashboard' component={Dashboard}/>
      <Route path='my-stories' component={MyStories}/>
      <Route path='story/:userId/:storyId' component={ViewStory}/>
    </Route>

  </Route>
);
