// store
import { store, history } from './store';
// actions
import { fetchRoot, fetchPostPage } from './actions';

function handleChange() {
	// console.log( store.getState() );
}

store.subscribe( handleChange );

history.listen( location => {
	if ( location.pathname === '/' ) {
		store.dispatch( fetchRoot() );
	}

	if ( location.pathname === '/post/4' || location.pathname === 'post/4' ) {
		store.dispatch( fetchPostPage( 4 ) );
	}
	
} );
