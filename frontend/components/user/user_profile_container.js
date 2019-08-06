import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchUserProfile } from '../../actions/user_actions';

const msp = (state, ownProps) => {
  const userId = ownProps.match.params.userId;
  const user = state.entities.users[userId];

  const bottles = [];
  Object.values(state.entities.bottles).map( bottle => {
    if (bottle.user_id === user.id) bottles.push(bottle);
  })
  
  const distilleries = Object.values(state.entities.distilleries);
  const regions = state.entities.regions;
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