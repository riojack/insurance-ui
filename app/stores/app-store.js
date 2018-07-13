import {
  createStore
} from 'redux';
import appReducer from '../reducers/app-reducer';

let applicationStore;

function getStore() {
  if (!applicationStore) {
    applicationStore = createStore(appReducer);
  }
  return applicationStore;
}

function destroyStore() {
  applicationStore = null;
}

export {
  getStore,
  destroyStore
};
