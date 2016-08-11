// entries
import './jade/index.jade';
import './sass/index.scss';
// deps
import 'babel-polyfill';
import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { Router, Route, IndexRoute } from 'react-router';
import store from './store';
import history from './history';
// pages
const pages = store.getState().pages.items;
// controller
import './controller';
// components
import App from './components/app/app';
import Home from './components/home/home';
import PostSection from './components/postSection/postSection';
import PostIndex from './components/postIndex/postIndex';
import PostItem from './components/postItem/postItem';
import Contact from './components/contact/contact';
import QuotesList from './components/quotesList/quotesList';

// controllers
import './pages/controller';

render( 
	<Provider store={ store }>
		<Router history={ history }>
			<Route component={ App }>
				<Route component={ Home }>
					<Route path={ pages.root.path } component={ PostSection }>
						<IndexRoute component={ PostIndex } />
						<Route path={ pages.post.path } component={ PostItem } />
						<Route path={ pages.postsPage.path } component={ PostIndex } />
						<Route path={ pages.catsPage.path } component={ PostIndex } />
						<Route path={ pages.tagsPage.path } component={ PostIndex } />
						<Route path={ pages.archivePage.path } component={ PostIndex } />
						<Route path={ pages.searchPage.path } component={ PostIndex } />
						<Route path={ pages.contact.path } component={ Contact } />
						<Route path={ pages.quotes.path } component={ QuotesList } />
					</Route>
				</Route>
			</Route>
		</Router>
	</Provider>, 
	document.getElementById( 'appRoot' )
);

