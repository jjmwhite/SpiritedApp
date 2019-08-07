import React from 'react';
import { connect } from 'react-redux';

const msp = (state, ownProps) => {
  return ({
    rating: ownProps.rating,
    users: ownProps.users,
    currentUser: state.session.currentUserId,
  })
}

const BottleShowRating = ({ rating, users, currentUser }) => {

  let editButton;
  if (currentUser === rating.user_id) {
    editButton = <button className='rating-edit'>Edit Rating</button>
  } else {
    editButton = <></>
  }

  return(
    <section className='bottle-show-rating'>
      <div className='bottle-show-rating-user'>
        <img src={"https://upload.wikimedia.org/wikipedia/commons/d/d3/SCOport-fr-economy.png"} />
        <figcaption>
          <h2>{users[rating.user_id].first_name}</h2>
          <h5>Rated on {rating.date}</h5>
        </figcaption>
      </div>
      <div className='bottle-show-rating-detail'>
      {/* <div className='stars' style={`--rating: ${rating.rating}`}></div> */}
        <h2>{rating.rating}</h2>
        <p>{rating.review}</p>
        {editButton}
      </div>
    </section>
  )
}


export default connect(msp)(BottleShowRating);