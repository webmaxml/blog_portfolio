// deps
import store from '../../store';
// actions
import { formQuotes, switchQuotesState } from './actions';

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
		currentPage.value === 'quotes',
		pageDataFormed.value === true
	];

	// perform actions depending on conditions
	if ( conds[0] && conds[1] ) {
		console.log( 'quotes - hide' )
		store.dispatch( switchQuotesState({ 
			render: {
				value: false,
				stamp: Date.now()
			} 
		}) );

		console.log( 'postItem - needToFetch' );
		store.dispatch( switchQuotesState({ 
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
	let dataReady = currentState.modules.dataFetch.state.quotesReady;

	if ( dataReady.stamp === prevDataReadyStamp ) {
		return;
	}
	prevDataReadyStamp = dataReady.stamp;

	// forming conditions
	let conds = [ dataReady.value === true ];

	// perform actions depending on conditions
	if ( conds[0] ) {
		let postData = currentState.modules.dataFetch.data.quotes;
		let pageData = currentState.pages.pageData;

		console.log( 'quotes - isFetched' );
		store.dispatch( switchQuotesState({ 
			needToFetch: {
				value: false,
				stamp: Date.now()
			},
			isFetched: {
				value: true,
				stamp: Date.now()
			}
		}) );

		console.log( 'quotes - forming' );
		store.dispatch( formQuotes( postData, pageData ) );

		console.log( 'quotes - isFormed' );
		store.dispatch( switchQuotesState({ 
			isFormed: {
				value: true,
				stamp: Date.now()
			}
		}) );

		console.log( 'quotes - render' );
		store.dispatch( switchQuotesState({ 
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