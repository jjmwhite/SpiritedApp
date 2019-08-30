import { combineReducers } from 'redux';
import sessionModalReducer from './session_modal_reducer';
import searchReducer from './search_reducer';

export default combineReducers({
  sessionModal: sessionModalReducer,
  search: searchReducer,
});