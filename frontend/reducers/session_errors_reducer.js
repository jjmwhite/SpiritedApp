import { RECEIVE_CURRENT_USER, RECEIVE_SESSION_ERRORS } from '../actions/session_actions';
import { merge } from 'lodash';

const sessionErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState;
  debugger
  switch (action.type) {
    case RECEIVE_SESSION_ERRORS:
      newState = merge([], action.errors);
      return newState;
    case RECEIVE_CURRENT_USER:
      newState = [];
      return newState;
    default:
      return state;
  }
}

export default sessionErrorsReducer;