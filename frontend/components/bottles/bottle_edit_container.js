import { connect } from 'react-redux';
import BottleForm from './bottle_form';
import { updateBottle, removeBottle, clearBottleErrors } from '../../actions/bottle_actions';
import { closeBottleModal } from '../../actions/bottle_modal_actions';
import { withRouter } from 'react-router-dom';

const msp = (state, ownProps) => {
  const bottleId = ownProps.location.pathname.split("/").reverse()[0];
  const bottle = state.entities.bottles[bottleId];
  const distilleries = Object.values(state.entities.distilleries);
  
  let age;
  if (bottle.age === null) {
    age = undefined;
  } else {
    age = bottle.age;
  }

  let release_year;
  if (bottle.release_year === null) {
    release_year = undefined;
  } else {
    release_year = bottle.release_year;
  }

  // debugger
  return ({
    formType: 'Edit This Bottle',
    bottle: {
      id: bottle.id,
      name: bottle.name,
      description: bottle.description,
      distillery_id: bottle.distillery_id,
      age,
      release_year,
      price: bottle.price,
    },
    distilleries,
    errors: state.errors.bottles || []
  })
}

const mdp = dispatch => {
  return ({
    formAction: (bottle, id) => dispatch(updateBottle(bottle, id)),
    removeBottle: (id) => dispatch(removeBottle(id)),
    clearBottleErrors: () => dispatch(clearBottleErrors()),
    closeBottleModal: () => dispatch(closeBottleModal())
  })
}

export default withRouter(connect(msp, mdp)(BottleForm))