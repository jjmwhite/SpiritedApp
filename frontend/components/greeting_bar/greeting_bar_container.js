import GreetingBar from './greeting_bar';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openModal, closeModal } from '../../actions/modal_actions';

const msp = state => {
  if (state.session.currentUser === null) {
    return { currentUser: null }
  } else {
    return { currentUser: state.entities.users[state.session.currentUser] }
  }
}

const mdp = dispatch => {
  return ({
    openModal: (type) => dispatch(openModal(type)),
    logout: () => dispatch(logout())
  })
}

export default connect(msp, mdp)(GreetingBar);