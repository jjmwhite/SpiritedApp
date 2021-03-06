import { RECEIVE_BOTTLE, RECEIVE_BOTTLE_ERRORS, CLEAR_BOTTLE_ERRORS } from '../actions/bottle_actions';

const bottleErrorsReducer = (state = [], action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_BOTTLE_ERRORS:
      newState = action.errors;
      return newState;
    case RECEIVE_BOTTLE:
    case CLEAR_BOTTLE_ERRORS:
      newState = [];
      return newState;
    default:
      return state;
  };
};

export default bottleErrorsReducer;