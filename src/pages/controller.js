// deps
import store from '../store';
import history from '../history';

history.listen( location => {

	// scroll to top on url change
	window.scrollTo( 0, 0 );

	// store data
	let currentState = store.getState();
	let pages = currentState.pages.items;
	let switchPageState = currentState.pages.actions.switchPageState;
	let formPageData = currentState.pages.actions.formPageData;

	// url data
	let uri = location.pathname;
	let query = location.query;
	let search = location.search;

	// find the current page and get page data
	let page = _.find( pages, item => item.reg.test( uri ) )

	if ( typeof page === 'undefined' ) { 
		page = pages[404];
	} 

	let pageData = page.getPageData( uri, query, search );

	// write page data and switch page state
	console.log( 'page data' );
	store.dispatch( formPageData( pageData ) );
	console.log( 'page state' );
	store.dispatch( switchPageState( {
		currentPage: {
			value: page.name,
			stamp: Date.now()
		},
		pageDataFormed: {
			value: true,
			stamp: Date.now()
		}
	} ) );

	
} );