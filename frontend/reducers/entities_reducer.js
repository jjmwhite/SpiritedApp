import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import bottlesReducer from './bottles_reducer';

export default combineReducers({
  users: usersReducer,
  bottles: bottlesReducer,
});