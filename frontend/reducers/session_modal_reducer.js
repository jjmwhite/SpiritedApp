import { OPEN_SESSION_MODAL, CLOSE_SESSION_MODAL } from '../actions/session_modal_actions';

const sessionModalReducer = (state = null, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case OPEN_SESSION_MODAL:
      newState = action.sessionModal;
      return newState;
    case CLOSE_SESSION_MODAL:
      newState = null
      return newState;
    default:
      return state;
  };
};

export default sessionModalReducer;