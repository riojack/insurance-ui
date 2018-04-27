import * as enzyme from 'enzyme';
import LoginSplash from '../../app/pages/LoginSplash';
import * as React from 'react'

describe('Login Splash Page', () => {
  it('should have an email field and password field', () => {
    let splash = enzyme.shallow(<LoginSplash />);

    let emailField = splash.find('input[type="email"]');
    let passwordField = splash.find('input[type="password"]');

    expect(emailField).toHaveLength(1);
    expect(passwordField).toHaveLength(1);
  });
});
