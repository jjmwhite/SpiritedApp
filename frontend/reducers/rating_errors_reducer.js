import { RECEIVE_RATING, RECEIVE_RATING_ERRORS, CLEAR_RATING_ERRORS  } from '../actions/rating_actions';

const ratingErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_RATING_ERRORS:
      debugger
      newState = action.errors;
      return newState;
    case RECEIVE_RATING:
    case CLEAR_RATING_ERRORS:
      newState = [];
      return newState;
    default:
        return state;
  }
}

export default ratingErrorsReducer;