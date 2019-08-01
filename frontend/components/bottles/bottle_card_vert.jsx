import React from 'react';

const BottleCardVert = ({ bottle, fetchBottle }) => {

  return(
    <section key={bottle.name} className='bottle-card-vert'>
      <img src={bottle.photoUrl} alt={bottle.name}/>
      <span>{bottle.distillery_id}</span>
      <h4>{bottle.name}</h4>
      <span>Region Here</span>
      <span>{bottle.price}</span>
      <input type="image" src="" onClick={fetchBottle}/>
    </section>
  )
}

export default BottleCardVert;