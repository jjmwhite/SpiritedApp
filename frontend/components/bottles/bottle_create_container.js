import { connect } from 'react-redux';
import BottleForm from './bottle_form';
import { createBottle, clearBottleErrors } from '../../actions/bottle_actions';
import { closeBottleModal } from '../../actions/bottle_modal_actions';

const msp = state => {
  return({
    formType: 'Add a New Bottle',
    bottle: {
      name: '',
      description: '',
      distillery: '',
      age: 0,
      release_year: 0,
      price: 0
    },
    distilleries: state.entities.distilleries,
    errors: state.errors.bottles || [],
  })
}

const mdp = dispatch => {
  return({
    formAction: (bottle) => dispatch(createBottle(bottle)),
    clearBottleErrors: () => dispatch(clearBottleErrors()),
    closeBottleModal: () => dispatch(closeBottleModal())
  })
}

export default connect(msp, mdp)(BottleForm)