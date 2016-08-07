// deps
import store from '../../store';
// actions
import { formPostsTop, switchPostsTopState } from './actions';

/**
 *	Prepare to fetch data in component
 *	
 *	triggered by - pageDataFormed
 */

let prevPageDataStamp = 0;
function fetchChanger() {
	let currentState = store.getState();

	// checking if there is need to process
	let pageDataFormed = currentState.pages.state.pageDataFormed;
	if ( pageDataFormed.stamp === prevPageDataStamp ) {
		return;
	}
	prevPageDataStamp = pageDataFormed.stamp;

	let isCached = currentState.components.postsTop.state.isCached;

	// forming conditions
	let conds = [ 
		pageDataFormed.value === true,
		isCached.value === false,
	];

	// perform actions depending on conditions
	if ( conds[0] && conds[1] ) {
		console.log( 'postsTop - hide' )
		store.dispatch( switchPostsTopState({ 
			render: {
				value: false,
				stamp: Date.now()
			} 
		}) );

		console.log( 'postsTop - needToFetch' );
		store.dispatch( switchPostsTopState({ 
			needToFetch: {
				value: true,
				stamp: Date.now()
			} 
		}) );
	};
	
}

/**
 *	Forming component
 *	
 *	triggered by - dataReady
 */

let prevDataReadyStamp = 0;
function componentFormer() {
	let currentState = store.getState();

	// checking if there is need to process
	let dataReady = currentState.modules.dataFetch.state.postsTopReady;

	if ( dataReady.stamp === prevDataReadyStamp ) {
		return;
	}
	prevDataReadyStamp = dataReady.stamp;

	// forming conditions
	let conds = [ dataReady.value === true ];

	// perform actions depending on conditions
	if ( conds[0] ) {
		let postsTopData = currentState.modules.dataFetch.data.postsTop;
		let pageData = currentState.pages.pageData;

		console.log( 'postsTop - isFetched' );
		store.dispatch( switchPostsTopState({ 
			needToFetch: {
				value: false,
				stamp: Date.now()
			},
			isFetched: {
				value: true,
				stamp: Date.now()
			}
		}) );

		console.log( 'postsTop - forming' );
		store.dispatch( formPostsTop( postsTopData, pageData ) );

		console.log( 'postsTop - isFormed' );
		store.dispatch( switchPostsTopState({ 
			isFormed: {
				value: true,
				stamp: Date.now()
			}
		}) );

		console.log( 'postsTop - render' );
		store.dispatch( switchPostsTopState({ 
			render: {
				value: true,
				stamp: Date.now()
			}
		}) );

	}
}


/**
 *	Cache component
 *	
 *	triggered by - isFormed
 */

let prevIsFormedStamp = 0;
function componentCache() {
	let currentState = store.getState();

	// checking if there is need to process
	let isFormed = currentState.components.postsTop.state.isFormed;

	if ( isFormed.stamp === prevIsFormedStamp ) {
		return;
	}
	prevIsFormedStamp = isFormed.stamp;

	// forming conditions
	let conds = [ isFormed.value === true ];

	// perform actions depending on conditions
	if ( conds[0] ) {
		console.log( 'postsTop - caching' );
		store.dispatch( switchPostsTopState({ 
			isCached: {
				value: true,
				stamp: Date.now()
			}
		}) );
	}
}

// subscribe handlers
store.subscribe( fetchChanger );
store.subscribe( componentFormer );
store.subscribe( componentCache );