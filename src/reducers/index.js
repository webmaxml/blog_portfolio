// deps
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
// reducers
import components from './components';

const rootReducer = combineReducers({
	components,
	routing: routerReducer
});

export default rootReducer;