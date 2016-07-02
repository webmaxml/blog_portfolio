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
import Home from './components/home/home';
import PostSection from './components/postSection/postSection';

let store = createStore( 
	rootReducer,
	applyMiddleware( thunk )
);

render( 
	<Provider store={ store }>
		<Router history={ browserHistory }>
			<Route component={ App }>
				<Route path="/" component={ Home }>
					<IndexRoute component={ PostSection } />
				</Route>
			</Route>
		</Router>
	</Provider>, 
	document.getElementById( 'appRoot' )
);

