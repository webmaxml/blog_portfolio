// store
import { store, history } from './store';
// pages
import pages from './pages';
// actions
import { hideMobileMenu, initPage } from './actions';

function handleChange( v1, v2 ) {
	
}

store.subscribe( handleChange );

history.listen( location => {

	window.scrollTo( 0, 0 );

	store.dispatch( hideMobileMenu() );

	let uri = location.pathname;
	let query = location.query;
	let search = location.search;
	// find the current page
	let page = _.find( pages, item => item.reg.test( uri ) )

	// get array of page data
	let pageData = page.getPageData( uri, query, search );

	store.dispatch( initPage( ...pageData ) );
	
} );