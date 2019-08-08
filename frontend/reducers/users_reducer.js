import { RECEIVE_CURRENT_USER } from '../actions/session_actions';
import { merge } from 'lodash';
import { RECEIVE_USER_PROFILE } from '../actions/user_actions';
import { RECEIVE_BOTTLE } from '../actions/bottle_actions';

const usersReducer = (state = {}, action) => {
  const prevState = Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_CURRENT_USER:
      debugger
      newState = merge({}, prevState, { [action.payload.user.id]: action.payload.user });
      return newState;
    case RECEIVE_USER_PROFILE:
      newState = merge({}, prevState, action.payload.users)
    case RECEIVE_BOTTLE:
      newState = merge({}, prevState, action.payload.users)
      return newState;
    default:
      return state;
  }
}

export default usersReducer;