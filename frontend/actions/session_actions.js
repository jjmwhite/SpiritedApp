import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';
export const CLEAR_SESSION_ERRORS = 'CLEAR_SESSION_ERRORS';

export const receiveCurrentUser = payload => {
  return ({
    type: RECEIVE_CURRENT_USER,
    payload
  });
};

export const logoutCurrentUser = () => {
  return ({
    type: LOGOUT_CURRENT_USER,
  });
};

export const receiveSessionErrors = errors => {
  return ({
    type: RECEIVE_SESSION_ERRORS,
    errors: errors.responseJSON
  });
};

export const clearSessionErrors = () => {
  return ({
    type: CLEAR_SESSION_ERRORS,
  });
};

export const signup = user => dispatch => {
  return SessionApiUtil.signup(user)
                       .then( (user) => dispatch(receiveCurrentUser(user)))
                       .fail((errors) => dispatch(receiveSessionErrors(errors)));
};

export const login = user => dispatch => {
  return SessionApiUtil.login(user)
                       .then( (user) => dispatch(receiveCurrentUser(user)))
                       .fail((errors) => dispatch(receiveSessionErrors(errors)));
};

export const logout = () => dispatch => {
  return SessionApiUtil.logout()
                       .then( () => dispatch(logoutCurrentUser()) );
};