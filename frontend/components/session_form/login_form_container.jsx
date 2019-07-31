import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login, clearSessionErrors } from '../../actions/session_actions'
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = state => {
  return ({
    formType: 'login',
    otherForm: 'signup',
    user: {
      email: '',
      password: '',
    },
    errors: state.errors.session || []
  })
}

const mdp = dispatch => {
  return ({
    formAction: (userForm) => dispatch(login(userForm)),
    demoAction: (userForm) => dispatch(login(userForm)),
    closeModal: () => dispatch(closeModal()),
    changeForm: (
      <button onClick={() => dispatch(openModal('signup'))}>Join Spirited</button>
    ),
    clearSessionErrors: () => dispatch(clearSessionErrors())
  })
}

export default connect(msp, mdp)(SessionForm);