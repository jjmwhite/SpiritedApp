import { connect } from 'react-redux';
import BottleShow from './bottle_show';
import { fetchBottle, createBottle, updateBottle, removeBottle } from '../../actions/bottle_actions';
import { openBottleModal } from '../../actions/bottle_modal_actions';

const msp = (state = {}, ownProps) => {
  const bottleId = ownProps.match.params.bottleId;
  let bottle = state.entities.bottles[bottleId];
  let distillery;
  let region;
  if (!bottle) {
    distillery = {};
    region = {};
  } else {
    distillery = state.entities.distilleries[bottle.distillery_id];
    region = state.entities.regions[distillery.region_id];
  }

  
  return({
    bottle,
    distillery,
    region
  })
}

const mdp = dispatch => {
  return({
    fetchBottle: (id) => dispatch(fetchBottle(id)),
    createBottle: (bottle) => dispatch(createBottle(bottle)),
    updateBottle: (bottle, id) => dispatch(updateBottle(bottle, id)),
    removeBottle: (id) => dispatch(removeBottle(id)),
    openBottleModal: (type) => dispatch(openBottleModal(type)),
  })
}

export default connect(msp, mdp)(BottleShow);