import * as enzyme from 'enzyme';
import LoginSplash from '../../app/pages/LoginSplash';
import * as React from 'react'

describe('Login Splash Page', () => {
  it('should have an email field and password field', () => {
    let t = enzyme.shallow(<LoginSplash />);
  });
});
