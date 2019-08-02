import { connect } from 'react-redux';
import BottleForm from './bottle_form';
import { createBottle, clearBottleErrors } from '../../actions/bottle_actions';


const msp = state => {
  return({
    formType: 'createBottle',
    bottle: {
      name: '',
      description: '',
      distillery: '',
      age: 0,
      release_year: 0,
      price: 0
    },
    errors: state.errors.bottles || []
  })
}

const mdp = dispatch => {
  return({
    createBottle: (bottle) => dispatch(createBottle(bottle)),
    clearBottleErrors: () => dispatch(clearBottleErrors())
  })
}

export default connect(msp, mdp)(BottleForm)