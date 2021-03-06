import { RECEIVE_CURRENT_USER, LOGOUT_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';

const _nullSession = { currentUserId: null };

const sessionReducer = (state = _nullSession, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      newState = merge({}, { currentUserId: action.payload.user.id })
      return newState;
    case LOGOUT_CURRENT_USER:
      newState = _nullSession;
      return newState;
    default:
      return state;
  };
};

export default sessionReducer;