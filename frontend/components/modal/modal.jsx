import React from 'react';
import { connect } from 'react-redux';
import { closeModal } from '../../actions/modal_actions'
import LoginFormContainer from '../session_form/login_form_container';
import CreateFormContainer from '../session_form/create_form_container';

const msp = state => {
  return ({
    modal: state.ui.modal
  })
}

const mdp = dispatch => {
  return ({
    closeModal: () => dispatch(closeModal())
  })
}

const Modal = ({ modal, closeModal }) => {
  if (!modal) return null;

  let component;
  switch (modal) {
    case 'login':
      component = <LoginFormContainer />;
      // return component;
      break;
    case 'signup':
      component = <CreateFormContainer />;
      // return component;
      break;
    default:
      return null;
  }

  return (
      <div className='modal-background' onClick={() => closeModal()}>
        <div className='modal-window' onClick={(e) => e.stopPropagation()}>
          {component}
        </div>
      </div>
  )

}



export default connect(msp, mdp)(Modal)