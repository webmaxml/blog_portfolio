// store
import { store, history } from './store';
// actions
import { fetchRoot } from './actions';

function handleChange() {
	console.log( store.getState() );
}

store.subscribe( handleChange );

history.listen( location => {
	store.dispatch( fetchRoot() );
} );
