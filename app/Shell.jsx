import * as React from 'react';
import { Provider } from 'react-redux';
import { getStore } from './stores/app-store';
import { LoginSplash } from './pages/LoginSplash';
import { Dashboard } from './pages/Dashboard';

function showLoginIfLoggedOut(store) {
  if (!store.getState().logged_in) {
    return <LoginSplash />;
  }
  return <Dashboard />;
}

export default function Shell() {
  return (<Provider store={getStore()}>
    {showLoginIfLoggedOut(getStore())}
  </Provider>);
}
