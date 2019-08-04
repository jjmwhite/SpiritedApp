import { connect } from 'react-redux';
import BetterBottleForm from './better_bottle_form';
import { createBottle, clearBottleErrors } from '../../actions/bottle_actions';
import { fetchDistilleries } from '../../actions/distillery_actions';

const msp = state => {
  const distilleries = Object.values(state.entities.distilleries);
  return ({
    formType: 'Add a New Bottle',
    name: '',
    description: '',
    distillery_id: '',
    age: '',
    release_year: '',
    price: '',
    distilleries,
    errors: state.errors.bottles || [],
  })
}

const mdp = dispatch => {
  return ({
    fetchDistilleries: () => dispatch(fetchDistilleries()),
    formAction: (bottle) => dispatch(createBottle(bottle)),
    clearBottleErrors: () => dispatch(clearBottleErrors()),
  })
}

export default connect(msp, mdp)(BetterBottleForm)