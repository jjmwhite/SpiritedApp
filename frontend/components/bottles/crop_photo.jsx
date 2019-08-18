import React from 'react';
import ReactCrop from 'react-image-crop';

// docs for plugin: https://github.com/DominicTobias/react-image-crop#example

export default class CropPhoto extends React.Component {

  constructor({ formType, photoUrl }) {
    super(props)
    debugger
    this.state = {
      photoUrl,
      photoFile: null,
      crop: {
        unit: "%",
        width: 185,
        height: 260
      }
    }
    this.onCropChange = this.onCropChange.bind(this);
    this.handleFile = this.handleFile.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this)
  }


  handleFile(e) {
    const photo = e.target.files[0];
    const fileReader = new FileReader();
    fileReader.onloadend = () => {
      this.setState({
        photoFile: photo,
        photoUrl: fileReader.result
      })
    }
    if (photo) {
      debugger
      fileReader.readAsDataURL(photo)
    }
  }

  onImageLoaded(image) {
    this.image = image;
  }

  onCropChange(crop) {
    this.setState({ crop });
  }

  getCroppedImage(image, pixelCrop, fileName) {

  }
  
  render() {
    debugger
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

    return(
      <>
        { imgMessage }
        < input type = "file" onChange={this.handleFile} />
        <ReactCrop 
          src={this.state.photoUrl} 
          crop={this.state.crop}
          onChange={this.onCropChange}
        />
      </>
    )
  }
  

}