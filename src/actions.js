// deps
import fetch from 'isomorphic-fetch';
import { store } from './store';
// entry
import { postsApi,
		 postApi,
		 catsApi,
		 postPageApi,
		 catsPageApi } from './entry'; 


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
 * Disqus
 ************************/

// render disqus 
export const RENDER_DISQUS = 'RENDER_DISQUS';
export function renderDisqus() {
	return {
		type: RENDER_DISQUS,
	};
};


// unrender disqus
export const UNRENDER_DISQUS = 'UNRENDER_DISQUS';
export function unrenderDisqus() {
	return {
		type: UNRENDER_DISQUS,
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

// export function initRoot() {
// 	return function( dispatch, getState ) {

// 		let postsFetch = fetch( postsApi ).then( response => response.json() );
// 		let catsFetch = fetch( catsApi ).then( response => response.json() );
// 		let nextPageFetch = fetch( postPageApi( 2 ) ).then( response => response.json() );

// 		// categories
// 		if ( getState().components.categories.needToFetch ) {
// 			dispatch( unrenderCats() );

// 			Promise.all([ catsFetch ])
// 				.then( result => dispatch( formCats( result ) ) )
// 				.then( () => dispatch( dontFetchCats() ) )
// 		}

// 		// post Index
// 		dispatch( unrenderPostIndex() );
// 		dispatch( unrenderFooter() );

// 		Promise.all([ postsFetch, catsFetch, nextPageFetch, 1 ])
// 			.then( result => dispatch( formPostIndex( result ) ) )
// 			.then( () => dispatch( renderPostIndex() ) )
// 			.then( () => dispatch( renderFooter() ) )
// 			.then( () => dispatch( dontFetchPost() ) );

// 	};
// };

// export function initPostPage( componentList, id ) {
// 	return function( dispatch, getState ) {

// 		let postFetch = fetch( postApi + id ).then( response => response.json() );
// 		let catsFetch = fetch( catsApi ).then( response => response.json() );

// 		// categories
// 		if ( getState().components.categories.needToFetch ) {
// 			dispatch( unrenderCats() );

// 			Promise.all([ catsFetch ])
// 				.then( result => dispatch( formCats( result ) ) )
// 				.then( () => dispatch( dontFetchCats() ) )
// 		}

// 		// post
// 		dispatch( unrenderFooter() );
// 		dispatch( unrenderPost() );
// 		dispatch( unrenderDisqus() );

// 		if ( getState().components.post.needToFetch ) {
// 			Promise.all([ postFetch, catsFetch ])
// 				.then( result => dispatch( formPost( result ) ) )
// 				.then( () => dispatch( renderPost() ) )
// 				.then( () => dispatch( renderFooter() ) )
// 				.then( () => dispatch( renderDisqus() ) );
// 		} else {
// 			new Promise( ( resolve ) => {
// 				dispatch( formPostfromIndex( id ) );
// 				resolve();
// 			} ).then( () => dispatch( renderPost() ) )
// 			   .then( () => dispatch( renderFooter() ) )
// 			   .then( () => dispatch( renderDisqus() ) );
// 		}

// 	};
// };

export function initPostPageNum( components, pageNum ) {
	return function( dispatch, getState ) {

		let postsFetch = fetch( postPageApi( pageNum ) ).then( response => response.json() );
		let catsFetch = fetch( catsApi ).then( response => response.json() );
		let nextPageFetch = fetch( postPageApi( +pageNum + 1 ) ).then( response => response.json() );

		// categories
		if ( getState().components.categories.needToFetch ) {
			dispatch( unrenderCats() );

			Promise.all([ catsFetch ])
				.then( result => dispatch( formCats( result ) ) )
				.then( () => dispatch( dontFetchCats() ) )
		}

		// post Index
		dispatch( unrenderPostIndex() );
		dispatch( unrenderFooter() );

		Promise.all([ postsFetch, catsFetch, nextPageFetch, pageNum ])
			.then( result => dispatch( formPostIndex( result ) ) )
			.then( () => dispatch( renderPostIndex() ) )
			.then( () => dispatch( renderFooter() ) )
			.then( () => dispatch( dontFetchPost() ) );

	};
};

export function initCatsPageNum( components, pageNum ) {
	return function( dispatch, getState ) {

		let postsFetch = fetch( pageApi( pageNum ) ).then( response => response.json() );
		let catsFetch = fetch( catsApi ).then( response => response.json() );
		let nextPageFetch = fetch( pageApi( +pageNum + 1 ) ).then( response => response.json() );

		// categories
		if ( getState().components.categories.needToFetch ) {
			dispatch( unrenderCats() );

			Promise.all([ catsFetch ])
				.then( result => dispatch( formCats( result ) ) )
				.then( () => dispatch( dontFetchCats() ) )
		}

		// post Index
		dispatch( unrenderPostIndex() );
		dispatch( unrenderFooter() );

		Promise.all([ postsFetch, catsFetch, nextPageFetch, pageNum ])
			.then( result => dispatch( formPostIndex( result ) ) )
			.then( () => dispatch( renderPostIndex() ) )
			.then( () => dispatch( renderFooter() ) )
			.then( () => dispatch( dontFetchPost() ) );

	};
};



// components list

const components = {

	1: {
		id: 1,
		name: 'postIndex',
		showOnInit: true,
		toCache: false,
		cached: false,
		hide: () => store.dispatch( unrenderPostIndex() ),
		show: () => store.dispatch( renderPostIndex() ),
		form: data => store.dispatch( formPostIndex( data ) ),
		api: [ 1, 2, 3, 4 ]
	},

	2: {
		id: 2,
		name: 'categories',
		showOnInit: false,
		toCache: true,
		cached: false,
		hide: () => store.dispatch( unrenderCats() ),
		show: () => store.dispatch( renderCats() ),
		form: data => store.dispatch( formCats( data ) ),
		api: [ 2 ]
	},	

	3: {
		id: 3,
		name: 'footer',
		showOnInit: true,
		toCache: false,
		cached: false,
		hide: () => store.dispatch( unrenderFooter() ),
		show: () => store.dispatch( renderFooter() ),
		form: () => true,
		api: []
	},

	4: {
		id: 4,
		name: 'postItem',
		showOnInit: true,
		toCache: false,
		cached: false,
		hide: () => store.dispatch( unrenderPost() ),
		show: () => store.dispatch( renderPost() ),
		form: data => store.dispatch( formPost( data ) ),
		api: [ 5, 2 ]
	},

	5: {
		id: 5,
		name: 'disqus',
		showOnInit: true,
		toCache: false,
		cached: false,
		hide: () => store.dispatch( unrenderDisqus() ),
		show: () => store.dispatch( renderDisqus() ),
		form: () => true,
		api: []
	},

};

const dataList = {

	1: {
		get: () => fetch( postsApi ).then( response => response.json() )
	},

	2: {
		get: () => fetch( catsApi ).then( response => response.json() )
	},

	3: {
		get: ( pageNum ) => fetch( postPageApi( pageNum ) ).then( response => response.json() )
	},

	4: {
		get: () => 1
	},

	5: {
		get: ( id ) => fetch( postApi + id ).then( response => response.json() )
	}
};


export function initPage( componentIds, data ) {
	return function( dispatch, getState ) {

		let componentsList = getComponentsList( componentIds );

		// hide all components
		componentsList.forEach( hideComponent );

		let cache = {};

		componentsList.forEach( component => { 
			getComponentData( component, _.extend( { cache }, data ) )
				.then( result => formComponent( component, result ) )
				.then( () => showComponent( component ) )
				.then( () => cacheComponent( component ) )
		});

	};
};


function getComponentsList( ids ) {
	let componentsList = [];

	// look through the page array of component ids
	ids.map( id => {	

		// add component obj if its not cached
		if ( !components[id].cached ) { 
			componentsList.push( components[id] );
		}
	});	

	return componentsList;
};


function getComponentData( component, data ) {

	return Promise.all( component.api.map( id => {

		// if the promise is already cached - return it 
		if ( typeof data.cache[id] !== 'undefined' ) {
			return data.cache[id];
		} else {
			return data.cache[id] = getData( id, data );
		}

	} ) );
};

function getData( id, data ) {
	switch ( id ) {
		case 3: 
			return dataList[id].get( 2 );
		case 5: 
			return dataList[id].get( data.postId );
		default:
			return dataList[id].get();
	}
}

function formComponent( component, result ) {
	return component.form( result );
}

function hideComponent( component ) {
	return component.hide();
}

function showComponent( component ) {
	return component.showOnInit ? component.show() : true;
}

function cacheComponent( component ) {
	if ( component.toCache ) {
		component.cached = true;
		component.toCached = false;
	} 
}