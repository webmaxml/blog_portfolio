// store
import { store, history } from './store';
// pages
import pages from './pages';
// actions
import { hideMobileMenu } from './actions';

function handleChange() {
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
	page.init( uri, query, search );
	
} );