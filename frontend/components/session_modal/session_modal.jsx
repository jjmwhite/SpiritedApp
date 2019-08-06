import React from 'react';
import { connect } from 'react-redux';
import { closeSessionModal } from '../../actions/session_modal_actions'
import LoginFormContainer from '../session_form/login_form_container';
import CreateFormContainer from '../session_form/create_form_container';

const msp = state => {
  return ({
    sessionModal: state.ui.sessionModal
  })
}

const mdp = dispatch => {
  return ({
    closeSessionModal: () => dispatch(closeSessionModal())
  })
}

const SessionModal = ({ sessionModal, closeSessionModal }) => {
  if (!sessionModal) return null;

  let component;
  switch (sessionModal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <CreateFormContainer />;
      break;
    default:
      return null;
  }

  return (
      <div className='modal-background' onClick={() => closeSessionModal()}>
        <div className='modal-window' onClick={(e) => e.stopPropagation()}>
        <img onClick={() => closeSessionModal()} src={cancel} alt="Cancel" />
          {component}
        </div>
      </div>
  )

}

export default connect(msp, mdp)(SessionModal)