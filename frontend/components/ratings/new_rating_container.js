import { connect } from 'react-redux';
import NewRatingForm from './new_rating_form';
import { createRating, clearRatingErrors } from '../../actions/rating_actions';

const msp = (state, ownProps) => {
  return({
    bottleId: ownProps.bottleId,
    rating: {
      rating: 0,
      review: ''
    },
    errors: state.errors.ratings || []
  })
}

const mdp = dispatch => {
  return({
    createRating: (rating, bottleId) => dispatch(createRating(rating, bottleId)),
    clearRatingErrors: () => dispatch(clearRatingErrors())
  })
}

export default connect(msp, mdp)(NewRatingForm);