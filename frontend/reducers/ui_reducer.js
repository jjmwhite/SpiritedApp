import { combineReducers } from 'redux';
import sessionModalReducer from './session_modal_reducer';
import bottleModalReducer from './bottle_modal_reducer';

export default combineReducers({
  sessionModal: sessionModalReducer,
  bottleModal: bottleModalReducer
})