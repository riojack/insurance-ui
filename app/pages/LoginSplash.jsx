import * as React from 'react';
import tryLogin from '../actions/login';

class LoginSplashComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {username: '', password: ''};
  }

  componentDidMount() {
    require('./login-splash.scss');
  }

  captureEmail(event) {
    this.setState({ username: event.target.value });
  }

  capturePassword(event) {
    this.setState({ password: event.target.value });
  }

  triggerLogin() {
    this.props.handleLogin(this.state.username, this.state.password);
  }

  render() {
    return <div class="login-form">
      <input type="email" placeholder="E-mail" onChange={this.captureEmail.bind(this)} />
      <input type="password" placeholder="Password" onChange={this.capturePassword.bind(this)} />
      <button onClick={this.triggerLogin.bind(this)}>Login</button>
    </div>;
  }
}

export {
  LoginSplashComponent
};
