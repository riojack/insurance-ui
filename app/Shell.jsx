import * as React from 'react';
import { Provider } from 'react-redux';
import AppStore from './stores/app-store';
import { LoginSplash } from './pages/LoginSplash';
import { Dashboard } from './pages/Dashboard';

// function showDashboardIfLoggedIn(store) {
//   if (store.getState().logged_in) {}
// }

function showLoginIfLoggedOut(store) {
  if (!store.getState().logged_in) {
    return <LoginSplash />;
  }
  return <Dashboard />;
}

export default function Shell() {
  return (<Provider store={AppStore}>
    {showLoginIfLoggedOut(AppStore)}
  </Provider>);
}
