import appReducer from '../../app/reducers/app-reducer';

describe('App Reducer', () => {
  it('should not be logged in in the default state', () => {
    let state = appReducer();

    expect(state).toHaveProperty('logged_in', false);
  });
});
