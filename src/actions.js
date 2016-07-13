// deps
import fetch from 'isomorphic-fetch';
// entry
import { postsApi,
		 postApi,
		 catsApi } from './entry'; 


/**
 * Mobile Menu
 ************************/

// toggle mobile menu
export const TOGGLE_MOBILE_MENU = 'TOGGLE_MOBILE_MENU';
export function toggleMobileMenu() {
	return {
		type: TOGGLE_MOBILE_MENU,
	};
};

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

// form post state from post index
export const FORM_POST_FROM_INDEX = 'FORM_POST_FROM_INDEX';
export function formPostfromIndex( id ) {
	return {
		type: FORM_POST_FROM_INDEX,
		id
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

// dont fetch post
export const DONT_FETCH_POST = 'DONT_FETCH_POST';
export function dontFetchPost() {
	return {
		type: DONT_FETCH_POST,
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

// toggle cats
export const TOGGLE_CATS = 'TOGGLE_CATS';
export function toggleCats() {
	return {
		type: TOGGLE_CATS,
	};
};

// dont fetch cats
export const DONT_FETCH_CATS = 'DONT_FETCH_CATS';
export function dontFetchCats() {
	return {
		type: DONT_FETCH_CATS,
	};
};


/**
 * Footer
 ************************/


// render footer 
export const RENDER_FOOTER = 'RENDER_FOOTER';
export function renderFooter() {
	return {
		type: RENDER_FOOTER,
	};
};


// unrender footer
export const UNRENDER_FOOTER = 'UNRENDER_FOOTER';
export function unrenderFooter() {
	return {
		type: UNRENDER_FOOTER,
	};
};


/**
 * Initial fetch
 ************************/

export function initRoot() {
	return function( dispatch, getState ) {

		let postsFetch = fetch( postsApi ).then( response => response.json() );
		let catsFetch = fetch( catsApi ).then( response => response.json() );

		// categories
		if ( getState().components.categories.needToFetch ) {
			dispatch( unrenderCats() );

			Promise.all([ catsFetch ])
				.then( result => dispatch( formCats( result ) ) )
				.then( () => dispatch( dontFetchCats() ) )
		}

		// post Index
		if ( getState().components.postIndex.needToFetch ) {
			dispatch( unrenderFooter() );
			dispatch( unrenderPostIndex() );

			Promise.all([ postsFetch, catsFetch ])
				.then( result => dispatch( formPostIndex( result ) ) )
				.then( () => dispatch( renderPostIndex() ) )
				.then( () => dispatch( renderFooter() ) )
				.then( () => dispatch( dontFetchPost() ) );
		}

	};
};

export function initPostPage( id ) {
	return function( dispatch, getState ) {

		let postFetch = fetch( postApi + id ).then( response => response.json() );
		let catsFetch = fetch( catsApi ).then( response => response.json() );

		// categories
		if ( getState().components.categories.needToFetch ) {
			dispatch( unrenderCats() );

			Promise.all([ catsFetch ])
				.then( result => dispatch( formCats( result ) ) )
				.then( () => dispatch( dontFetchCats() ) )
		}

		// post
		dispatch( unrenderFooter() );
		dispatch( unrenderPost() );

		if ( getState().components.post.needToFetch ) {
			Promise.all([ postFetch, catsFetch ])
				.then( result => dispatch( formPost( result ) ) )
				.then( () => dispatch( renderPost() ) )
				.then( () => dispatch( renderFooter() ) )
		} else {
			new Promise( ( resolve ) => {
				dispatch( formPostfromIndex( id ) );
				resolve();
			} ).then( () => dispatch( renderPost() ) )
			   .then( () => dispatch( renderFooter() ) );
		}

	};
};
