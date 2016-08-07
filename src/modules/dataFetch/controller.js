// deps
import store from '../../store';
import { getComponentData, fetchCacheCleaner } from './data';
// actions
import { postComponentData, switchFetchState } from './actions';

/**
 *	Cleaning fetch cache
 *	
 *	triggered by - currentPage
 */

let prevPageStamp = 0; 
function cacheCleaner() {
	let currentState = store.getState();

	// checking if there is need to process
	let currentPage = currentState.pages.state.currentPage;

	if ( currentPage.stamp === prevPageStamp ) {
		return;
	}
	prevPageStamp = currentPage.stamp;

	// clean the fetch cache
	fetchCacheCleaner();
}

/**
 *	Fetch postIndex data and norify on ready
 *	
 *	triggered by - postIndex--needToFetch
 */

let prevPostIndexNeedStamp = 0;
function postIndexfetcher() {
	let currentState = store.getState();

	// checking if there is need to process
	let postIndexNeed = currentState.components.postIndex.state.needToFetch;

	if ( postIndexNeed.stamp === prevPostIndexNeedStamp ) {
		return;
	}
	prevPostIndexNeedStamp = postIndexNeed.stamp;

	// performing action
	if ( postIndexNeed.value === true ) {	
		let pageData = currentState.pages.pageData;
		let postIndexApi = currentState.components.postIndex.api;

		getComponentData( postIndexApi, pageData )
			.then( result => store.dispatch( postComponentData({ postIndex: result }) ) )
			.then( () => {
				console.log( 'dataFetch - postIndex-ready' );
				store.dispatch( switchFetchState({
					postIndexReady: {
						value: true,
						stamp: Date.now()
					}
				}) ) 
			} );
	}
}

/**
 *	Fetch categories data and norify on ready
 *	
 *	triggered by - cats--needToFetch
 */

let prevCatsNeedStamp = 0;
function catsfetcher() {
	let currentState = store.getState();

	// checking if there is need to process
	let catsNeed = currentState.components.categories.state.needToFetch;

	if ( catsNeed.stamp === prevCatsNeedStamp ) {
		return;
	}
	prevCatsNeedStamp = catsNeed.stamp;

	// performing action
	if ( catsNeed.value === true ) {
		let pageData = currentState.pages.pageData;
		let catsApi = currentState.components.categories.api;

		getComponentData( catsApi, pageData )
			.then( result => store.dispatch( postComponentData({ catsNav: result }) ) )
			.then( () => {
				console.log( 'dataFetch - cats-ready' );
				store.dispatch( switchFetchState({
					catsNavReady: {
						value: true,
						stamp: Date.now()
					}
				}) ) 
			});
	}
}

/**
 *	Fetch postsTop data and norify on ready
 *	
 *	triggered by - postsTop--needToFetch
 */

let prevTopNeedStamp = 0;
function postsTopfetcher() {
	let currentState = store.getState();

	// checking if there is need to process
	let topNeed = currentState.components.postsTop.state.needToFetch;

	if ( topNeed.stamp === prevTopNeedStamp ) {
		return;
	}
	prevTopNeedStamp = topNeed.stamp;

	// performing action
	if ( topNeed.value === true ) {
		let pageData = currentState.pages.pageData;
		let postsTopApi = currentState.components.postsTop.api;

		getComponentData( postsTopApi, pageData )
			.then( result => store.dispatch( postComponentData({ postsTop: result }) ) )
			.then( () => {
				console.log( 'dataFetch - postsTop-ready' );
				store.dispatch( switchFetchState({
					postsTopReady: {
						value: true,
						stamp: Date.now()
					}
				}) ) 
			});
	}
}

/**
 *	Fetch archive data and norify on ready
 *	
 *	triggered by - archive--needToFetch
 */

let prevArchiveNeedStamp = 0;
function archivefetcher() {
	let currentState = store.getState();

	// checking if there is need to process
	let archiveNeed = currentState.components.dateArchive.state.needToFetch;

	if ( archiveNeed.stamp === prevArchiveNeedStamp ) {
		return;
	}
	prevArchiveNeedStamp = archiveNeed.stamp;

	// performing action
	if ( archiveNeed.value === true ) {
		let pageData = currentState.pages.pageData;
		let archiveApi = currentState.components.dateArchive.api;

		getComponentData( archiveApi, pageData )
			.then( result => store.dispatch( postComponentData({ archive: result }) ) )
			.then( () => {
				console.log( 'dataFetch - archive-ready' );
				store.dispatch( switchFetchState({
					archiveReady: {
						value: true,
						stamp: Date.now()
					}
				}) ) 
			});
	}
}

/**
 *	Fetch postItem data and norify on ready
 *	
 *	triggered by - postItem--needToFetch
 */

let prevPostNeedStamp = 0;
function postItemfetcher() {
	let currentState = store.getState();

	// checking if there is need to process
	let postNeed = currentState.components.postItem.state.needToFetch;

	if ( postNeed.stamp === prevPostNeedStamp ) {
		return;
	}
	prevPostNeedStamp = postNeed.stamp;

	// performing action
	if ( postNeed.value === true ) {
		let pageData = currentState.pages.pageData;
		let postApi = currentState.components.postItem.api;

		getComponentData( postApi, pageData )
			.then( result => store.dispatch( postComponentData({ postItem: result }) ) )
			.then( () => {
				console.log( 'dataFetch - postItem-ready' );
				store.dispatch( switchFetchState({
					postItemReady: {
						value: true,
						stamp: Date.now()
					}
				}) ) 
			});
	}
}

/**
 *	Fetch similarPosts data and norify on ready
 *	
 *	triggered by - similarPosts--needToFetch
 */

let prevSimilarNeedStamp = 0;
function similarPostsfetcher() {
	let currentState = store.getState();

	// checking if there is need to process
	let similarNeed = currentState.components.similarPosts.state.needToFetch;

	if ( similarNeed.stamp === prevSimilarNeedStamp ) {
		return;
	}
	prevSimilarNeedStamp = similarNeed.stamp;

	// performing action
	if ( similarNeed.value === true ) {
		let pageData = currentState.pages.pageData;
		let similarPostsApi = currentState.components.similarPosts.api;

		getComponentData( similarPostsApi, pageData )
			.then( result => store.dispatch( postComponentData({ similarPosts: result }) ) )
			.then( () => {
				console.log( 'dataFetch - similarPosts-ready' );
				store.dispatch( switchFetchState({
					similarPostsReady: {
						value: true,
						stamp: Date.now()
					}
				}) ) 
			});
	}
}

// subscribe listener
store.subscribe( cacheCleaner );
store.subscribe( postIndexfetcher );
store.subscribe( catsfetcher );
store.subscribe( postsTopfetcher );
store.subscribe( archivefetcher );
store.subscribe( postItemfetcher );
store.subscribe( similarPostsfetcher );