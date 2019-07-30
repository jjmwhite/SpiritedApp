import React from 'react';
import { connect } from 'react-redux';
import SessionForm from './session_form';
import { signup } from '../../actions/session_actions'
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = state => {
  return ({
    formType: 'signup',
    user: { 
      email: '',
      password: '',
      first_name: '',
      last_name: ''
    }
  })
}

const mdp = dispatch => {
  return ({
    signup: (userForm) => dispatch(signup(userForm)),
    otherForm: (
      <button onClick={() => dispatch(openModal('login'))}>Login</button>
    ),
    closeModal: () => dispatch(closeModal())
  })
}

export default connect(msp, mdp)(SessionForm);