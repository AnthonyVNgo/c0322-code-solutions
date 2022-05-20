import React from 'react';
import * as ReactDOM from 'react-dom';

const container = document.querySelector('#root');
const root = ReactDOM.createRoot(container);
class RegistrationForm extends React.Component {
  constructor() {
    super();
    this.state = { username: '', password: '' };

    this.handleUsernameChange = this.handleUsernameChange.bind(this);
    this.handlePasswordChange = this.handlePasswordChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleUsernameChange(event) {
    this.setState({ username: event.target.value });
  }

  handlePasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  handleSubmit(event) {
    console.log(this.state);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit} action="">
        <div><label htmlFor="username">username</label></div>
        <div><input id="username" type="text" value={this.state.username} onChange={this.handleUsernameChange} /></div>
        <div><label htmlFor="password">password</label></div>
        <div><input id="password" type="password" value={this.state.password} onChange={this.handlePasswordChange} /></div>

        <div><button>submit</button></div>
       </form>
    );
  }
}

const element = (
  <div>
    <RegistrationForm />
  </div>
);

root.render(element);
