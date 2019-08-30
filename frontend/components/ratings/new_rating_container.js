import { connect } from 'react-redux';
import NewRatingForm from './new_rating_form';
import { createRating, clearRatingErrors } from '../../actions/rating_actions';
import { openSessionModal } from '../../actions/session_modal_actions';

const msp = (state, ownProps) => {
  return({
    bottleId: ownProps.bottleId,
    rating: {
      rating: 0,
      review: ''
    },
    errors: state.errors.ratings || [],
    loggedIn: Boolean(state.session.currentUserId)
  });
};

const mdp = dispatch => {
  return({
    createRating: (rating, bottleId) => dispatch(createRating(rating, bottleId)),
    clearRatingErrors: () => dispatch(clearRatingErrors()),
    openSessionModal: (type) => dispatch(openSessionModal(type))
  });
};

export default connect(msp, mdp)(NewRatingForm);