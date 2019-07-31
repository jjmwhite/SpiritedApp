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
    formAction: (userForm) => dispatch(login(userForm)),
    closeModal: () => dispatch(closeModal()),
    changeForm: (
      <button onClick={() => dispatch(openModal('signup'))}>Join Spirited</button>
    )
  })
}

export default connect(msp, mdp)(SessionForm);