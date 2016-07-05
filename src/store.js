// deps
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore, routerMiddleware } from 'react-router-redux';
// reducers
import rootReducer from './reducers/index';

const middleware = routerMiddleware( browserHistory );

export let store = createStore( 
	rootReducer,
	applyMiddleware( thunk, middleware )
);

export let history = syncHistoryWithStore( browserHistory, store );