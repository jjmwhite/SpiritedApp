import { combineReducers } from 'redux';
import sessionErrorsReducer from './session_errors_reducer';
import bottleErrorsReducer from './bottle_errors_reducer';
import ratingErrorsReducer from './rating_errors_reducer';

export default combineReducers({
  session: sessionErrorsReducer,
  bottles: bottleErrorsReducer,
  ratings: ratingErrorsReducer,
})