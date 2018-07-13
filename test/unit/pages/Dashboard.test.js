import * as enzyme from 'enzyme';
import * as React from 'react'
import { DashboardComponent } from '../../../app/pages/Dashboard';

describe('Dashboard Page', () => {
  it('should have a button with the text "Log out"', () => {
    let dashboard = enzyme.shallow(<DashboardComponent />);

    let logoutButton = dashboard.find('button')

    expect(logoutButton).toHaveLength(1);
    expect(logoutButton.text()).toEqual('Log out');
  });
});
