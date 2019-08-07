import { connect } from 'react-redux';
import RatingForm from './rating_form';
import { fetchBottleRating, updateRating, removeRating } from '../../actions/rating_actions';

const msp = (state, ownProps) => {
  debugger
  return ({
    bottleId: ownProps.bottleId,
    formType: 'Edit Rating',
    rating: ownProps.rating
  })
}

const mdp = dispatch => {
  return ({
    fetchBottleRating: (bottleId, ratingId) => dispatch(fetchBottleRating(bottleId, ratingId)),
    formAction: (bottleId, rating) => dispatch(updateRating(bottleId, rating)),
    removeRating: (bottleId, ratingId) => dispatch(removeRating(bottleId, ratingId))
  })
}

export default connect(msp, mdp)(RatingForm);