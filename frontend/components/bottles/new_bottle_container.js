import { connect } from 'react-redux';
import BetterBottleForm from './better_bottle_form';
import { createBottle, clearBottleErrors } from '../../actions/bottle_actions';

const msp = state => {
  const distilleries = Object.values(state.entities.distilleries);
  return ({
    formType: 'Add a New Bottle',
    bottle: {
      name: '',
      description: '',
      distillery_id: undefined,
      age: undefined,
      release_year: undefined,
      price: undefined,
    },
    distilleries,
    errors: state.errors.bottles || [],
  })
}

const mdp = dispatch => {
  return ({
    formAction: (bottle) => dispatch(createBottle(bottle)),
    clearBottleErrors: () => dispatch(clearBottleErrors()),
  })
}

export default connect(msp, mdp)(BetterBottleForm)