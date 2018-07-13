import {
  getStore,
  destroyStore
} from "../../../app/stores/app-store";
import {
  tryLogin
} from "../../../app/actions/login";

describe('Application store', () => {
  afterEach(() => destroyStore);

  it('should always return the same store upon calling getStore() more than once', () => {
    const store = getStore();

    expect(store).toBeDefined();
    expect(getStore()).toBe(store);
  });

  it('should create a new store upon calling the destroyStore() method', () => {
    const store = getStore();

    destroyStore();

    expect(getStore()).not.toBe(store);
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
