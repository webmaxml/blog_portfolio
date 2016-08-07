// deps
import store from '../../store';
// actions
import { formPost, switchPostItemState } from './actions';

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
		currentPage.value === 'post',
		pageDataFormed.value === true
	];

	// perform actions depending on conditions
	if ( conds[0] && conds[1] ) {
		console.log( 'postItem - hide' )
		store.dispatch( switchPostItemState({ 
			render: {
				value: false,
				stamp: Date.now()
			} 
		}) );

		console.log( 'postItem - needToFetch' );
		store.dispatch( switchPostItemState({ 
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
	let dataReady = currentState.modules.dataFetch.state.postItemReady;

	if ( dataReady.stamp === prevDataReadyStamp ) {
		return;
	}
	prevDataReadyStamp = dataReady.stamp;

	// forming conditions
	let conds = [ dataReady.value === true ];

	// perform actions depending on conditions
	if ( conds[0] ) {
		let postData = currentState.modules.dataFetch.data.postItem;
		let pageData = currentState.pages.pageData;

		console.log( 'postItem - isFetched' );
		store.dispatch( switchPostItemState({ 
			needToFetch: {
				value: false,
				stamp: Date.now()
			},
			isFetched: {
				value: true,
				stamp: Date.now()
			}
		}) );

		console.log( 'postItem - forming' );
		store.dispatch( formPost( postData, pageData ) );

		console.log( 'postItem - isFormed' );
		store.dispatch( switchPostItemState({ 
			isFormed: {
				value: true,
				stamp: Date.now()
			}
		}) );

		console.log( 'postItem - render' );
		store.dispatch( switchPostItemState({ 
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