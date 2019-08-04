import { connect } from 'react-redux';
import BetterBottleForm from './better_bottle_form';
import { updateBottle, removeBottle, clearBottleErrors } from '../../actions/bottle_actions';

const msp = (state, ownProps) => {
  const bottleId = ownProps.match.params.bottleId;
  const bottle = state.entities.bottles[bottleId];
  const distilleries = Object.values(state.entities.distilleries);

  // let age;
  // if (bottle.age === null) {
  //   age = undefined;
  // } else {
  //   age = bottle.age;
  // }

  // let release_year;
  // if (bottle.release_year === null) {
  //   release_year = undefined;
  // } else {
  //   release_year = bottle.release_year;
  // }

  // debugger
  return ({
    formType: 'Edit This Bottle',
    bottle,
    // bottle: {
    //   id: bottle.id,
    //   name: bottle.name,
    //   description: bottle.description,
    //   distillery_id: bottle.distillery_id,
    //   age,
    //   release_year,
    //   price: bottle.price,
    // },
    distilleries,
    errors: state.errors.bottles || []
  })
}

const mdp = dispatch => {
  return ({
    formAction: (bottle) => dispatch(updateBottle(bottle)),
    removeBottle: (id) => dispatch(removeBottle(id)),
    clearBottleErrors: () => dispatch(clearBottleErrors()),
  })
}

export default connect(msp, mdp)(BetterBottleForm)