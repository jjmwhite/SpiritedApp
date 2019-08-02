import { connect } from 'react-redux';
import BottleForm from './bottle_form';
import { createBottle, clearBottleErrors } from '../../actions/bottle_actions';
import { closeBottleModal } from '../../actions/bottle_modal_actions';

const msp = state => {
  const distilleries = Object.values(state.entities.distilleries);
  return({
    formType: 'Add a New Bottle',
    bottle: {
      name: '',
      description: '',
      distillery_id: 0,
      age: 0,
      release_year: 0,
      price: 0
    },
    distilleries,
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