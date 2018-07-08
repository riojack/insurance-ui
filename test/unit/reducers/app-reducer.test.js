import appReducer from '../../../app/reducers/app-reducer';
import tryLogin from '../../../app/actions/login';

describe('App Reducer', () => {
  it('should not be logged in in the default state', () => {
    let state = appReducer();

    expect(state).toHaveProperty('logged_in', false);
  });

  it('should be logged in in the next state', () => {
    let state = appReducer(undefined, tryLogin('floopy', 'boopy'));

    expect(state).toHaveProperty('logged_in', true);
  });
});
