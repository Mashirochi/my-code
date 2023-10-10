import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension'
import rootReducer from './reducer/rootReducer';
import thunkMiddleware from 'redux-thunk'
import { injectStore } from '../service/customizeApi';
const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(thunkMiddleware))
);
injectStore(store);


export default store;