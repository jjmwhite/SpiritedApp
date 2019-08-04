import { connect } from 'react-redux';
import BetterBottleForm from './better_bottle_form';
import { fetchBottle, updateBottle, removeBottle, clearBottleErrors } from '../../actions/bottle_actions';

const msp = (state, ownProps) => {
  debugger
  const bottleId = ownProps.match.params.bottleId;
  const bottle = state.entities.bottles[bottleId] || {} ;
  const distilleries = Object.values(state.entities.distilleries) || [];
  debugger

  return ({
    formType: 'Edit This Bottle',
    name: bottle.name,
    description: bottle.description,
    distillery_id: bottle.distillery_id,
    age: bottle.age,
    release_year: bottle.release_year,
    price: bottle.price,
    bottleId,
    distilleries,
    errors: state.errors.bottles || []
  })
}

const mdp = dispatch => {
  debugger
  return ({
    fetchBottle: (id) => dispatch(fetchBottle(id)),
    formAction: (bottle, id) => dispatch(updateBottle(bottle, id)),
    removeBottle: (id) => dispatch(removeBottle(id)),
    clearBottleErrors: () => dispatch(clearBottleErrors()),
  })
}

export default connect(msp, mdp)(BetterBottleForm)