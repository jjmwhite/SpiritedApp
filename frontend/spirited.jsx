import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionApiUtil from './util/session_api_util';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root')
  const store = configureStore();
  
  // TESTING //

  window.login = SessionApiUtil.login;
  window.signup = SessionApiUtil.signup;
  window.logout = SessionApiUtil.logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  /////////////

  ReactDOM.render(<Root store={store} />, root)
})