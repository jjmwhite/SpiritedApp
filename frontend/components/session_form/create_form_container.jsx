import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup, login, clearSessionErrors } from '../../actions/session_actions'
import { openModal, closeModal } from '../../actions/modal_actions';

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
  })
}

const mdp = dispatch => {
  return ({
    formAction: (userForm) => dispatch(signup(userForm)),
    demoAction: (userForm) => dispatch(login(userForm)),
    closeModal: () => dispatch(closeModal()),
    changeForm: (
      <button onClick={() => dispatch(openModal('login'))}>Login</button>
    ),
    clearSessionErrors: () => dispatch(clearSessionErrors())
  })
}

export default connect(msp, mdp)(SessionForm);