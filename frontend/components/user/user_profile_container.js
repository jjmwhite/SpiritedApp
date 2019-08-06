import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchUserProfile } from '../../actions/user_actions';

const msp = (state, ownProps) => {
  const userId = ownProps.match.params.userId;
  const currentUser = state.entities.users[userId];

  const bottles = [];
  Object.values(state.entities.bottles).map( bottle => {
    if (bottle.user_id === currentUser.id) bottles.push(bottle);
  })
  
  const distilleries = Object.values(state.entities.distilleries);
  const regions = state.entities.regions;
  const ratings = Object.values(state.entities.ratings);
  return({
    currentUser,
    bottles,
    distilleries,
    regions,
    ratings
  })
}

const mdp = dispatch => {
  return({
    fetchUserProfile: (id) => dispatch(fetchUserProfile(id))
  })
}

export default connect(msp, mdp)(UserProfile)