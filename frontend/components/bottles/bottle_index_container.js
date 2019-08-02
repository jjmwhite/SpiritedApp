import { connect } from 'react-redux';
import BottleIndex from './bottle_index';
import { fetchBottle, fetchBottles } from '../../actions/bottle_actions';
import { openBottleModal } from '../../actions/bottle_modal_actions';

const msp = state => {
  debugger
  const bottles = Object.values(state.entities.bottles);
  return({
    bottles,
  })
}

const mdp = dispatch => {
  // debugger
  return({
    fetchBottles: () => dispatch(fetchBottles()),
    fetchBottle: (id) => dispatch(fetchBottle(id)),
    openBottleModal: (type) => dispatch(openBottleModal(type))
  })
}

export default connect(msp, mdp)(BottleIndex);