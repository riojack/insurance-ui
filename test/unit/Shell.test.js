import * as enzyme from 'enzyme';
import * as React from 'react'
import Shell from '../../app/Shell';
import { LoginSplash } from '../../app/pages/LoginSplash';
import AppStore from '../../app/stores/app-store';
import {
  tryLogin
} from '../../app/actions/login';
import { Dashboard } from '../../app/pages/Dashboard';

describe('Shell', () => {
  it('should show the LoginSplash component when the user is not logged in', () => {
    let shell = enzyme.shallow(<Shell />);

    expect(shell.find(Dashboard)).toHaveLength(0);
    expect(shell.find(LoginSplash)).toHaveLength(1);
  });

  it('should show the Dashboard component when the user is logged in', () => {
    AppStore.dispatch(tryLogin('bob', 'obo'));

    let shell = enzyme.shallow(<Shell />);

    expect(shell.find(Dashboard)).toHaveLength(1);
    expect(shell.find(LoginSplash)).toHaveLength(0);
  });
});
