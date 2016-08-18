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

	let disqusRender = currentState.components.disqus.state.render;

	// forming conditions
	let conds = [ 
		keyPosReached.value === true,
		disqusRender.value === false
	];

	// perform actions depending on conditions
	if ( conds[0] && conds[1] ) {
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

/**
 *	show disqus when entering with #disqus_thread hash
 *	
 *	triggered by - page
 */

let prevPageDataStamp = 0;
function showImmidiatelyDisqus() {
	let currentState = store.getState();

	// checking if there is need to process
	let pageDataFormed = currentState.pages.state.pageDataFormed;
	if ( pageDataFormed.stamp === prevPageDataStamp ) {
		return;
	}
	prevPageDataStamp = pageDataFormed.stamp;

	let pageData = currentState.pages.pageData;

	// forming conditions
	let conds = [ 
		pageData.hash === '#disqus_thread'
	];

	// perform actions depending on conditions
	if ( conds[0] ) {
		console.log( 'disqus - show immidiately' );
		store.dispatch( switchDisqusState({ 
			render: {
				value: true,
				stamp: Date.now()
			}
		}) );
	};
	
};

// subscribe handlers
store.subscribe( renderDisqus );
store.subscribe( hideDisqus );
store.subscribe( showImmidiatelyDisqus );