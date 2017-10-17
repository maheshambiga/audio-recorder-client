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

export const routes = (
  <Route path="/" component={App}>
    <Redirect from="/" to="home" />
    <Route path="login" component={LoginPage}/>
    <Route path="register" component={RegisterUser}/>
    <Route path="home" component={HomePage}/>
    <Route path="learn-more" component={LeanMore}/>
    <Route component={EnsureLoggedInContainer}>
      <Route path='record-audio' component={RecordAudio}/>
      <Route path='dashboard' component={Dashboard}/>
      <Route path='my-stories' component={MyStories}/>
      <Route path='story/:userId/:storyId' component={ViewStory}/>
    </Route>

  </Route>
);
