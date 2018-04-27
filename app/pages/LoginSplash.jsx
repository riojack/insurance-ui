import * as React from 'react';

export default class LoginSplash extends React.Component {
  componentDidMount() {
    require('./login-splash.scss');
  }

  render() {
    return <div class="login-form">
      <input type="email" placeholder="E-mail" />
      <input type="password" placeholder="Password" />
      <button>Login</button>
    </div>;
  }
}
