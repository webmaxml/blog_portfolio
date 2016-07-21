// deps
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import { reducer } from 'redux-form';
// reducers
import components from './components';

const rootReducer = combineReducers({
	components,
	routing: routerReducer,
	form: reducer
});

export default rootReducer;