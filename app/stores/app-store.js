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

export {
  getStore
};
