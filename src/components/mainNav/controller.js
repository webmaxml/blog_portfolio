// deps
import store from '../../store';
// actions
import { switchMainNavState } from './actions';

/**
 *	Switch active nav items on page change
 *	
 *	triggered by - page
 */

let prevPageStamp = 0;
function switchActiveItems() {
	let currentState = store.getState();

	// checking if there is need to process
	let currentPage = currentState.pages.state.currentPage;
	if ( currentPage.stamp === prevPageStamp ) {
		return;
	}
	prevPageStamp = currentPage.stamp;

	// forming conditions
	let conds = [
		currentPage.value === 'contact',
		currentPage.value === 'quotes',
		currentPage.value === '404',
	];

	// perform actions depending on conditions
	if ( conds[0] ) {
		console.log( 'mainNav - switch active item' )
		store.dispatch( switchMainNavState({ 
			activeItem: {
				value: 'contact',
				stamp: Date.now()
			} 
		}) );
	} else if ( conds[1] ) {
		console.log( 'mainNav - switch active item' )
		store.dispatch( switchMainNavState({ 
			activeItem: {
				value: 'quotes',
				stamp: Date.now()
			} 
		}) );
	} else if ( conds[2] ) {
		console.log( 'mainNav - switch active item' )
		store.dispatch( switchMainNavState({ 
			activeItem: {
				value: 'none',
				stamp: Date.now()
			} 
		}) );
	} else {
		console.log( 'mainNav - switch active item' )
		store.dispatch( switchMainNavState({ 
			activeItem: {
				value: 'blog',
				stamp: Date.now()
			} 
		}) );
	}
	
}


// subscribe handlers
store.subscribe( switchActiveItems );