// deps
import store from '../../store';
// actions
import { formDateArchive, switchArchiveState } from './actions';

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

	let isCached = currentState.components.dateArchive.state.isCached;

	// forming conditions
	let conds = [ 
		pageDataFormed.value === true,
		isCached.value === false,
	];

	// perform actions depending on conditions
	if ( conds[0] && conds[1] ) {
		console.log( 'archive - hide' )
		store.dispatch( switchArchiveState({ 
			render: {
				value: false,
				stamp: Date.now()
			} 
		}) );

		console.log( 'archive - needToFetch' );
		store.dispatch( switchArchiveState({ 
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
	let dataReady = currentState.modules.dataFetch.state.archiveReady;

	if ( dataReady.stamp === prevDataReadyStamp ) {
		return;
	}
	prevDataReadyStamp = dataReady.stamp;

	// forming conditions
	let conds = [ dataReady.value === true ];

	// perform actions depending on conditions
	if ( conds[0] ) {
		let archiveData = currentState.modules.dataFetch.data.archive;
		let pageData = currentState.pages.pageData;

		console.log( 'archive - isFetched' );
		store.dispatch( switchArchiveState({ 
			needToFetch: {
				value: false,
				stamp: Date.now()
			},
			isFetched: {
				value: true,
				stamp: Date.now()
			}
		}) );

		console.log( 'archive - forming' );
		store.dispatch( formDateArchive( archiveData, pageData ) );

		console.log( 'archive - isFormed' );
		store.dispatch( switchArchiveState({ 
			isFormed: {
				value: true,
				stamp: Date.now()
			}
		}) );

		console.log( 'archive - render' );
		store.dispatch( switchArchiveState({ 
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
	let isFormed = currentState.components.dateArchive.state.isFormed;

	if ( isFormed.stamp === prevIsFormedStamp ) {
		return;
	}
	prevIsFormedStamp = isFormed.stamp;

	// forming conditions
	let conds = [ isFormed.value === true ];

	// perform actions depending on conditions
	if ( conds[0] ) {
		console.log( 'archive - caching' );
		store.dispatch( switchArchiveState({ 
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