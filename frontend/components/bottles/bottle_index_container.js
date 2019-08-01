import { connect } from 'react-redux';
import BottleIndex from './bottle_index';
import { fetchBottle, fetchBottles } from '../../actions/bottle_actions';

const msp = state => {
  // debugger
  const bottles = Object.values(state.entities.bottles)
  return({
    bottles,
    distilleries: state.entities.distilleries
  })
}

const mdp = dispatch => {
  // debugger
  return({
    fetchBottles: () => dispatch(fetchBottles()),
    fetchBottle: (id) => dispatch(fetchBottles(id))
  })
}

export default connect(msp, mdp)(BottleIndex);