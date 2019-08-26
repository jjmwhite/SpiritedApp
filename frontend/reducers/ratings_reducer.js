import { RECEIVE_BOTTLE, RECEIVE_ALL_BOTTLES } from '../actions/bottle_actions';
import { RECEIVE_USER_PROFILE } from '../actions/user_actions';
import { RECEIVE_RATING, RECEIVE_RATINGS, REMOVE_RATING } from '../actions/rating_actions';
import { merge } from 'lodash';

const ratingsReducer = (state = {}, action) => {
  const prevState = Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_BOTTLE:
    case RECEIVE_USER_PROFILE:
    case RECEIVE_RATINGS:
      newState = merge({}, prevState, action.payload.ratings);
      return newState;
    case RECEIVE_RATING:
      newState = merge({}, prevState, { [action.rating.id]: action.rating });
      return newState;
    case REMOVE_RATING:
      newState = merge({}, prevState);
      delete newState[action.ratingId];
      return newState;
    default:
      return state;
  }
}

export default ratingsReducer;