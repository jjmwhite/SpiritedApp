import React from 'react';

class SessionForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = this.props.user;
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(input) {
    return (
      e => this.setState({ [input]: e.target.value })
    );
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.formAction(this.state);
  }

  render() {
    if (this.props.formType === 'signup') {
      return (
        <div className='signup-form'>
          <title className='signup-header'>
            <h3>Sign Up</h3>
            {this.props.changeForm}
            <p>Text about joining here!</p>
          </title>
          <form>
            <label className="form-label">Email:
              <input type="text" value={this.state.email} onChange={this.handleChange('email')}/>
            </label>
            <label className="form-label">Password:
              <input type="password" value={this.state.password} onChange={this.handleChange('password')}/>
            </label>
            <label className="form-label">First name:
              <input type="text" value={this.state.first_name} onChange={this.handleChange('first_name')}/>
            </label>
            <label className="form-label">Last name:
              <input type="text" value={this.state.last_name} onChange={this.handleChange('last_name')}/>
            </label>
            <button onClick={this.handleSubmit}>Sign Up</button>
          </form>
        </div>
      )
    } else {
      return (
        <div className='login-form'>
          <title className='signup-header'>
            <h3>Sign Up</h3>
            {this.props.changeForm}
            <p>Text about joining here!</p>
          </title>
          <form>
            <label className="form-label">Email:
              <input type="text" value={this.state.email} onChange={this.handleChange('email')}/>
            </label>
            <label className="form-label">Password:
              <input type="password" value={this.state.password} onChange={this.handleChange('password')}/>
            </label>
            <button onClick={this.handleSubmit}>Sign Up</button>
          </form>
        </div>
      )
    }
  }
}

export default SessionForm;