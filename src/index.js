// entries
import './jade/index.jade';
import './sass/index.scss';
// deps
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
// store & history
import { store, history } from './store';
// controller
import './controller';
// components
import App from './components/app/app';
import Home from './components/home/home';
import PostSection from './components/postSection/postSection';
import PostIndex from './components/postIndex/postIndex';
import PostItem from './components/postItem/postItem';

render( 
	<Provider store={ store }>
		<Router history={ history }>
			<Route component={ App }>
				<Route component={ Home }>
					<Route path="/" component={ PostSection }>
						<IndexRoute component={ PostIndex } />
						<Route path="post/:id" component={ PostItem } />
						<Route path="page/:count" component={ PostIndex } />
					</Route>
				</Route>
			</Route>
		</Router>
	</Provider>, 
	document.getElementById( 'appRoot' )
);

