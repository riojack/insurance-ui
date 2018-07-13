import * as enzyme from 'enzyme';
import {LoginSplashComponent} from '../../../app/pages/LoginSplash';
import * as React from 'react'

describe('Login Splash Page', () => {
  it('should have an email field and password field', () => {
    let splash = enzyme.shallow(<LoginSplashComponent />);

    let emailField = splash.find('input[type="email"]');
    let passwordField = splash.find('input[type="password"]');

    expect(emailField).toHaveLength(1);
    expect(passwordField).toHaveLength(1);
  });

  it('should have a button with the word "Login"', () => {
    let splash = enzyme.shallow(<LoginSplashComponent />);

    let loginButton = splash.find('button');

    expect(loginButton).toHaveLength(1);
    expect(loginButton.text()).toEqual('Login');
  });

  it('should trigger props.handleLogin when the "Login" button is clicked', () => {
    const username = 'me@myself.org';
    const password = 'abc 123';

    const handleLoginStub = jest.fn();

    let splash = enzyme.shallow(<LoginSplashComponent handleLogin={handleLoginStub} />);

    let emailField = splash.find('input[type="email"]');
    let passwordField = splash.find('input[type="password"]');

    let loginButton = splash.find('button');

    emailField.simulate('change', { target: {value: username}});
    passwordField.simulate('change', { target: {value: password}});

    loginButton.simulate('click');

    expect(handleLoginStub).toHaveBeenCalledWith(username, password);
  });
});
