// deps
import store from './store';
import history from './history';
import pages from './pages/pages';
// actions
import { hideMobileMenu } from './components/mobileMenu/actions';
import { initPage } from './pages/actions';

function handleChange(  ) {
	// console.log( store.getState() );
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