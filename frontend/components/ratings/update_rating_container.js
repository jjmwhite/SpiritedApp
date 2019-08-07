import { connect } from 'react-redux';
import UpdateRatingForm from './update_rating_form';
import { updateRating, removeRating, clearRatingErrors} from '../../actions/rating_actions';

const msp = (state, ownProps) => {
  debugger
  return ({
    rating: ownProps.rating,
    errors: state.errors.ratings || []
  })
}

const mdp = dispatch => {
  return ({
    updateRating: (bottleId, rating) => dispatch(updateRating(bottleId, rating)),
    removeRating: (bottleId, ratingId) => dispatch(removeRating(bottleId, ratingId)),
    clearRatingErrors: () => dispatch(clearRatingErrors())
  })
}

export default connect(msp, mdp)(UpdateRatingForm);