// deps
import fetch from 'isomorphic-fetch';
// entry
import { postsApi,
		 postApi,
		 catsApi } from './entry'; 

/**
 * Post Index
 ************************/

// form post index state
export const FORM_POST_INDEX = 'FORM_POST_INDEX';
export function formPostIndex( result ) {
	return {
		type: FORM_POST_INDEX,
		result
	};
};

// render post index
export const RENDER_POST_INDEX = 'RENDER_POST_INDEX';
export function renderPostIndex() {
	return {
		type: RENDER_POST_INDEX,
	};
};


// unrender post index
export const UNRENDER_POST_INDEX = 'UNRENDER_POST_INDEX';
export function unrenderPostIndex() {
	return {
		type: UNRENDER_POST_INDEX,
	};
};


/**
 * Post
 ************************/

// form post state
export const FORM_POST = 'FORM_POST';
export function formPost( result ) {
	return {
		type: FORM_POST,
		result
	};
};

// render post 
export const RENDER_POST = 'RENDER_POST';
export function renderPost() {
	return {
		type: RENDER_POST,
	};
};


// unrender post
export const UNRENDER_POST = 'UNRENDER_POST';
export function unrenderPost() {
	return {
		type: UNRENDER_POST,
	};
};

/**
 * Categories
 ************************/

// form cats state
export const FORM_CATS = 'FORM_CATS';
export function formCats( result ) {
	return {
		type: FORM_CATS,
		result
	};
};

// render cats 
export const RENDER_CATS = 'RENDER_CATS';
export function renderCats() {
	return {
		type: RENDER_CATS,
	};
};


// unrender cats
export const UNRENDER_CATS = 'UNRENDER_CATS';
export function unrenderCats() {
	return {
		type: UNRENDER_CATS,
	};
};


/**
 * Initial fetch
 ************************/

export function initRoot() {
	return function( dispatch, getState ) {

		dispatch( unrenderPostIndex() );
		dispatch( unrenderCats() );

		let postsFetch = fetch( postsApi ).then( response => response.json() );
		let catsFetch = fetch( catsApi ).then( response => response.json() );

		// post Index
		Promise.all([ postsFetch, catsFetch ])
			.then( result => dispatch( formPostIndex( result ) ) )
			.then( () => dispatch( renderPostIndex() ) );

		// categories
		Promise.all([ catsFetch ])
			.then( result => dispatch( formCats( result ) ) )

	};
};

export function initPostPage( id ) {
	return function( dispatch, getState ) {

		dispatch( unrenderPost() );
		dispatch( unrenderCats() );

		let postFetch = fetch( postApi + id ).then( response => response.json() );
		let catsFetch = fetch( catsApi ).then( response => response.json() );

		// post
		Promise.all([ postFetch, catsFetch ])
			.then( result => dispatch( formPost( result ) ) )
			.then( () => dispatch( renderPost() ) )

		// categories
		Promise.all([ catsFetch ])
			.then( result => dispatch( formCats( result ) ) )
	};
};
