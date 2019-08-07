import React from 'react'

class RatingForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.rating;
    this.handleRating = this.handleRating.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillUnmount() {
    this.props.clearRatingErrors();
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
    this.props.formAction(this.props.bottleId, this.state);
  }

  render() {
    return(
      <form className='rating-form'>
        <span onClick={this.handleRating}><i className="fas fa-star" id='star 1' value='1'></i></span>
        <span onClick={this.handleRating}><i className="fas fa-star" id='star 2' value='2'></i></span>
        <span onClick={this.handleRating}><i className="fas fa-star" id='star 3' value='3'></i></span>
        <span onClick={this.handleRating}><i className="fas fa-star" id='star 4' value='4'></i></span>
        <span onClick={this.handleRating}><i className="fas fa-star" id='star 5' value='5'></i></span>
        
        <div>
          <textarea 
            value={this.state.review}
            cols="30" rows="3"
            onChange={this.handleChange('review')}
            ></textarea>
          <button className='rating-submit' onClick={this.handleSubmit}>Submit</button>
          <button className='rating-cancel'>Cancel</button>
        </div>
      </form>
    )
  }

}

export default RatingForm;