// deps
import store from '../store';
import history from '../history';

history.listen( location => {

	// scroll to top on url change
	window.scrollTo( 0, 0 );

	// url data
	let uri = location.pathname;
	let query = location.query;
	let search = location.search;

	// store data
	const currentState = store.getState();
	const pages = currentState.pages.items;
	const initPage = currentState.pages.actions.initPage;
	const hideMobileMenu = currentState.components.mobileMenu.actions.hide;

	// hide mobile menu on url change
	store.dispatch( hideMobileMenu() );

	// find the current page and init it with data
	let page = _.find( pages, item => item.reg.test( uri ) )
	let pageData = page.getPageData( uri, query, search );

	store.dispatch( initPage( ...pageData ) );
	
} );