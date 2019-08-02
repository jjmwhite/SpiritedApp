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

    // Eventually want to map distilleries to this as a dropdown...
    // const distilleries = this.props.distilleries.map( dist, idx => {
    //   return <li key={`${distillery.name}-${idx}`} value={this.state.distillery}>{distillery.name}</li>
    // })
    // <button className='form-dropdown-button'>Select Distillery</button>
    //   <ul className='form-dropdown-content'>
    //     {distilleries}
    // </ul>

    return(
      <form className='bottle-form'>
        <h1>{this.props.formType}</h1>
        <label>Name: </label>
        <input type="text" value={this.state.name} onChange={this.handleChange('name')}/>

        <label>Distillery: </label>
        <input type="text" value={this.state.distillery} onChange={this.handleChange('distillery')}/>

        <label>Age (if applicable):</label>
        <input type="number" min='0' max='100' value={this.state.age} onChange={this.handleChange('age')}/>
        
        <label>Release Year (if applicable):</label>
        <input type="number" min='1800' max='2019' value={this.state.release_year} onChange={this.handleChange('release_year')}/>

        <label>Description:</label>
        <textarea value={this.state.description} id="" cols="30" rows="10" onChange={this.handleChange('description')}></textarea>

        <label>Avg. Price: </label>
        <input type="number" value={this.state.price} onChange={this.handleChange('price')}/>

        <button onClick={this.handleSubmit}>Submit</button> 
        <BottleErrors errors={this.props.errors} />
      </form>
    )
  }
}

export default BottleForm;