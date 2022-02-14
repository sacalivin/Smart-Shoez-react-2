import thunk from 'redux-thunk'
import rootReducer from './rootReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import {applyMiddleware, createStore } from 'redux'
import {logger  } from 'redux-logger' 
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(logger, thunk)));

export default store ;