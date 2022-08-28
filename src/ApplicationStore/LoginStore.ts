import { createStore } from 'redux';
import { loginReducer } from './LoginReducer';

const rootReducer = loginReducer;

export const appStore = createStore(rootReducer);