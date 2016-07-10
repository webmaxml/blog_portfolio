// store
import { store, history } from './store';
// actions
import { fetchRoot, fetchPostPage } from './actions';

function handleChange() {
	// console.log( store.getState() );
}

store.subscribe( handleChange );

history.listen( location => {
	let path = location.pathname;

	const rootReg = /^\/#?$/;
	const postReg = /^\/?post\/\d+\/?$/;

	switch ( true ) {
		case rootReg.test( path ):
			store.dispatch( fetchRoot() );
			break;
		case postReg.test( path ):
			let postId = path.slice( path.search(/\d+$/) );
			console.log( postId );
			store.dispatch( fetchPostPage( postId ) );
			break;
	}
	
} );
