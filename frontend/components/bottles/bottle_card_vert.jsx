import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const msp = (state, ownProps) => {
  const distillery = state.entities.distilleries[ownProps.bottle.distillery_id]
  const region = state.entities.regions[distillery.region_id]
  return({
    distillery: {
      id: distillery.id,
      name: distillery.name,
      region_id: distillery.region_id,
    },
    region
  })
}

const BottleCardVert = ({ bottle, distillery, region, fetchBottle }) => {
  debugger
  return(
    <section key={bottle.name} className='bottle-card-vert'>
      <img src={bottle.photoUrl} alt={bottle.name}/>
      <div className='bottle-vert-detail'>
        <Link to={`/regions/${region.id}`}>{region.name}</Link>
        <h4>{bottle.name}</h4>
        <Link to={`/distilleries/${distillery.id}`}>{distillery.name}</Link>
        <span>${bottle.price}</span>
        <input type="image" src={starOutline} onClick={fetchBottle}/>
        <label>Add Review</label>
      </div>
    </section>
  )
}

export default connect(msp)(BottleCardVert);