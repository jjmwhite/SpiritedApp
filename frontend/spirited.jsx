import React from 'react';
import ReactDOM from 'react-dom';
import * as searchUtil from './util/search_api_util';
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
  
  window.getState = store.getState;
  window.dispatch = store.dispatch;

  window.executeSearch = searchUtil.executeSearch;

  /////////////

  document.body.addEventListener('keyup', (e) => {
    if (e.which === 9) {
      document.documentElement.classList.remove('no-focus-outline')
    }
  })

  ReactDOM.render(<Root store={store} />, root)
})