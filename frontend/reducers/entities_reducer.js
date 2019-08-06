import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import bottlesReducer from './bottles_reducer';
import distilleriesReducer from './distilleries_reducer';
import regionsReducer from './regions_reducer';
import ratingsReducer from './ratings_reducer';

export default combineReducers({
  users: usersReducer,
  bottles: bottlesReducer,
  distilleries: distilleriesReducer,
  regions: regionsReducer,
  ratings: ratingsReducer,
});