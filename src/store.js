// deps
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { routerMiddleware } from 'react-router-redux';
// reducers
import rootReducer from './reducers/index';

const middleware = routerMiddleware( browserHistory );

let store = createStore( 
	rootReducer,
	applyMiddleware( thunk, middleware )
);

export default store;