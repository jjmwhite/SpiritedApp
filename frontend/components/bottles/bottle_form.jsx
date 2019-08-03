import React from 'react';
import BottleErrors from './bottle_errors';

class BottleForm extends React.Component {
  constructor(props) {
    super(props)
    // this.state = this.props.bottle;

    this.state = {
      name: this.props.bottle.name,
      description: this.props.bottle.description,
      distillery_id: this.props.bottle.distillery_id,
      age: this.props.bottle.age,
      release_year: this.props.bottle.release_year,
      price: this.props.bottle.price,
      photoFile: this.props.bottle.photoFile,
    }
    debugger

    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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

  handleFile(e) {
    debugger
    this.setState({ photoFile: e.currentTarget.files[0] })
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    debugger
    formData.append('bottle[name]', this.state.name);
    debugger
    formData.append('bottle[description]', this.state.name);
    formData.append('bottle[distillery_id]', this.state.distillery);
    formData.append('bottle[age]', this.state.age);
    formData.append('bottle[release_year]', this.state.release_year);
    formData.append('bottle[price]', this.state.price);
    formData.append('bottle[photo]', this.state.photoFile);

    debugger
    this.props.formAction(formData)
              .then(this.closeBottleModal)
  }

  render() {
    // debugger
    const distilleries = this.props.distilleries.map( (distillery, idx) => {
      debugger
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
    for (let i = 2019; i > 1800; i--) {
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

        <div>
          <label>Name:</label>
          <p className='required'>*</p>
        </div>
          <input type="text" value={this.state.name} placeholder='e.g. Caol Ila 10' onChange={this.handleChange('name')}/>
        
        <div>
          <label>Distillery:</label>
          <p className='required'>*</p>
        </div>
          <select value={this.state.distillery} onChange={this.handleChange('distillery')}>
            {/* <option defaultValue='selected' disabled >Select Distillery</option> */}
            {distilleries}
          </select>

        <div>
          <label>Age:</label>
          <p className='optional'>(if given)</p>
        </div>
          <select value={this.state.age} onChange={this.handleChange('age')}>
            {/* <option defaultValue='selected' disabled>Age (if applicable)</option> */}
            {ages}
          </select>

        <div>
          <label>Release Year:</label>
          <p className='optional'>(if applicable)</p>
        </div>
          <select value={this.state.release_year} onChange={this.handleChange('release_year')}>
          {/* <option defaultValue='selected' disabled>Release Year (if applicable)</option> */}
            {years}
          </select>

        <div>
          <label>Description:</label>
          <p className='required'>*</p>
        </div>
          <textarea value={this.state.description} id="" cols="30" rows="3" onChange={this.handleChange('description')}></textarea>

        <div>
          <label>Description:</label>
          <p className='required'>*</p>
        </div>
          <select value={this.state.price} onChange={this.handleChange('price')}>
            {/* <option defaultValue='selected' disabled>Average Price</option> */}
            {prices}
          </select>

        <div>
          <label>Upload Image:</label>
          <p className='required'>*</p>
        </div>
          <input type="file" onChange={this.handleFile}/>


        <button className='submit' onClick={this.handleSubmit}>Submit</button> 
        <BottleErrors errors={this.props.errors} />
      </form>
    )
  }
}

export default BottleForm;