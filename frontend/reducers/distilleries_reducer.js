import { RECEIVE_ALL_DISTILLERIES, RECEIVE_DISTILLERY } from '../actions/distillery_actions';
import { RECEIVE_ALL_BOTTLES, RECEIVE_BOTTLE } from '../actions/bottle_actions';
import { merge } from 'lodash';
import { RECEIVE_USER_PROFILE } from '../actions/user_actions';

const distilleriesReducer = (state = {}, action) => {
  const prevState = Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_DISTILLERIES:
      newState = merge({}, ...action.payload.distilleries);
      return newState;
    case RECEIVE_DISTILLERY:
      newState = merge({}, prevState, { [action.payload.distillery.id]: action.payload.distillery });
      return newState;
    case RECEIVE_ALL_BOTTLES:
      newState = merge({}, ...action.payload.distilleries);
      return newState;
    case RECEIVE_BOTTLE:
      newState = merge({}, prevState, {[action.payload.distillery.id]: action.payload.distillery });
      return newState;
    case RECEIVE_USER_PROFILE:
      newState = merge({}, prevState, action.payload.distilleries)
      return newState;
    default:
      return state;
  };
};

export default distilleriesReducer;