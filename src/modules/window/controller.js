// deps
import store from '../../store';
// actions
import { switchWindowState } from './actions';


function scrollHandler( event ) {
	let keyCoord = store.getState().components.similarPosts.topCoord;
	let currentPos = window.innerHeight + window.pageYOffset;

	if ( currentPos > keyCoord ) {
		console.log( 'window - key pos reached' );
		store.dispatch( switchWindowState({ 
			keyPosReached: {
				value: true,
				stamp: Date.now()
			}
		}) );

		removeAndReset();
	}
}

function removeAndReset() {
	window.removeEventListener( 'scroll', throttled );

	console.log( 'window - listener remove nad reset' );
	store.dispatch( switchWindowState({ 
		listenerSet: {
			value: false,
			stamp: Date.now()
		},
		keyPosReached: {
			value: false,
			stamp: Date.now()
		}
	}) );
}

let throttled = _.throttle( scrollHandler, 300 );

/**
 *	remove scrollListener to similarPosts and reset states
 *	
 *	triggered by - page
 */

let prevPageStamp = 0;
function removeScrollListener() {
	let currentState = store.getState();

	// checking if there is need to process
	let currentPage = currentState.pages.state.currentPage;
	if ( currentPage.stamp === prevPageStamp ) {
		return;
	}
	prevPageStamp = currentPage.stamp;

	let listenerSet = currentState.modules.windowReducer.state.listenerSet;

	// forming conditions
	let conds = [ 
		listenerSet.value === true
	];

	// perform actions depending on conditions
	if ( conds[0] ) {
		removeAndReset();
	};
	
}

/**
 *	Set scrollListener to similarPosts
 *	
 *	triggered by - coordPosted
 */

let prevCoordStamp = 0;
function setScrollListener() {
	let currentState = store.getState();

	// checking if there is need to process
	let coordPosted = currentState.components.similarPosts.state.coordPosted;
	if ( coordPosted.stamp === prevCoordStamp ) {
		return;
	}
	prevCoordStamp = coordPosted.stamp;

	let currentPage = currentState.pages.state.currentPage;

	// forming conditions
	let conds = [ 
		currentPage.value === 'post',
		coordPosted.value === true
	];

	// perform actions depending on conditions
	if ( conds[0] && conds[1] ) {
		
		window.addEventListener( 'scroll', throttled );

		console.log( 'window - listener set' );
		store.dispatch( switchWindowState({ 
			listenerSet: {
				value: true,
				stamp: Date.now()
			}
		}) );
	};
	
}

// subscribe handlers
store.subscribe( removeScrollListener );
store.subscribe( setScrollListener );