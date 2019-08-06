import React from 'react';
import { connect } from 'react-redux';

const msp = (state, ownProps) => {
  return ({
    rating: ownProps.rating
  })
}

const BottleShowRating = ({ rating }) => {
  return(
    <section className='bottle-show-rating'>
      
    </section>
  )
}


export default connect(msp)(BottleShowRating);