
import React from 'react';

export class RegistrationForm extends React.Component {
  constructor() {
    super();
    this.state = { password: '', length: 0 };
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
    this.setState({ length: this.state.password.length });
  }

  render() {
    const iconClasses = this.state.password.length < 8 ? 'fa-solid fa-xmark' : 'fa-solid fa-check';
    let textClasses = '';
    let outputText = '';

    if (this.state.password.length === 0) {
      textClasses = 'zero';
      outputText = 'Password required ';
    } else if (this.state.password.length > 0 && this.state.password.length < 8) {
      textClasses = 'less-than-8';
      outputText = 'Your password is too short';
    } else if (this.state.password.length >= 8) {
      textClasses = 'correct-length';
    }

    return (
      <div className='main-container'>
      <form onSubmit={this.handleSubmit} action="">
        <div>
          <label htmlFor="password">Password</label>
        </div>
        <div className='input-container'>
          <input id="password" type="password" value={this.state.password} onChange={this.handlePasswordChange} />
          <i className={iconClasses}></i>
        </div>
        <div><p className={textClasses}>{outputText}</p></div>
      </form>
      </div>
    );
  }
}
