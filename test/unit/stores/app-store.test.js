import AppStore from "../../../app/stores/app-store";
import {tryLogin} from "../../../app/actions/login";

describe('App Store', () => {
  it('should update the logged in state', (done) => {
    const unsub = AppStore.subscribe(() => {
      const state = AppStore.getState();

      expect(state).toHaveProperty('logged_in', true);

      unsub();
      done();
    });

    AppStore.dispatch(tryLogin('floopy', 'boopy'));
  });
});
