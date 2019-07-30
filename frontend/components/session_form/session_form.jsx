import React from 'react';

class SessionForm extends React.Component {

  constructor(props) {
    super(props)
    this.state = this.props.user
  }

  // handleChange(input) {

  // }

  // handleSubmit(e) {
  //   e.preventDefault();
  // }

  render() {
    return(
      <div>
        <form>
          <input type="text"/>
          <input type="text"/>
          <button></button>
        </form>
      </div>
    )
  }
}

export default SessionForm;