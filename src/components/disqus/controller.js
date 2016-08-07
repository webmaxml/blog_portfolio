// deps
import store from '../../store';
// actions
import { switchDisqusState } from './actions';

/**
 *	render disqus on scroll
 *	
 *	triggered by - keyPosReached
 */

let prevReachedStamp = 0;
function renderDisqus() {
	let currentState = store.getState();

	// checking if there is need to process
	let keyPosReached = currentState.modules.windowReducer.state.keyPosReached;
	if ( keyPosReached.stamp === prevReachedStamp ) {
		return;
	}
	prevReachedStamp = keyPosReached.stamp;

	// forming conditions
	let conds = [ 
		keyPosReached.value === true
	];

	// perform actions depending on conditions
	if ( conds[0] ) {
		console.log( 'disqus - render' );
		store.dispatch( switchDisqusState({ 
			render: {
				value: true,
				stamp: Date.now()
			}
		}) );
	};
	
};

/**
 *	hide disqus on page change
 *	
 *	triggered by - page
 */

let prevPageStamp = 0;
function hideDisqus() {
	let currentState = store.getState();

	// checking if there is need to process
	let currentPage = currentState.pages.state.currentPage;
	if ( currentPage.stamp === prevPageStamp ) {
		return;
	}
	prevPageStamp = currentPage.stamp;

	let disqusRender = currentState.components.disqus.state.render;

	// forming conditions
	let conds = [ 
		disqusRender.value === true
	];

	// perform actions depending on conditions
	if ( conds[0] ) {
		console.log( 'disqus - hide' );
		store.dispatch( switchDisqusState({ 
			render: {
				value: false,
				stamp: Date.now()
			}
		}) );
	};
	
};


// subscribe handlers
store.subscribe( renderDisqus );
store.subscribe( hideDisqus );