import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, login, clearSessionErrors } from '../../actions/session_actions';
import { openSessionModal, closeSessionModal } from '../../actions/session_modal_actions';

const msp = state => {
  return ({
    formType: 'signup',
    otherForm: 'login',
    user: { 
      email: '',
      password: '',
      first_name: '',
      last_name: ''
    },
    errors: state.errors.session || []
  });
};

const mdp = dispatch => {
  return ({
    formAction: (userForm) => dispatch(signup(userForm)),
    demoAction: (userForm) => dispatch(login(userForm)),
    closeSessionModal: () => dispatch(closeSessionModal()),
    changeForm: (
      <button onClick={() => dispatch(openSessionModal('login'))}>Login</button>
    ),
    clearSessionErrors: () => dispatch(clearSessionErrors())
  });
};

export default connect(msp, mdp)(SessionForm);