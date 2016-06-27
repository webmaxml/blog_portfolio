// entries
import './jade/index.jade';
import './sass/index.scss';
// deps
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';
// reducers
import rootReducer from './reducers/index';
// components
import App from './components/app/app';

// Rest api core
const api = 'http://api.webmaxml.ru/wp-json/wp/v2';

// let store = createStore( 
// 	rootReducer,
// 	applyMiddleware( thunk.withExtraArgument( api ) )
// );

render( 
	// <Provider store={ store }>
		<Router history={ browserHistory }>
			<Route path="/" component={ App }>
			</Route>
		</Router>,
	// </Provider>, 
	document.getElementById( 'appRoot' )
);

