import React from 'react';
import ReactDOM from 'react-dom';
import * as SessionApiUtil from './util/session_api_util';

document.addEventListener('DOMContentLoaded', () => {
  const root = document.getElementById('root')

  // TESTING //

  window.login = SessionApiUtil.login 
  window.signup = SessionApiUtil.signup
  window.logout = SessionApiUtil.logout

  /////////////

  ReactDOM.render(<h2>Spirited</h2>, root)
})