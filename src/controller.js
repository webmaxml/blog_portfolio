// store
import { store, history } from './store';
// pages
import pages from './pages';

function handleChange() {
	// console.log( store.getState() );
}

store.subscribe( handleChange );

history.listen( location => {

	console.log( location );

	window.scrollTo( 0, 0 );

	let uri = location.pathname;
	let page = _.find( pages, item => item.reg.test( uri ) )
	page.init( uri )
	
} );