import GreetingBar from './greeting_bar';
import { connect } from 'react-redux';
import { logout } from '../../actions/session_actions';
import { openSessionModal } from '../../actions/session_modal_actions';

const msp = state => {
  if (state.session.currentUserId === null) {
    return { currentUser: null }
  } else {
    return { currentUser: state.entities.users[state.session.currentUserId] }
  };
};

const mdp = dispatch => {
  return ({
    openSessionModal: (type) => dispatch(openSessionModal(type)),
    logout: () => dispatch(logout())
  });
};

export default connect(msp, mdp)(GreetingBar);