// store
import { store, history } from './store';
// pages
import pages from './pages';

function handleChange() {
	// console.log( store.getState() );
}

store.subscribe( handleChange );

history.listen( location => {

	window.scrollTo( 0, 0 );

	let uri = location.pathname;
	// find the current page
	let page = _.find( pages, item => item.reg.test( uri ) )
	page.init( uri )
	
} );