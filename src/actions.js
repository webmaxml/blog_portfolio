// deps
import fetch from 'isomorphic-fetch';
// entry
import { postsApi } from './entry'; 

/**
 * Posts index
 ************************/

 // requesting posts index
export const REQUEST_POSTS = 'REQUEST_POSTS';
export function requestPosts() {
	return {
		type: REQUEST_POSTS,
	};
};

// receiving posts index
export const RECEIVE_POSTS = 'RECEIVE_POSTS';
export function receivePosts( json ) {
	return {
		type: RECEIVE_POSTS,
		json
	};
};

// requesting and receiving posts index
export function fetchPosts() {
	return function( dispatch, getState ) {
		dispatch( requestPosts() );

		return fetch( postsApi )
			   .then( response => response.json() )
			   .then( json => dispatch( receivePosts( json ) ) )
	};
};
