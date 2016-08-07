// deps
import store from '../../store';
// actions
import { switchPostIndexMode, 
	  	 formPostIndex, 
	  	 switchPostIndexState } from './actions';

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

	let currentPage = currentState.pages.state.currentPage;

	// forming conditions
	let conds = [
		currentPage.value === 'root' || currentPage.value === 'postsPage',
		currentPage.value === 'catsPage',
		currentPage.value === 'tagsPage',
		currentPage.value === 'archivePage',
		currentPage.value === 'searchPage',
		pageDataFormed.value === true,
	];

	// perform actions depending on conditions
	if ( conds[0] && conds[5] ) {
		hideAndFetch( 'posts' );
	};

	if ( conds[1] && conds[5] ) {
		hideAndFetch( 'cats' );
	}; 

	if ( conds[2] && conds[5] ) {
		hideAndFetch( 'tags' );
	}; 

	if ( conds[3] && conds[5] ) {
		hideAndFetch( 'archive' );
	}; 

	if ( conds[4] && conds[5] ) {
		hideAndFetch( 'search' );
	}; 
	
}

/**
 *	Forming and rendering component
 *	
 *	triggered by - postIndexReady
 */

let prevDataReadyStamp = 0;
function componentFormer() {
	let currentState = store.getState();

	// checking if there is need to process
	let dataReady = currentState.modules.dataFetch.state.postIndexReady;

	if ( dataReady.stamp === prevDataReadyStamp ) {
		return;
	}
	prevDataReadyStamp = dataReady.stamp;

	// forming conditions
	let conds = [ dataReady.value === true ];

	// perform actions depending on conditions
	if ( conds[0] ) {
		let postIndexData = currentState.modules.dataFetch.data.postIndex;
		let pageData = currentState.pages.pageData;

		console.log( 'postIndex - isFetched' );
		store.dispatch( switchPostIndexState({ 
			needToFetch: {
				value: false,
				stamp: Date.now()
			},
			isFetched: {
				value: true,
				stamp: Date.now()
			}
		}) );

		console.log( 'postIndex - forming' );
		store.dispatch( formPostIndex( postIndexData, pageData ) );

		console.log( 'postIndex - isFormed' );
		store.dispatch( switchPostIndexState({ 
			isFormed: {
				value: true,
				stamp: Date.now()
			}
		}) );

		console.log( 'postIndex - showing' );
		store.dispatch( switchPostIndexState({ 
			render: {
				value: true,
				stamp: Date.now()
			}
		}) );
	}
}

// subscribe handlers
store.subscribe( fetchChanger );
store.subscribe( componentFormer );

// helpers
function hideAndFetch( mode ) {
	console.log( 'postIndex - hide' )
	store.dispatch( switchPostIndexState({ 
		render: {
			value: false,
			stamp: Date.now()
		} 
	}) );

	console.log( 'postIndex - switch mode' )
	store.dispatch( switchPostIndexMode( mode ) );

	console.log( 'postIndex - needToFetch' );
	store.dispatch( switchPostIndexState({ 
		needToFetch: {
			value: true,
			stamp: Date.now()
		} 
	}) );
};