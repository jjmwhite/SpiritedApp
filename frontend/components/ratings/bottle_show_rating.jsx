import React from 'react';
import UpdateRatingContainer from './update_rating_container';

class BottleShowRating extends React.Component {

  constructor(props) {
    super(props);
    this.showForm = this.showForm.bind(this);
  }

  showForm() {
    const form = document.getElementById(`update-rating-review-section-${this.props.rating.id}`);
    const prevReview = document.getElementById(`bottle-show-rating-detail-${this.props.rating.id}`)
    if (form.style.display === 'none' || form.style.display === '') {
      form.style.display = 'block';
      prevReview.style.display = 'none';
    }
  }

  render() {
    const rating = this.props.rating;
    const users = this.props.users;
    const currentUser = this.props.currentUser;

    let editButton;
    let editForm;
    if (currentUser === rating.user_id || currentUser === 1) {
      editButton = <button className='rating-edit' onClick={this.showForm}>Edit Rating</button>
      editForm = <UpdateRatingContainer rating={rating} currentUser={currentUser} />
    } else {
      editButton = <></>
      editForm = <></>
    }

    return(
      <section className='bottle-rating'>
        <div className='bottle-rating-user'>
          <img src={"https://upload.wikimedia.org/wikipedia/commons/d/d3/SCOport-fr-economy.png"} />
          <figcaption>
            <h2>{users[rating.user_id].first_name}</h2>
            <h5>Rated on {rating.date}</h5>
          </figcaption>
        </div>
        <div className='bottle-rating-toggle'>
          <div id={`bottle-show-rating-detail-${rating.id}`}>
            <div className='rating-stars'>
              <span>
                <i className={'fas fa-star ' + (1 > rating.rating ? 'gray-star' : 'gold-star')}></i>
              </span>
              <span>
                <i className={'fas fa-star ' + (2 > rating.rating ? 'gray-star' : 'gold-star')}></i>
              </span>
              <span>
                <i className={'fas fa-star ' + (3 > rating.rating ? 'gray-star' : 'gold-star')}></i>
              </span>
              <span>
                <i className={'fas fa-star ' + (4 > rating.rating ? 'gray-star' : 'gold-star')}></i>
              </span>
              <span>
                <i className={'fas fa-star ' + (5 > rating.rating ? 'gray-star' : 'gold-star')} ></i>
              </span>
            </div>
            <p>{rating.review}</p>
            {editButton}
          </div>
          {editForm}
        </div>
        
      </section>
    )
   
  }
}

export default BottleShowRating;