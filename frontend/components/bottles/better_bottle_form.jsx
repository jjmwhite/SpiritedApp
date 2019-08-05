import React from 'react';
import BottleErrors from './bottle_errors';

class BetterBottleForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      name: this.props.name,
      description: this.props.description,
      distillery_id: this.props.distillery_id,
      age: this.props.age,
      release_year: this.props.release_year,
      price: this.props.price,
      photoFile: null,
      distilleries: (this.props.distilleries),
    }

    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentDidMount() {
    if (this.props.formType === 'Edit This Bottle') {
      this.props.fetchBottle(this.props.match.params.bottleId)
        .then(() => this.setState( this.props ))
    } 
    else {
      this.props.fetchDistilleries()
        .then(() => this.setState( this.props ))
    }
  }

  componentWillUnmount() {
    this.props.clearBottleErrors()
  }

  handleChange(input) {
    return (
      e => this.setState({ [input]: e.target.value } )
    )
  }

  handleFile(e) {
    this.setState({ photoFile: e.currentTarget.files[0] });
  }

  handleSubmit(e) {
    e.preventDefault();

    const formData = new FormData();
    formData.append('bottle[name]', this.state.name);
    formData.append('bottle[description]', this.state.description);
    formData.append('bottle[distillery_id]', this.state.distillery_id);
    formData.append('bottle[age]', this.state.age);
    formData.append('bottle[release_year]', this.state.release_year);
    formData.append('bottle[price]', this.state.price);

    if (this.state.photoFile) {
      formData.append('bottle[photo]', this.state.photoFile);
    }

    this.props.formAction(formData, this.props.bottleId)
      .then(() => {
        debugger
        this.props.history.push(`/bottles/${this.props.bottleId}`)
      })
  }

  render() {
    
    let distilleries;
    if (this.state.distilleries.length === 0) {
      distilleries = <></>
    } else {
      distilleries = this.state.distilleries.map( (distillery, idx) => {
      return <option key={`${distillery.name}-${idx}`} value={distillery.id}>{distillery.name}</option>
    })}

    let imgMessage;
    if (this.props.formType === 'Add a New Bottle') {
      imgMessage =
        <div>
          <label>Upload Image:</label>
          <p className='required'>*</p>
        </div>
    } else {
      imgMessage = <div>
        <label>Upload a New Image:</label>
        <p className='optional'>(optional)</p>
      </div>
    }

    // let deleteButton;
    // if (this.props.formType === 'UpdateBottle') {
    //   deleteButton = <button onClick={() => this.props.removeBottle(this.props.bottleId)}>Delete Bottle</button>
    // } else {
    //   deleteButton = <div></div>
    // }

    
    if (!this.state) {
      return (
        <div>Loading...</div>
      )
    }
    

    return (
      <div className='bottle-form-background'>
        <div className='clear-space'></div>
        <form className='bottle-form-section'>
          <h1>{this.props.formType}</h1>

          <div>
            <label>Name:</label>
            <p className='required'>*</p>
          </div>
          <input type="text" value={this.state.name} placeholder='e.g. Caol Ila 12' onChange={this.handleChange('name')} />

          <div>
            <label>Distillery:</label>
            <p className='required'>*</p>
          </div>

          <select value={this.state.distillery_id} onChange={this.handleChange('distillery_id')}>
            <option value='' disabled>Select Distillery</option>
            {distilleries}
          </select>

          <div>
            <label>Age:</label>
            <p className='optional'>(if specified)</p>
          </div>
          <input type="text" value={this.state.age} placeholder='e.g. 12' onChange={this.handleChange('age')} />

          <div>
            <label>Release Year:</label>
            <p className='optional'>(if specified)</p>
          </div>
          <input type="text" value={this.state.release_year} placeholder='e.g. 2017' onChange={this.handleChange('release_year')} />

          <div>
            <label>Description:</label>
            <p className='required'>*</p>
          </div>
          <textarea value={this.state.description} id="" cols="30" rows="3" onChange={this.handleChange('description')}></textarea>

          <div>
            <label>Price:</label>
            <p className='required'>*</p>
          </div>
          <input type="text" value={this.state.price} placeholder='e.g. 75.00' onChange={this.handleChange('price')} />

          {imgMessage}
          <input type="file" onChange={this.handleFile} />

          {/* {deleteButton} */}

          <button className='submit' onClick={this.handleSubmit}>Submit</button>
          <BottleErrors errors={this.props.errors} />
        </form>
      </div>
    )
  }
}

export default BetterBottleForm;