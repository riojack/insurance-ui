import appReducer from '../../../app/reducers/app-reducer';
import {
  tryLogin,
  logout
} from '../../../app/actions/login';

describe('App Reducer', () => {
  it('should not be logged in in the default state', () => {
    let state = appReducer();

    expect(state).toHaveProperty('logged_in', false);
  });

  describe('logged in', () => {
    it('should be logged in in the next state', () => {
      let state = appReducer(undefined, tryLogin('floopy', 'boopy'));

      expect(state).toHaveProperty('logged_in', true);
    });
  });

  describe('logged out', () => {
    it('should be logged out in the next state', () => {
      let state = appReducer(undefined, tryLogin('floopy', 'boopy'));
      let finalState = appReducer(state, logout());

      expect(finalState).toHaveProperty('logged_in', false);
    });
  });
});
