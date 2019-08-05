import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchUserProfile } from '../../actions/user_actions';

const msp = (state, ownProps) => {
  debugger
  const userId = ownProps.match.params.userId;
  const bottles = state.entities.bottles;
  return({
    user: state.entities.users[userId],
    bottles
  })
}

const mdp = dispatch => {
  return({
    fetchUserProfile: (id) => dispatch(fetchUserProfile(id))
  })
}

export default connect(msp, mdp)(UserProfile)