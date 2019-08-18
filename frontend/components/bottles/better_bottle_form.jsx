import React from 'react';
import BottleErrors from './bottle_errors';
import CropPhoto from './crop_photo';

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
      photoUrl: null,
      distilleries: (this.props.distilleries),
    }

    // this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.goBack = this.goBack.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  goBack() {
    this.props.history.goBack()
  }

  componentDidMount() {
    this.props.fetchDistilleries()
      .then( () => { this.setState(this.props, 
        () => { 
          if (this.props.formType === 'Edit This Bottle') {
            this.props.fetchBottle(this.props.match.params.bottleId)
                      .then(() => this.setState(this.props))
          }
        })
      })
  }
           
  componentWillUnmount() {
    this.props.clearBottleErrors()
  }

  handleChange(input) {
    return (
      e => this.setState({ [input]: e.target.value } )
    )
  }

  // handleFile(e) {
  //   const photo = e.target.files[0];
  //   const fileReader = new FileReader();
  //   fileReader.onloadend = () => {
  //     this.setState({
  //       photoFile: photo,
  //       photoUrl: fileReader.result
  //     })
  //   }
  //   if (photo) { 
  //     debugger
  //     fileReader.readAsDataURL(photo)
  //   }
  // }

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
      .then((action) => this.props.history.push(`/bottles/${action.payload.bottle.id}`));
  }

  handleDelete() {
    this.props.removeBottle(this.props.bottleId)
    this.props.history.push('/')
  }

  render() {
    
    let distilleries;
    if (this.state.distilleries.length === 0) {
      distilleries = <></>
    } else {
      distilleries = this.state.distilleries.map( (distillery, idx) => {
      return <option key={`${distillery.name}-${idx}`} value={distillery.id}>{distillery.name}</option>
    })}

    // const photoPreview = this.state.photoUrl ? <img className='photo-preview' src={this.state.photoUrl} /> : null
    const photoPreview = this.state.photoUrl ? <CropPhoto photoUrl={this.state.photoUrl} formType={this.props.formType}/> : null

    // let imgMessage;
    // if (this.props.formType === 'Add a New Bottle') {
    //   imgMessage =
    //     <div>
    //       <label>Upload Image:</label>
    //       <p className='required'>*</p>
    //     </div>
    // } else {
    //   imgMessage = <div>
    //     <label>Upload a New Image:</label>
    //     <p className='optional'>(optional)</p>
    //   </div>
    // }

    let deleteButton;
    if (this.props.formType === 'Edit This Bottle') {
      deleteButton = <button className='delete-bottle' onClick={this.handleDelete}>Delete Bottle</button>
    } else {
      deleteButton = <div></div>
    }
    
    if (!this.state) {
      return (
        <div className='loading'>Loading...</div>
      )
    }
    
    return (
      <div className='bottle-form-background'>
        <div className='clear-space'></div>
        <form className='bottle-form-section'>
          <img className='cancel-icon' onClick={this.goBack} src={cancel} alt="Cancel" />
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
           {/* {imgMessage}
           <input type="file" onChange={this.handleFile} /> */}
           <div className='crop-zone'>
             {photoPreview}
           </div>
          
          {deleteButton}
          <BottleErrors errors={this.props.errors} />

          <button className='submit' onClick={this.handleSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}

export default BetterBottleForm;