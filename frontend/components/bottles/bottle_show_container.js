import { connect } from 'react-redux';
import BottleShow from './bottle_show';
import { fetchBottle, createBottle, updateBottle, removeBottle } from '../../actions/bottle_actions';
import { openBottleModal } from '../../actions/bottle_modal_actions';

const msp = (state = {}, ownProps) => {
  debugger
  const bottleId = ownProps.match.params.bottleId;
  const bottle = state.entities.bottles[bottleId];
  const distillery = state.entities.distilleries[bottle.distillery_id]
  const region = state.entities.regions[distillery.region_id]
  return({
    bottle,
    region,
    distillery
  })
}

const mdp = dispatch => {
  return({
    fetchBottle: (id) => dispatch(fetchBottle(id)),
    createBottle: (bottle) => dispatch(createBottle(bottle)),
    updateBottle: (bottle, id) => dispatch(updateBottle(bottle, id)),
    removeBottle: (id) => dispatch(removeBottle(id)),
    openBottleModal: (type) => dispatch(openBottleModal(type))
  })
}

export default connect(msp, mdp)(BottleShow);