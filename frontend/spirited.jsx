import React from 'react';
import ReactDOM from 'react-dom';
// import * as SessionApiUtil from './util/session_api_util';
import * as sessionActions from './actions/session_actions';
import configureStore from './store/store';
import Root from './components/root';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root')

  let store;
  
  if (window.currentUser) {
    const preloadedState = {
      entities: { 
        users: { [window.currentUser.id]: window.currentUser }
      },
      session: { currentUserId: window.currentUser.id }
    }
    store = configureStore(preloadedState);
  } else {
    store = configureStore();
  }

  // TESTING //

  window.login = sessionActions.login;
  window.signup = sessionActions.signup;
  window.logout = sessionActions.logout;
  window.getState = store.getState;
  window.dispatch = store.dispatch;
  // window.currentUser = store.session.currentUser

  /////////////

  ReactDOM.render(<Root store={store} />, root)
})