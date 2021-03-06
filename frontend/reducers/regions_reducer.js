import { RECEIVE_ALL_BOTTLES, RECEIVE_BOTTLE } from '../actions/bottle_actions';
import { merge } from 'lodash';
import { RECEIVE_USER_PROFILE } from '../actions/user_actions';
import { RECEIVE_DISTILLERY } from '../actions/distillery_actions';

const regionsReducer = (state = {}, action) => {
  const prevState = Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_BOTTLES:
      newState = merge({}, ...action.payload.regions);
      return newState;
    case RECEIVE_BOTTLE:
      newState = merge({}, prevState, { [action.payload.region.id]: action.payload.region });
      return newState;
    case RECEIVE_USER_PROFILE:
      newState = merge({}, prevState, action.payload.regions);
      return newState;
    case RECEIVE_DISTILLERY:
      newState = merge({}, prevState, action.payload.region);
      return newState;
    default:
      return state;
  };
};

export default regionsReducer;