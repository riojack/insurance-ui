import { createStore } from 'redux';
import appReducer from '../reducers/app-reducer';

const AppStore = createStore(appReducer);

export default AppStore;
