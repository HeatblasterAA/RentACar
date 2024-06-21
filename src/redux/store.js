import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk'; // Correct import statement
import { carsReducer } from './reducers/carsReducer';
import { alertsReducer } from './reducers/alertsReducer';

const composeEnhancers = composeWithDevTools({});

const rootReducer = combineReducers({
  carsReducer, // Use a key name for the carsReducer
  alertsReducer,
});

const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export default store;
