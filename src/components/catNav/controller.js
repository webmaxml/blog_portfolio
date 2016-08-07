// deps
import store from '../../store';
// actions
import { formCats, switchCatsState } from './actions';

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

	let isCached = currentState.components.categories.state.isCached;

	// forming conditions
	let conds = [ 
		pageDataFormed.value === true,
		isCached.value === false,
	];

	// perform actions depending on conditions
	if ( conds[0] && conds[1] ) {
		console.log( 'cats - hide' )
		store.dispatch( switchCatsState({ 
			render: {
				value: false,
				stamp: Date.now()
			} 
		}) );

		console.log( 'cats - needToFetch' );
		store.dispatch( switchCatsState({ 
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
	let dataReady = currentState.modules.dataFetch.state.catsNavReady;

	if ( dataReady.stamp === prevDataReadyStamp ) {
		return;
	}
	prevDataReadyStamp = dataReady.stamp;

	// forming conditions
	let conds = [ dataReady.value === true ];

	// perform actions depending on conditions
	if ( conds[0] ) {
		let catsData = currentState.modules.dataFetch.data.catsNav;
		let pageData = currentState.pages.pageData;

		console.log( 'cats - isFetched' );
		store.dispatch( switchCatsState({ 
			needToFetch: {
				value: false,
				stamp: Date.now()
			},
			isFetched: {
				value: true,
				stamp: Date.now()
			}
		}) );

		console.log( 'cats - forming' );
		store.dispatch( formCats( catsData, pageData ) );

		console.log( 'cats - isFormed' );
		store.dispatch( switchCatsState({ 
			isFormed: {
				value: true,
				stamp: Date.now()
			}
		}) );

	}
}

/**
 *	Rendering component
 *	
 *	triggered by - catsEnable
 */

let prevCatsEnableStamp = 0;
function componentRender() {
	let currentState = store.getState();

	// checking if there is need to process
	let catsEnable = currentState.components.mainNav.state.catsEnable;

	if ( catsEnable.stamp === prevCatsEnableStamp ) {
		return;
	}
	prevCatsEnableStamp = catsEnable.stamp;

	// forming conditions
	let conds = [ 
		catsEnable.value === true,
		catsEnable.value === false,
	];

	// perform actions depending on conditions
	if ( conds[0] ) {
		console.log( 'cats - showing' );
		store.dispatch( switchCatsState({ 
			render: {
				value: true,
				stamp: Date.now()
			} 
		}) );
	}

	if ( conds[1] ) {
		console.log( 'cats - hiding' );
		store.dispatch( switchCatsState({ 
			render: {
				value: false,
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
	let isFormed = currentState.components.categories.state.isFormed;

	if ( isFormed.stamp === prevIsFormedStamp ) {
		return;
	}
	prevIsFormedStamp = isFormed.stamp;

	// forming conditions
	let conds = [ isFormed.value === true ];

	// perform actions depending on conditions
	if ( conds[0] ) {
		console.log( 'cats - caching' );
		store.dispatch( switchCatsState({ 
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
store.subscribe( componentRender );
store.subscribe( componentCache );