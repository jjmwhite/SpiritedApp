import { RECEIVE_SEARCH_RESULTS, RECEIVE_SEARCH_ERRORS } from '../actions/search_actions';

const searchErrorsReducer = (state = [], action) => {
  // debugger
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SEARCH_ERRORS:
      // debugger
      return action.errors;
    case RECEIVE_SEARCH_RESULTS:
      return [];
    default:
      return state;
  }
}

export default searchErrorsReducer;