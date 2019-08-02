import { RECEIVE_ALL_DISTILLERIES, RECEIVE_DISTILLERY } from '../actions/distillery_actions';
import { merge } from 'lodash';

const distilleriesReducer = (state = {}, action) => {
  const prevState = Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_DISTILLERIES:
      newState = merge({}, action.distilleries)
      return newState;
    case RECEIVE_DISTILLERY:
      newState = merge({}, prevState, { [action.distillery.id]: action.distillery })
    default:
      return state;
  }
}

export default distilleriesReducer;