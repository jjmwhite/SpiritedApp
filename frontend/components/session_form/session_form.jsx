import React from 'react';

class SessionForm extends React.Component {

  constructor(props) {
    // debugger
    super(props);
    this.state = this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
  }

  handleChange(input) {
    return (
      e => this.setState({ [input]: e.target.value })
    );
  }

  handleSubmit(e) {
    // debugger
    e.preventDefault();
    this.props.closeModal();
    this.props.formAction(this.state);
  }

  handleDemo(e) {
    e.preventDefault();
    this.setState({
      email: 'test@test.com',
      password: 'password123',
    })
    this.props.formAction(this.state)
  }

  render() {
    // debugger
    if (this.props.formType === 'signup') {
      // debugger
      return (
        <div className='session-window'>
          <span className='signup-header'>
            <h3>Sign Up</h3>
            {this.props.changeForm}
            <p>Text about joining here!</p>
          </span>
          <form className='session-form'>
            <input type="text" value={this.state.email} placeholder='Email' onChange={this.handleChange('email')}/>
            <input type="password" value={this.state.password} placeholder='Password' onChange={this.handleChange('password')}/>
            <input type="text" value={this.state.first_name} placeholder='First Name' onChange={this.handleChange('first_name')}/>
            <input type="text" value={this.state.last_name} placeholder='Last Name' onChange={this.handleChange('last_name')}/>           
            <button onClick={this.handleSubmit}>Continue</button>
          </form>
          <button onClick={this.handleDemo}>Demo Login</button>

        </div>
      )
    } else {
      // debugger
      return (
        <div className='session-window'>
          <span className='login-header'>
            <h3>Log In</h3>
            {this.props.changeForm}
          </span>
          <form className='session-form'>
            <input type="text" value={this.state.email} placeholder='Email' onChange={this.handleChange('email')}/>
            <input type="password" value={this.state.password} placeholder='Password' onChange={this.handleChange('password')}/>
            <button onClick={this.handleSubmit}>Continue</button>
          </form>
          <button onClick={this.handleDemo}>Demo Login</button>
        </div>
      )
    }
  }
}

export default SessionForm;