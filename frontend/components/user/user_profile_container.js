import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchUserProfile } from '../../actions/user_actions';

const msp = (state, ownProps) => {
  // debugger
  const userId = ownProps.match.params.userId;
  const user = state.entities.users[userId];
  const bottles = state.entities.bottles;
  const distilleries = state.entities.distilleries;
  const regions = state.entities.regions;
  debugger
  return({
    user,
    bottles,
    distilleries,
    regions
  })
}

const mdp = dispatch => {
  return({
    fetchUserProfile: (id) => dispatch(fetchUserProfile(id))
  })
}

export default connect(msp, mdp)(UserProfile)