import { connect } from 'react-redux';
import UpdateRatingForm from './update_rating_form';
import { fetchBottleRating, updateRating, removeRating, clearRatingErrors} from '../../actions/rating_actions';

const msp = (state, ownProps) => {
  return ({
    rating: ownProps.rating,
    errors: state.errors.ratings || [],
    currentUser: state.session.currentUserId || ''
  })
}

const mdp = dispatch => {
  return ({
    fetchBottleRating: (bottleId, ratingId) => dispatch(fetchBottleRating(bottleId, ratingId)),
    updateRating: (bottleId, rating) => dispatch(updateRating(bottleId, rating)),
    removeRating: (bottleId, ratingId) => dispatch(removeRating(bottleId, ratingId)),
    clearRatingErrors: () => dispatch(clearRatingErrors())
  })
}

export default connect(msp, mdp)(UpdateRatingForm);