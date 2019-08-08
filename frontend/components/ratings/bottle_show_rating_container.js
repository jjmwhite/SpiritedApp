import { connect } from 'react-redux';
import BottleShowRating from './bottle_show_rating';
import { fetchBottleRating } from '../../actions/rating_actions';

const msp = (state, ownProps) => {
  return ({
    rating: ownProps.rating,
    users: ownProps.users,
    currentUser: state.session.currentUserId,
  })
}

const mdp = dispatch => {
  return ({
    fetchBottleRating: (bottleId, ratingId) => dispatch(fetchBottleRating(bottleId, ratingId))
  })
}

export default connect(msp, mdp)(BottleShowRating);