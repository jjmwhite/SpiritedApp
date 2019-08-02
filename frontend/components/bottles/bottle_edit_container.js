import { connect } from 'react-redux';
import BottleForm from './bottle_form';
import { updateBottle, clearBottleErrors } from '../../actions/bottle_actions';
import { closeBottleModal } from '../../actions/bottle_modal_actions';

const msp = (state, ownProps) => {
  const bottleId = ownProps.match.params.bottleId;
  const bottle = this.state.bottles[bottleId];
  const distilleries = Object.values(state.entities.distilleries);
  
  debugger
  return ({
    formType: 'Edit This Bottle',
    bottle,
    distilleries,
    errors: state.errors.bottles || []
  })
}

const mdp = dispatch => {
  return ({
    formAction: (bottle) => dispatch(updateBottle(bottle)),
    clearBottleErrors: () => dispatch(clearBottleErrors()),
    closeBottleModal: () => dispatch(closeBottleModal())
  })
}

export default connect(msp, mdp)(BottleForm)