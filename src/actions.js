// deps
import fetch from 'isomorphic-fetch';
// entry
import { postsApi,
		 catsApi } from './entry'; 

/**
 * Posts
 ************************/

//  // requesting posts
// export const REQUEST_POSTS = 'REQUEST_POSTS';
// export function requestPosts() {
// 	return {
// 		type: REQUEST_POSTS,
// 	};
// };

// // receiving posts
// export const RECEIVE_POSTS = 'RECEIVE_POSTS';
// export function receivePosts( json ) {
// 	return {
// 		type: RECEIVE_POSTS,
// 		json
// 	};
// };


// // requesting and receiving posts
// export function fetchPosts() {
// 	return function( dispatch, getState ) {
// 		dispatch( requestPosts() );

// 		return fetch( postsApi )
// 				.then( response => response.json() )
// 			    .then( json => dispatch( receivePosts( json ) ) )
// 	};
// };

// form post index state
export const FORM_POST_INDEX = 'FORM_POST_INDEX';
export function formPostIndex( result ) {
	return {
		type: FORM_POST_INDEX,
		result
	};
};



/**
 * Categories
 ************************/

//  // requesting categories
// export const REQUEST_CATS = 'REQUEST_CATS';
// export function requestCats() {
// 	return {
// 		type: REQUEST_CATS,
// 	};
// };

// // receiving categories
// export const RECEIVE_CATS = 'RECEIVE_CATS';
// export function receiveCats( json ) {
// 	return {
// 		type: RECEIVE_CATS,
// 		json
// 	};
// };

// // requesting and receiving categories
// export function fetchCats() {
// 	return function( dispatch, getState ) {
// 		dispatch( requestCats() );

// 		return fetch( catsApi )
// 			   .then( response => response.json() )
// 			   .then( json => dispatch( receiveCats( json ) ) )
// 	};
// };

// /**
//  * Common
//  ************************/

//  // requesting common
// export const REQUEST_COMMON = 'REQUEST_COMMON';
// export function requestCommon() {
// 	return {
// 		type: REQUEST_COMMON,
// 	};
// };

// // receiving common
// export const RECEIVE_COMMON = 'RECEIVE_COMMON';
// export function receiveCommon( json ) {
// 	return {
// 		type: RECEIVE_COMMON,
// 	};
// };

// export function fetchCommon() {
// 	return function( dispatch, getState ) {
// 		dispatch( requestCommon() );

// 		return Promise.all([ dispatch( fetchCats() ) ])
// 				.then( () => dispatch( receiveCommon() ) )
// 	};
// };


/**
 * Initial fetch
 ************************/

export function fetchRoot() {
	return function( dispatch, getState ) {
		if ( getState().components.postIndex.needToFetch ) {
			let postsFetch = fetch( postsApi ).then( response => response.json() );
			let catsFetch = fetch( catsApi ).then( response => response.json() );

			// post Index
			Promise.all([ postsFetch, catsFetch ])
				.then( result => dispatch( formPostIndex( result ) ) );
		}
		

		
	};
};
