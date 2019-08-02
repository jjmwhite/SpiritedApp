import React from 'react';
import { Link } from 'react-router-dom';

const BottleCardVert = ({ bottle, fetchBottle }) => {

  return(
    <section key={bottle.name} className='bottle-card-vert'>
      <img src={bottle.photoUrl} alt={bottle.name}/>
      <div className='bottle-vert-detail'>
        <Link to={`/regions/${bottle.region.id}`}>{bottle.region}</Link>
        <h4>{bottle.name}</h4>
        <Link to={`/distilleries/${bottle.distillery.id}`}>{bottle.distillery}</Link>
        <span>${bottle.price}</span>
        <input type="image" src={starOutline} onClick={fetchBottle}/>
        <label>Add Review</label>
      </div>
    </section>
  )
}

export default BottleCardVert;