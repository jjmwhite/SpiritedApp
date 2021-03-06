import { connect } from 'react-redux';
import BottleForm from './bottle_form';
import { fetchBottle, updateBottle, removeBottle, clearBottleErrors } from '../../actions/bottle_actions';
import { fetchDistilleries } from '../../actions/distillery_actions';

const msp = (state, ownProps) => {
  const bottleId = ownProps.match.params.bottleId;
  const bottle = state.entities.bottles[bottleId] || {} ;
  const distilleries = Object.values(state.entities.distilleries) || [] ;
  return ({
    formType: 'Edit This Bottle',
    name: bottle.name,
    description: bottle.description,
    distillery_id: bottle.distillery_id,
    age: bottle.age || '',
    release_year: bottle.release_year || '',
    price: bottle.price,
    bottleId,
    distilleries,
    errors: state.errors.bottles || []
  });
};

const mdp = dispatch => {
  return ({
    fetchBottle: (id) => dispatch(fetchBottle(id)),
    formAction: (bottle, id) => dispatch(updateBottle(bottle, id)),
    removeBottle: (id) => dispatch(removeBottle(id)),
    clearBottleErrors: () => dispatch(clearBottleErrors()),
    fetchDistilleries: () => dispatch(fetchDistilleries()),
  });
};

export default connect(msp, mdp)(BottleForm);