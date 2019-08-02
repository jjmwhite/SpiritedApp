import React from 'react';
import { connect } from 'react-redux';
import { closeBottleModal } from '../../actions/bottle_modal_actions';
import BottleCreateContainer from './bottle_create_container';
import BottleEditContainer from './bottle_edit_container';

const msp = state => {
  return ({
    bottleModal: state.ui.bottleModal
  })
}

const mdp = dispatch => {
  return({
    closeBottleModal: () => dispatch(closeBottleModal())
  })
}

const BottleModal = ({ bottleModal, closeBottleModal }) => {
  if (!bottleModal) return null;

  let component;
  switch (bottleModal) {
    case 'createBottle':
      component = <BottleCreateContainer />;
      break;
    case 'updateBottle':
      component = <BottleEditContainer />;
      break;
    default:
      return null;
  }

  return (
    <div className='modal-background' onClick={() => closeBottleModal()}>
      <div className='bottle-modal-window' onClick={(e) => e.stopPropagation()}>
        {component}
      </div>
    </div>
  )
}

export default connect(msp, mdp)(BottleModal);