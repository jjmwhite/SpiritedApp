import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { login } from '../../actions/session_actions'
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = state => {
  return ({
    formType: 'login',
    user: {
      email: '',
      password: '',
    },
  })
}

const mdp = dispatch => {
  return ({
    login: (userForm) => dispatch(login(userForm)),
    otherForm: (
      <button onClick={() => dispatch(openModal('signup'))}>Sign Up</button>
    ),
    closeModal: () => dispatch(closeModal())
  })
}

export default connect(msp, mdp)(SessionForm);