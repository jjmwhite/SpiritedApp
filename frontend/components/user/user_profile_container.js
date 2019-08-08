import { connect } from 'react-redux';
import UserProfile from './user_profile';
import { fetchUserProfile } from '../../actions/user_actions';
import { merge } from 'lodash';

const msp = (state, ownProps) => {
  const userId = ownProps.match.params.userId;
  const currentUser = state.entities.users[userId];
  const bottles = state.entities.bottles
  const distilleries = state.entities.distilleries;
  const regions = state.entities.regions;
  const ratings = {};
  Object.values(state.entities.ratings).map( rating => {
    if (rating.user_id === currentUser.id) merge(ratings, { [rating.id]: rating })
  })

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