import React from 'react';
import BottleErrors from './bottle_errors';

class BottleForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = this.props.bottle
    this.handleSubmit = this.handleSubmit.bind(this)
    this.closeBottleModal = this.props.closeBottleModal.bind(this);
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
    debugger
    const distilleries = this.props.distilleries.map( (distillery, idx) => {
      return <option key={`${distillery.name}-${idx}`} value={distillery.id}>{distillery.name}</option>
    })
    
    return(
      <form className='bottle-form'>
        <h1>{this.props.formType}</h1>
        <label>Name: </label>
        <input type="text" value={this.state.name} onChange={this.handleChange('name')}/>

        <select value={this.state.distillery} onChange={this.handleChange('distillery')}>
          <option>Select Distillery</option>
          {distilleries}
        </select>

        <label>Bottle Age (if applicable):</label>
        <input type="number" value={this.state.age} onChange={this.handleChange('age')}/>
        
        <label>Release Year (if applicable):</label>
        <input type="number" value={this.state.release_year} onChange={this.handleChange('release_year')}/>

        <label>Description:</label>
        <textarea value={this.state.description} id="" cols="30" rows="5" onChange={this.handleChange('description')}></textarea>

        <label>Average Price (in USD): </label>
        <input type="number" value={this.state.price} onChange={this.handleChange('price')}/>

        <button className='submit' onClick={this.handleSubmit}>Submit</button> 
        <BottleErrors errors={this.props.errors} />
      </form>
    )
  }
}

export default BottleForm;