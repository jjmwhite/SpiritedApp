import { connect } from 'react-redux';
import BottleIndex from './bottle_index';
import { fetchBottle, fetchBottles } from '../../actions/bottle_actions';
import { openSessionModal } from '../../actions/session_modal_actions';

const msp = state => {
  const bottles = Object.values(state.entities.bottles);
  const distilleries = Object.values(state.entities.distilleries);
  debugger
  const regions = state.entities.regions;
  return({
    bottles,
    distilleries,
    regions,
    loggedIn: Boolean(state.session.currentUserId)
  })
}

const mdp = dispatch => {
  return({
    fetchBottles: () => dispatch(fetchBottles()),
    fetchBottle: (id) => dispatch(fetchBottle(id)),
    openSessionModal: (type) => dispatch(openSessionModal(type))
  })
}

export default connect(msp, mdp)(BottleIndex);