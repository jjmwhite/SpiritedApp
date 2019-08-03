import { RECEIVE_ALL_BOTTLES } from '../actions/bottle_actions';
import { merge } from 'lodash';

const regionsReducer = (state = {}, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_ALL_BOTTLES:
      newState = merge({}, ...action.payload.regions)
      return newState;
    default:
      return state;
  }
}

export default regionsReducer;