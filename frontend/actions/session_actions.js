import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = 'RECEIVE_CURRENT_USER';
export const LOGOUT_CURRENT_USER = 'LOGOUT_CURRENT_USER';
export const RECEIVE_SESSION_ERRORS = 'RECEIVE_SESSION_ERRORS';

export const receiveCurrentUser = (user) => {
  return ({
    type: RECEIVE_CURRENT_USER,
    user
  })
}

export const logoutCurrentUser = () => {
  return ({
    type: LOGOUT_CURRENT_USER,
  })
}

export const receiveErrors = (errorsArr) => {
  return ({
    type: RECEIVE_SESSION_ERRORS,
    errors: errorsArr
  })
}

export const signup = user => dispatch => {
  return SessionApiUtil.signup(user)
                       .then( (user) => dispatch(receiveCurrentUser(user)))
}

export const login = user => dispatch => {
  return SessionApiUtil.login(user)
                       .then( (user) => dispatch(receiveCurrentUser(user)))
}

export const logout = id => dispatch => {
  return SessionApiUtil.login(id)
                       .then( () => dispatch(logoutCurrentUser()))
}