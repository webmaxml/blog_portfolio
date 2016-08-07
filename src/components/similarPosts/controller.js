// deps
import store from '../../store';
// actions
import { formSimilarPosts, switchSimilarPostsState } from './actions';

/**
 *	Prepare to fetch data in component
 *	
 *	triggered by - postItemRender
 */

let prevPostRenderStamp = 0;
function fetchChanger() {
	let currentState = store.getState();

	// checking if there is need to process
	let postItemRender = currentState.components.postItem.state.render;
	if ( postItemRender.stamp === prevPostRenderStamp ) {
		return;
	}
	prevPostRenderStamp = postItemRender.stamp;

	let currentPage = currentState.pages.state.currentPage;
	let pageDataFormed = currentState.pages.state.pageDataFormed;

	// forming conditions
	let conds = [ 
		postItemRender.value === true,
		currentPage.value === 'post',
		pageDataFormed.value === true
	];

	// perform actions depending on conditions
	if ( conds[0] && conds[1] && conds[2] ) {
		console.log( 'similarPosts - hide' )
		store.dispatch( switchSimilarPostsState({ 
			render: {
				value: false,
				stamp: Date.now()
			} 
		}) );

		console.log( 'similarPosts - needToFetch' );
		store.dispatch( switchSimilarPostsState({ 
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
	let dataReady = currentState.modules.dataFetch.state.similarPostsReady;

	if ( dataReady.stamp === prevDataReadyStamp ) {
		return;
	}
	prevDataReadyStamp = dataReady.stamp;

	// forming conditions
	let conds = [ dataReady.value === true ];

	// perform actions depending on conditions
	if ( conds[0] ) {
		let similarData = currentState.modules.dataFetch.data.similarPosts;
		let pageData = currentState.pages.pageData;

		console.log( 'similarPosts - isFetched' );
		store.dispatch( switchSimilarPostsState({ 
			needToFetch: {
				value: false,
				stamp: Date.now()
			},
			isFetched: {
				value: true,
				stamp: Date.now()
			}
		}) );

		console.log( 'similarPosts - forming' );
		store.dispatch( formSimilarPosts( similarData, pageData ) );

		console.log( 'similarPosts - isFormed' );
		store.dispatch( switchSimilarPostsState({ 
			isFormed: {
				value: true,
				stamp: Date.now()
			}
		}) );

		console.log( 'similarPosts - render' );
		store.dispatch( switchSimilarPostsState({ 
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