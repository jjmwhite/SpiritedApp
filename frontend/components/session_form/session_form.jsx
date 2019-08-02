import React from 'react';
import SessionErrors from './session_errors';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleDemo = this.handleDemo.bind(this);
    this.closeSessionModal = this.props.closeSessionModal.bind(this);
  }

  componentWillUnmount() {
    this.props.clearSessionErrors()
  }

  handleChange(input) {
    return (
      e => this.setState({ [input]: e.target.value })
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.formAction(this.state)
              .then(this.props.closeSessionModal)
  }

  handleDemo(e) {
    e.preventDefault();
    this.props.demoAction({
      email: 'test@test.com',
      password: 'password123',
    })
              .then(this.props.closeSessionModal())
  }

  render() {

    if (this.props.formType === 'signup') {
      return (
        <div className='session-window'>
          <header className='session-header'>
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
              <label>I certify that I am of legal drinking age.</label>
            </div>
            <button onClick={this.handleSubmit}>Continue</button>
          </form>
          <SessionErrors errors={this.props.errors}/>
          <button onClick={this.handleDemo}>Demo Login</button>

        </div>
      )
    } else {
      return (
        <div className='session-window'>
          <header className='session-header'>
            {this.props.changeForm}
            <div>|</div>
            <span>Log In</span>
          </header>
          <form className='session-form'>
            <input type='text' value={this.state.email} placeholder='Email' onChange={this.handleChange('email')}/>
            <input type='password' value={this.state.password} placeholder='Password' onChange={this.handleChange('password')}/>
            <button onClick={this.handleSubmit}>Continue</button>
          </form>
          <SessionErrors errors={this.props.errors} />
          <button onClick={this.handleDemo}>Demo Login</button>
        </div>
      )
    }
  }
}

export default SessionForm;