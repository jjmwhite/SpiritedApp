import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { openSessionModal } from '../../actions/session_modal_actions';

const msp = state => {
  return ({
    loggedIn: Boolean(state.session.currentUserId)
  });
};

const mdp = dispatch => {
  return ({
    openSessionModal: (type) => dispatch(openSessionModal(type))
  });
};

const CreateBottleButton = ({ loggedIn, openSessionModal }) => {
  let createBottleButton;
  if (loggedIn) {
    createBottleButton = <Link to='/bottles/create'><button className='index-bottle-create-button'>Create Bottle</button></Link>
  } else {
    createBottleButton = <button className='index-bottle-create-button' onClick={() => openSessionModal('login')}>Create Bottle</button>
  };

  return(
    <>
      {createBottleButton}
    </>
  )
};

export default connect(msp, mdp)(CreateBottleButton);