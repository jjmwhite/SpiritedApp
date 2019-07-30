import GreetingBar from './greeting_bar';
import { logout } from '../../actions/session_actions';
import { connect } from 'react-redux';

const msp = state => {
  if (state.session.currentUser === null) {
    return { currentUser: null }
  } else {
    return { currentUser: state.entities.users[state.session.currentUser] }
  }
}

const mdp = dispatch => {
  return ({
    logout: () => dispatch(logout())
  })
}

export default connect(msp, mdp)(GreetingBar);