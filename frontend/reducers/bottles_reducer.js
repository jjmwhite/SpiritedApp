import { RECEIVE_ALL_BOTTLES, RECEIVE_BOTTLE, REMOVE_BOTTLE } from '../actions/bottle_actions';
import { merge } from 'lodash';
import { RECEIVE_USER_PROFILE } from '../actions/user_actions';

const bottlesReducer = (state = {}, action) => {
  const prevState = Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_BOTTLES:
      debugger
      newState = merge({}, ...action.payload.bottles);
      return newState;
    case RECEIVE_BOTTLE:
      newState = merge({}, prevState, { [action.payload.bottle.id]: action.payload.bottle });
      return newState;
    case REMOVE_BOTTLE:
      newState = merge({}, prevState);
      delete newState[action.bottleId];
      return newState;
    case RECEIVE_USER_PROFILE:
      debugger
      newState = merge([], action.payload.bottles);
    default:
      return state;
  }
}

export default bottlesReducer;