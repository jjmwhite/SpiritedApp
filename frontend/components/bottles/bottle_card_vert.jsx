import React from 'react';

const BottleCardVert = ({ bottle, fetchBottle }) => {

  return(
    <section key={bottle.name} className='bottle-card-vert'>
      <img src={bottle.photoUrl} alt={bottle.name}/>
      <div className='bottle-vert-detail'>
        <span>{bottle.region}</span>
        <h4>{bottle.name}</h4>
        <span>{bottle.distillery}</span>
        <span>{bottle.price}</span>
        <input type="image" src="" onClick={fetchBottle}/>
      </div>
    </section>
  )
}

export default BottleCardVert;