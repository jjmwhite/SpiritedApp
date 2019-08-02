import { OPEN_BOTTLE_MODAL, CLOSE_BOTTLE_MODAL } from '../actions/bottle_modal_actions';

const bottleModalReducer = (state = null, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case OPEN_BOTTLE_MODAL:
      newState = action.bottleModal;
      return newState;
    case CLOSE_BOTTLE_MODAL:
      newState = null
      return newState;
    default:
      return state;
  }
}

export default bottleModalReducer;