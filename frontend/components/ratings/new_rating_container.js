import { connect } from 'react-redux';
import RatingForm from './rating_form';
import { createRating } from '../../actions/rating_actions';

const msp = (state, ownProps) => {
  debugger
  return({
    bottleId: ownProps.bottleId,
    formType: 'Add Rating',
    rating: {
      rating: 0,
      review: ''
    }
  })
}

const mdp = dispatch => {
  return({
    formAction: (rating) => dispatch(createRating(rating))
  })
}

export default connect(msp, mdp)(RatingForm);