import { connect } from 'react-redux';
import { fetchDistillery } from '../../actions/distillery_actions'
import DistilleryShow from './distillery_show';

const msp = (state, ownProps) => {
  debugger
  const distilleryId = ownProps.match.params.distId;
  const distillery = state.entities.distilleries[distilleryId] || null
  const regions = state.entities.regions;
  const ratings = state.entities.ratings;
  const bottles = []
  Object.values(state.entities.bottles).map( bottle => {
    debugger
    if (bottle.distillery_id == distilleryId) bottles.push(bottle)
  })

  return({
    distilleryId,
    distillery,
    bottles,
    regions,
    ratings,
    loggedIn: Boolean(state.session.currentUserId)
  })
}

const mdp = dispatch => {
  return({
    fetchDistillery: (id) => dispatch(fetchDistillery(id))
  })
}

export default connect(msp, mdp)(DistilleryShow);