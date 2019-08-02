import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import bottlesReducer from './bottles_reducer';
import distilleriesReducer from './distilleries_reducer';

export default combineReducers({
  users: usersReducer,
  bottles: bottlesReducer,
  distilleries: distilleriesReducer,
});