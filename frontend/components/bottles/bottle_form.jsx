import React from 'react';
import BottleErrors from './bottle_errors';

class BottleForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.bottle
    this.handleSubmit = this.handleSubmit.bind(this)
    this.closeBottleModal = this.closeBottleModal.bind(this);
  }

  componentWillUnmount() {
    this.props.clearBottleErrors()
  }

  handleChange(input) {
    return (
      e => this.setState({ [input]: e.target.value })
    )
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.formAction(this.state)
              .then(this.props.closeBottleModal)
  }

  render() {
    const distilleries = this.props.distilleries.map( dist, idx => {
      return <li key={`${distillery.name}-${idx}`} value={this.state.distillery}>{distillery.name}</li>
    })

    return(
      <form className='bottleForm'>
        <label>Name: </label>
        <input type="text" value={this.state.name}/>

        <button className='form-dropdown-button'>Select Distillery</button>
        <ul className='form-dropdown-content'>
          {distilleries}
        </ul>

        <label>Age (if applicable):</label>
        <input type="number" min='0' max='100' value={this.state.age}/>
        
        <label>Release Year (if applicable):</label>
        <input type="number" min='1800' max='2019' value={this.state.release_year}/>

        <label>Description:</label>
        <textarea value={this.state.description} id="" cols="30" rows="10"></textarea>

        <button onClick={this.handleSubmit}>Submit</button> 
        <BottleErrors errors={this.props.errors} />
      </form>
    )
  }
}

export default BottleForm;