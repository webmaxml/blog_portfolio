// deps
import { combineReducers } from 'redux';
// reducers
import posts from './posts';

const rootReducer = combineReducers({
	posts
});

export default rootReducer;