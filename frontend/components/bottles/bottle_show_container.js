import { connect } from 'react-redux';
import BottleShow from './bottle_show';
import { fetchBottle, createBottle, updateBottle, removeBottle } from '../../actions/bottle_actions';


const msp = (state, ownProps) => {
  const bottleId = ownProps.match.params.bottleId;
  const bottle = state.entities.bottles[bottleId];
  return({
    bottle
  })
}

const mdp = dispatch => {
  return({
    fetchBottle: (id) => dispatch(fetchBottle(id)),
    createBottle: (bottle) => dispatch(createBottle(bottle)),
    updateBottle: (bottle) => dispatch(updateBottle(bottle)),
    removeBottle: (id) => dispatch(removeBottle(id))
  })
}

export default connect(msp, mdp)(BottleShow);