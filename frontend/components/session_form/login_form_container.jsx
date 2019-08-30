import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, clearSessionErrors } from '../../actions/session_actions';
import { openSessionModal, closeSessionModal } from '../../actions/session_modal_actions';

const msp = state => {
  return ({
    formType: 'login',
    otherForm: 'signup',
    user: {
      email: '',
      password: '',
    },
    errors: state.errors.session || []
  });
};

const mdp = dispatch => {
  return ({
    formAction: (userForm) => dispatch(login(userForm)),
    demoAction: (userForm) => dispatch(login(userForm)),
    closeSessionModal: () => dispatch(closeSessionModal()),
    changeForm: (
      <button onClick={() => dispatch(openSessionModal('signup'))}>Join Spirited</button>
    ),
    clearSessionErrors: () => dispatch(clearSessionErrors())
  });
};

export default connect(msp, mdp)(SessionForm);