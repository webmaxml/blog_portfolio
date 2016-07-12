// store
import { store, history } from './store';
// actions
import { initRoot, initPostPage } from './actions';

function handleChange() {
	// console.log( store.getState() );
}

store.subscribe( handleChange );

history.listen( location => {

	window.scrollTo( 0, 0 );

	let path = location.pathname;

	const rootReg = /^\/#?$/;
	const postReg = /^\/?post\/\d+\/?$/;

	switch ( true ) {
		case rootReg.test( path ):
			store.dispatch( initRoot() );
			break;
		case postReg.test( path ):
			let postId = path.slice( path.search(/\d+$/) );
			store.dispatch( initPostPage( postId ) );
			break;
	}
	
} );
