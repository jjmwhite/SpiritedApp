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
    this.props.demoAction(this.state)
  }

  render() {
    // debugger
    if (this.props.formType === 'signup') {
      // debugger
      return (
        <div className='session-window'>
          <header className='signup-header'>
            <span>Join Spirited</span>
            <div>|</div>
            {this.props.changeForm}
          </header>
          <p>Create a profile to save, rate, and discover your new favorite malts!</p>
          <form className='session-form'>
            <input type='text' value={this.state.email} placeholder='Email' onChange={this.handleChange('email')}/>
            <input type='password' value={this.state.password} placeholder='Password' onChange={this.handleChange('password')}/>
            <input type='text' value={this.state.first_name} placeholder='First Name' onChange={this.handleChange('first_name')}/>
            <input type='text' value={this.state.last_name} placeholder='Last Name' onChange={this.handleChange('last_name')}/>           
            <div className='checkbox'>
              <input name='checkbox' type='checkbox' />
              <label for='checkbox'>I certify that I am of legal drinking age.</label>
            </div>
            <button onClick={this.handleSubmit}>Continue</button>
          </form>
          <button onClick={this.handleDemo}>Demo Login</button>

        </div>
      )
    } else {
      // debugger
      return (
        <div className='session-window'>
          <header className='login-header'>
            {this.props.changeForm}
            <span>Log In</span>
          </header>
          <form className='session-form'>
            <input type='text' value={this.state.email} placeholder='Email' onChange={this.handleChange('email')}/>
            <input type='password' value={this.state.password} placeholder='Password' onChange={this.handleChange('password')}/>
            <button onClick={this.handleSubmit}>Continue</button>
          </form>
          <button onClick={this.handleDemo}>Demo Login</button>
        </div>
      )
    }
  }
}

export default SessionForm;