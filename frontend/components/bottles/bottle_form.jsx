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

    const ageRange = []
    for (let i = 0; i < 200; i++) {
      ageRange.push(i)
    }
    const ages = ageRange.map( age => {
      return <option key={`age-range-${age}`} value={age}>{age}</option>
    })

    const yearRange = []
    for (let i = 1800; i < 2019; i++) {
      yearRange.push(i)
    }
    const years = yearRange.map( year => {
      return <option key={`year-range-${year}`} value={year}>{year}</option>
    })

    const priceRange = []
    for (let i = 25; i < 4000; i+=5) {
      priceRange.push(i)
    }
    const prices = priceRange.map( price => {
      return <option key={`price-range-${price}`} value={price}>${price}</option>
    })
    
    return(
      <form className='bottle-form'>
        <h1>{this.props.formType}</h1>
        <label>Name: </label>
        <input type="text" value={this.state.name} placeholder='e.g. Caol Ila 10' onChange={this.handleChange('name')}/>

        <select value={this.state.distillery} onChange={this.handleChange('distillery')}>
          <option seleceted='selected'>Select Distillery</option>
          {distilleries}
        </select>

        <select value={this.state.age} onChange={this.handleChange('age')}>
          <option seleceted='selected'>Age (if applicable)</option>
          {ages}
        </select>

        <select value={this.state.release_year} onChange={this.handleChange('release_year')}>
          <option seleceted='selected'>Release Year (if applicable)</option>
          {years}
        </select>

        <label>Description:</label>
        <textarea value={this.state.description} id="" cols="30" rows="5" onChange={this.handleChange('description')}></textarea>

        <select value={this.state.price} onChange={this.handleChange('price')}>
          <option seleceted='selected'>Average Price</option>
          {prices}
        </select>


        <button className='submit' onClick={this.handleSubmit}>Submit</button> 
        <BottleErrors errors={this.props.errors} />
      </form>
    )
  }
}

export default BottleForm;