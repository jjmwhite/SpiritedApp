import React from 'react'

class RatingForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.rating;
    this.handleRating = this.handleRating.bind(this);
    this.showForm = this.showForm.bind(this);
    this.hideForm = this.hideForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.formType === 'Edit Rating') {
      this.props.fetchRating(this.props.bottleId, this.state.id)
        .then(() => this.setState(this.props.rating))
    }
  }

  componentWillUnmount() {
    this.props.clearRatingErrors();
  }

  showForm() {
    const form = document.getElementById('rating-review-section');
    debugger
    if (form.style.display === 'none' || form.style.display === '') {
      form.style.display = 'block';
    } 
  }

  hideForm() {
    const form = document.getElementById('rating-review-section');
    const stars = [...document.getElementsByClassName('gold-star')];
    stars.forEach(star => {
      star.classList.value = 'fas fa-star gray-star'} )

    if (form.style.display === 'block') {
      form.style.display = 'none';
    } 
    this.setState({rating: 0})
  }

  handleRating(e) {
    debugger
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
    this.props.formAction(this.props.bottleId, this.state);
  }

  render() {

    return(
      <form className='rating-form'>
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

        <div id='rating-review-section'>
          <textarea 
            value={this.state.review}
            cols="30" rows="3"
            onChange={this.handleChange('review')}
            ></textarea>
          <button className='rating-submit' onClick={this.handleSubmit}>Submit</button>
          <button className='rating-cancel' onClick={this.hideForm}>Cancel</button>
        </div>
      </form>
    )
  }

}

export default RatingForm;