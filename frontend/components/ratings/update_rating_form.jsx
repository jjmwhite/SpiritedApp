import React from 'react';
import RatingErrors from './rating_errors';

class UpdateRatingForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.props.rating;
    this.toggleForm = this.toggleForm.bind(this);
    this.handleRating = this.handleRating.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearRatingErrors();
  }

  toggleForm(e) {
    debugger
    const form = document.getElementById(`update-rating-review-section-${this.props.rating.id}`);
    const prevReview = document.getElementById(`bottle-show-rating-detail-${this.props.rating.id}`)

    if (e.target.innerText === 'Cancel' && form.style.display === 'block') {
      this.setState({ rating: this.props.rating.rating })
      form.style.display = 'none';
      prevReview.style.display = 'block';
    } else if (form.style.display === 'block') {
      form.style.display = 'none';
      prevReview.style.display = 'block';
    } else {
      form.style.display = 'block';
      prevReview.style.display = 'none'
    }
  }

  handleRating(e) {
    this.setState({ rating: e._targetInst.pendingProps.value })
  }

  handleChange(input) {
    return (
      e => this.setState({ [input]: e.target.value })
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.updateRating(this.state.bottle_id, this.state);
    this.toggleForm(e);
  }

  render() {

    let editForm;
    debugger
    if (this.props.currentUser !== this.props.rating.user_id) {
      editForm = <></>
    } else {
      editForm = 
      <>
        <textarea
          value={this.state.review}
          cols="30" rows="3"
          onChange={this.handleChange('review')}
        ></textarea>
        <RatingErrors errors={this.props.errors} />
        <button className='rating-submit' onClick={this.handleSubmit}>Submit</button>
        <button className='rating-cancel' onClick={this.toggleForm}>Cancel</button>
      </>
    }

    return (
      <form id={`update-rating-review-section-${this.props.rating.id}`}>
        <div className='rating-stars'>
          <span onClick={this.handleRating}>
            <i
              className={'fas fa-star ' + (1 > this.state.rating ? 'gray-star' : 'gold-star')}
              id='star-1'
              value='1'>
            </i>
          </span>
          <span onClick={this.handleRating}>
            <i
              className={'fas fa-star ' + (2 > this.state.rating ? 'gray-star' : 'gold-star')}
              id='star-2'
              value='2'>
            </i>
          </span>
          <span onClick={this.handleRating}>
            <i
              className={'fas fa-star ' + (3 > this.state.rating ? 'gray-star' : 'gold-star')}
              id='star-3'
              value='3'>
            </i>
          </span>
          <span onClick={this.handleRating}>
            <i
              className={'fas fa-star ' + (4 > this.state.rating ? 'gray-star' : 'gold-star')}
              id='star-4'
              value='4'>
            </i>
          </span>
          <span onClick={this.handleRating}>
            <i className={'fas fa-star ' + (5 > this.state.rating ? 'gray-star' : 'gold-star')}
              id='star-5'
              value='5'>
            </i>
          </span>
        </div>
        {editForm}
      </form>
    )
  }

}

export default UpdateRatingForm;