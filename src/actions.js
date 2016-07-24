// deps
import fetch from 'isomorphic-fetch';
import { store } from './store';
// entry
import { postsApi,
		 postApi,
		 catsApi,
		 tagsApi,
		 postPageApi,
		 catsPageApi,
		 tagsPageApi,
		 postsCatsApi,
		 similarPostsApi,
		 postsTopApi,
		 dateArchiveApi,
		 archivePageApi,
		 searchPageApi } from './entry'; 


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

// hide mobile menu
export const HIDE_MOBILE_MENU = 'HIDE_MOBILE_MENU';
export function hideMobileMenu() {
	return {
		type: HIDE_MOBILE_MENU,
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
 * Similar Posts
 ************************/


// render similar posts
export const RENDER_SIMILAR_POSTS = 'RENDER_SIMILAR_POSTS';
export function renderSimilarPosts() {
	return {
		type: RENDER_SIMILAR_POSTS,
	};
};


// unrender similar posts
export const UNRENDER_SIMILAR_POSTS = 'UNRENDER_SIMILAR_POSTS';
export function unrenderSimilarPosts() {
	return {
		type: UNRENDER_SIMILAR_POSTS,
	};
};

// form similar posts
export const FORM_SIMILAR_POSTS = 'FORM_SIMILAR_POSTS';
export function formSimilarPosts( result ) {
	return {
		type: FORM_SIMILAR_POSTS,
		result
	};
};

/**
 * Top posts
 ************************/


// render top posts
export const RENDER_POSTS_TOP = 'RENDER_POSTS_TOP';
export function renderPostsTop() {
	return {
		type: RENDER_POSTS_TOP,
	};
};


// unrender top posts
export const UNRENDER_POSTS_TOP = 'UNRENDER_POSTS_TOP';
export function unrenderPostsTop() {
	return {
		type: UNRENDER_POSTS_TOP,
	};
};

// form top posts
export const FORM_POSTS_TOP = 'FORM_POSTS_TOP';
export function formPostsTop( result ) {
	return {
		type: FORM_POSTS_TOP,
		result
	};
};

/**
 * Date archive
 ************************/


// render archive
export const RENDER_ARCHIVE = 'RENDER_ARCHIVE';
export function renderDateArchive() {
	return {
		type: RENDER_ARCHIVE,
	};
};


// unrender archive
export const UNRENDER_ARCHIVE = 'UNRENDER_ARCHIVE';
export function unrenderDateArchive() {
	return {
		type: UNRENDER_ARCHIVE,
	};
};

// form archive
export const FORM_ARCHIVE = 'FORM_ARCHIVE';
export function formDateArchive( result ) {
	return {
		type: FORM_ARCHIVE,
		result
	};
};


// components list

const components = {

	1: {
		id: 1,
		name: 'postIndex',
		showOnInit: true,
		forceHide: false,
		toCache: false,
		cached: false,
		hide: () => store.dispatch( unrenderPostIndex() ),
		show: () => store.dispatch( renderPostIndex() ),
		form: data => store.dispatch( formPostIndex( data ) ),
		api: [ 1, 2, 3, 4, 8 ]
	},

	2: {
		id: 2,
		name: 'categories',
		showOnInit: false,
		forceHide: true,
		toCache: true,
		cached: false,
		hide: () => store.dispatch( unrenderCats() ),
		show: () => store.dispatch( renderCats() ),
		form: data => store.dispatch( formCats( data ) ),
		api: [ 3 ]
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
		api: [ 5, 3, 9 ]
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

	6: {
		id: 6,
		name: 'catsPostIndex',
		showOnInit: true,
		toCache: false,
		cached: false,
		hide: () => store.dispatch( unrenderPostIndex() ),
		show: () => store.dispatch( renderPostIndex() ),
		form: data => store.dispatch( formPostIndex( data ) ),
		api: [ 6, 7, 3, 4, 8 ]
	},

	7: {
		id: 7,
		name: 'tagsPostIndex',
		showOnInit: true,
		toCache: false,
		cached: false,
		hide: () => store.dispatch( unrenderPostIndex() ),
		show: () => store.dispatch( renderPostIndex() ),
		form: data => store.dispatch( formPostIndex( data ) ),
		api: [ 10, 11, 3, 4, 8 ]
	},

	8: {
		id: 8,
		name: 'similarPosts',
		showOnInit: true,
		toCache: false,
		cached: false,
		hide: () => store.dispatch( unrenderSimilarPosts() ),
		show: () => store.dispatch( renderSimilarPosts() ),
		form: data => store.dispatch( formSimilarPosts( data ) ),
		api: [ 12 ]
	},

	9: {
		id: 9,
		name: 'postsTop',
		showOnInit: true,
		toCache: true,
		cached: false,
		hide: () => store.dispatch( unrenderPostsTop() ),
		show: () => store.dispatch( renderPostsTop() ),
		form: data => store.dispatch( formPostsTop( data ) ),
		api: [ 13 ]
	},

	10: {
		id: 10,
		name: 'dateArchive',
		showOnInit: true,
		toCache: true,
		cached: false,
		hide: () => store.dispatch( unrenderDateArchive() ),
		show: () => store.dispatch( renderDateArchive() ),
		form: data => store.dispatch( formDateArchive( data ) ),
		api: [ 14 ]
	},

	11: {
		id: 11,
		name: 'archivePostIndex',
		showOnInit: true,
		toCache: false,
		cached: false,
		hide: () => store.dispatch( unrenderPostIndex() ),
		show: () => store.dispatch( renderPostIndex() ),
		form: data => store.dispatch( formPostIndex( data ) ),
		api: [ 15, 16, 3, 4, 8 ]
	},

	12: {
		id: 12,
		name: 'searchPostIndex',
		showOnInit: true,
		toCache: false,
		cached: false,
		hide: () => store.dispatch( unrenderPostIndex() ),
		show: () => store.dispatch( renderPostIndex() ),
		form: data => store.dispatch( formPostIndex( data ) ),
		api: [ 17, 18, 3, 4, 8 ]
	}

};

const dataList = {

	1: {
		get: ( pageNum ) => fetch( postPageApi( pageNum ) ).then( response => response.json() )
	},

	2: {
		get: ( pageNum ) => fetch( postPageApi( pageNum ) ).then( response => response.json() )
	},

	3: {
		get: () => fetch( catsApi ).then( response => response.json() )
	},

	4: {
		get: ( pageNum ) => pageNum
	},

	5: {
		get: ( id ) => fetch( postApi + id ).then( response => response.json() )
	},

	6: {
		get: ( pageNum, catId ) => fetch( catsPageApi( pageNum, catId ) ).then( response => response.json() )
	},

	7: {
		get: ( pageNum, catId ) => fetch( catsPageApi( pageNum, catId ) ).then( response => response.json() )
	},

	8: {
		get: ( navUri, search ) => { return { uri: navUri, params: search } }
	},

	9: {
		get: () => fetch( tagsApi ).then( response => response.json() )
	},

	10: {
		get: ( pageNum, tagId ) => fetch( tagsPageApi( pageNum, tagId ) ).then( response => response.json() )
	},

	11: {
		get: ( pageNum, tagId ) => fetch( tagsPageApi( pageNum, tagId ) ).then( response => response.json() )
	},

	12: {
		get: ( postId ) => fetch( similarPostsApi( postId ) ).then( response => response.json() )
	},

	13: {
		get: () => fetch( postsTopApi ).then( response => response.json() )
	},

	14: {
		get: () => fetch( dateArchiveApi ).then( response => response.json() )
	},

	15: {
		get: ( pageNum, before, after ) => fetch( archivePageApi( pageNum, before, after ) ).then( response => response.json() )
	},

	16: {
		get: ( pageNum, before, after ) => fetch( archivePageApi( pageNum, before, after ) ).then( response => response.json() )
	},

	17: {
		get: ( pageNum, query) => fetch( searchPageApi( pageNum, query ) ).then( response => response.json() )
	},

	18: {
		get: ( pageNum, query ) => fetch( searchPageApi( pageNum, query ) ).then( response => response.json() )
	},
};


export function initPage( componentIds, data ) {
	return function( dispatch, getState ) {

		let componentsList = getComponentsList( componentIds );

		// hide all components
		componentsList.forEach( hideComponent );

		let cache = {};

		let pagePromises = componentsList.map( component => { 
			return getComponentData( component, _.extend( { cache }, data ) )
					.then( result => formComponent( component, result ) )
					.then( () => showComponent( component ) )
					.then( () => cacheComponent( component ) )
		});

		Promise.all( pagePromises ).catch( error => console.log( 'К сожалению при загрузке ресурсов произошла ошибка' ) );

	};
};


function getComponentsList( ids ) {
	let componentsList = [];

	// look through the page array of component ids
	ids.map( id => {	

		// add component obj if its not cached or need to force hide
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
		case 1: 
			return dataList[id].get( +data.pageNum );
		case 2: 
			return dataList[id].get( +data.pageNum + 1 );
		case 4: 
			return dataList[id].get( +data.pageNum );
		case 5: 
			return dataList[id].get( data.postId );
		case 6: 
			return dataList[id].get( +data.pageNum, data.catId );
		case 7: 
			return dataList[id].get( +data.pageNum + 1, data.catId );
		case 8: 
			return dataList[id].get( data.navUri, data.search );
		case 10: 
			return dataList[id].get( +data.pageNum, data.tagId );
		case 11: 
			return dataList[id].get( +data.pageNum + 1, data.tagId );
		case 12: 
			return dataList[id].get( data.postId );
		case 15: 
			return dataList[id].get( +data.pageNum, data.query.before, data.query.after );
		case 16: 
			return dataList[id].get( +data.pageNum + 1, data.query.before, data.query.after );
		case 17: 
			return dataList[id].get( +data.pageNum, data.query.s );
		case 18: 
			return dataList[id].get( +data.pageNum + 1, data.query.s );
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
		component.toCache = false;
	} 
}