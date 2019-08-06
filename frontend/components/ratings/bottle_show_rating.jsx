import React from 'react';
import { connect } from 'react-redux';

const msp = (state, ownProps) => {
  return ({
    rating: ownProps.rating,
    users: ownProps.users,
  })
}

const BottleShowRating = ({ rating, users }) => {
  debugger
  return(
      <section className='bottle-show-rating'>
        <div className='user-rating-detail'>
          <img src={"https://upload.wikimedia.org/wikipedia/commons/d/d3/SCOport-fr-economy.png"} />
          <h2>{users[rating.user_id].first_name}</h2>
          <h5>{rating.updated_at}</h5>
        </div>
        <div className='user-rating-detail'>
          <h2>{rating.rating}</h2>
          <p>{rating.review}</p>
        </div>
      </section>
  )
}


export default connect(msp)(BottleShowRating);