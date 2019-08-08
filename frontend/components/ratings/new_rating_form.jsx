import React from 'react'
import RatingErrors from './rating_errors';

class NewRatingForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.rating;
    this.handleRating = this.handleRating.bind(this);
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearRatingErrors();
  }

  showForm() {
    const form = document.getElementById('rating-review-section');
    if (form.style.display === 'none' || form.style.display === '') {
      form.style.display = 'block';
    } 
  }

  hideForm() {
    const form = document.getElementById('rating-review-section');
    const stars = [...document.getElementsByClassName('new-gold-star')];
    stars.forEach(star => {
      star.classList.value = 'fas fa-star new-gray-star'} )

    if (form.style.display === 'block') {
      form.style.display = 'none';
    } 
    this.setState({rating: 0})
  }

  handleRating(e) {
    this.showForm();
    this.setState({ rating: e._targetInst.pendingProps.value })
  }

  handleChange(input) {
    return (
      e => this.setState({ [input]: e.target.value })
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createRating(this.props.bottleId, this.state);
  }

  render() {
    const openSessionModal = this.props.openSessionModal

    let submit;
    if (this.props.loggedIn) {
      submit = <button className='rating-submit' onClick={this.handleSubmit}>Submit</button>
    } else {
      submit = <button className='rating-submit' onClick={() => openSessionModal('login')}>Submit</button>
    }

    return(
      <form className='new-rating-form'>
        <span onClick={this.handleRating}>
          <i 
            className={'fas fa-star ' + (1 > this.state.rating ? 'new-gray-star' : 'new-gold-star')} 
            id='star-1' 
            value='1'>
          </i>
        </span>
        <span onClick={this.handleRating}>
          <i 
            className={'fas fa-star ' + (2 > this.state.rating ? 'new-gray-star' : 'new-gold-star')} 
            id='star-2' 
            value='2'>
          </i>
        </span>
        <span onClick={this.handleRating}>
          <i 
            className={'fas fa-star ' + (3 > this.state.rating ? 'new-gray-star' : 'new-gold-star')} 
            id='star-3' 
            value='3'>
          </i>
        </span>
        <span onClick={this.handleRating}>
          <i 
            className={'fas fa-star ' + (4 > this.state.rating ? 'new-gray-star' : 'new-gold-star')} 
            id='star-4' 
            value='4'>
          </i>
        </span>
        <span onClick={this.handleRating}>
          <i className={'fas fa-star ' + (5 > this.state.rating ? 'new-gray-star' : 'new-gold-star')} 
            id='star-5' 
            value='5'>
          </i>
        </span>

        <div id='rating-review-section'>
          <textarea 
            value={this.state.review}
            cols="30" rows="3"
            onChange={this.handleChange('review')}
            ></textarea>
          <RatingErrors errors={this.props.errors} />
          {submit}
          <button className='rating-cancel' onClick={this.hideForm}>Cancel</button>
        </div>
      </form>
    )
  }

}

export default NewRatingForm;