import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS, CLEAR_SESSION_ERRORS } from '../actions/session_actions';
import { merge } from 'lodash';

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      newState = merge([], action.errors);
      return newState;
    case RECEIVE_CURRENT_USER:
    case CLEAR_SESSION_ERRORS:
      newState = [];
      return newState;
    default:
      return state;
  }
}

export default sessionErrorsReducer;