import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const msp = (state, ownProps) => {
  const distillery = ownProps.distillery;
  const region = ownProps.regions[distillery.region_id] || {};
  return ({
    distillery: {
      id: distillery.id,
      name: distillery.name,
      region_id: distillery.region_id,
    },
    region,
  });
};

const BottleCardHorz = ({ bottle, distillery, region, ratings }) => {
  let userReview;
  Object.values(ratings).forEach( rating => {
    if (rating.bottle_id === bottle.id) {
      userReview = 
        <>
          <div>
            <h5>My Rating:</h5>
            <h2>{rating.rating}</h2>
          </div>
          <p>"{rating.review}"</p>
        </>
    };
  });

  return (
    <section className='bottle-card-horz'>
      <Link to={`/bottles/${bottle.id}`}><img src={bottle.photoUrl} alt={bottle.name} /></Link>
      <div className='bottle-subcontainer'>
        <div className='bottle-detail'>
          <Link to={`/regions/${region.id}`} className='bottle-subtitle'>{region.name}</Link>
          <Link to={`/bottles/${bottle.id}`}><h4>{bottle.name}</h4></Link>
          <Link to={`/distilleries/${distillery.id}`} className='bottle-subtitle'>{distillery.name}</Link>
          <span>${bottle.price}</span>
        </div>
        <div className='rating-detail'>
          {userReview}
        </div>
      </div>
    </section>
  );
};
export default connect(msp)(BottleCardHorz);