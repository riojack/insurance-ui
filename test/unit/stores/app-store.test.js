import {
  getStore
} from "../../../app/stores/app-store";
import {
  tryLogin
} from "../../../app/actions/login";

describe('Application store', () => {
  it('should always return the same store', () => {
    const store = getStore();

    expect(store).toBeDefined();
    expect(getStore()).toBe(store);
  });

  it('should update the logged in state', (done) => {
    const unsub = getStore().subscribe(() => {
      const state = getStore().getState();

      expect(state).toHaveProperty('logged_in', true);

      unsub();
      done();
    });

    getStore().dispatch(tryLogin('floopy', 'boopy'));
  });
});
