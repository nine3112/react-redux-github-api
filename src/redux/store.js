import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from './reducers/rootReducer';
export default function configureStore() {
 return createStore(
  combineReducers({redux:rootReducer}),
   applyMiddleware(thunk)
 );
}