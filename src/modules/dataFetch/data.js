// deps
import fetch from 'isomorphic-fetch';
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
		 searchPageApi,
		 pageNumPostApi } from '../../entry';

const dataFetch = {

	1: {
		get: ( pageNum ) => fetch( postPageApi( pageNum ) ).then( response => { 
			let totalPages = response.headers.get( 'X-WP-TotalPages' );
			return response.json().then( json => { 
				return { json, totalPages };
			} );
		})
	},

	3: {
		get: () => fetch( catsApi ).then( response => response.json() )
	},

	5: {
		get: ( id ) => fetch( postApi + id ).then( response => response.json() )
	},

	6: {
		get: ( pageNum, catId ) => fetch( catsPageApi( pageNum, catId ) ).then( response => { 
			let totalPages = response.headers.get( 'X-WP-TotalPages' );
			return response.json().then( json => { 
				return { json, totalPages };
			} );
		})
	},

	9: {
		get: () => fetch( tagsApi ).then( response => response.json() )
	},

	10: {
		get: ( pageNum, tagId ) => fetch( tagsPageApi( pageNum, tagId ) ).then( response => { 
			let totalPages = response.headers.get( 'X-WP-TotalPages' );
			return response.json().then( json => { 
				return { json, totalPages };
			} );
		})
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
		get: ( pageNum, before, after ) => fetch( archivePageApi( pageNum, before, after ) ).then( response => { 
			let totalPages = response.headers.get( 'X-WP-TotalPages' );
			return response.json().then( json => { 
				return { json, totalPages };
			} );
		})
	},

	17: {
		get: ( pageNum, query) => fetch( searchPageApi( pageNum, query ) ).then( response => { 
			let totalPages = response.headers.get( 'X-WP-TotalPages' );
			return response.json().then( json => { 
				return { json, totalPages };
			} );
		})
	},

	19: {
		get: () => fetch( pageNumPostApi ).then( response => response.json() )
	}
};

export function getData( id, data ) {
	switch ( id ) {
		case 1: 
			return dataFetch[id].get( +data.pageNum );
		case 5: 
			return dataFetch[id].get( data.postId );
		case 6: 
			return dataFetch[id].get( +data.pageNum, data.catId );
		case 10: 
			return dataFetch[id].get( +data.pageNum, data.tagId );
		case 12: 
			return dataFetch[id].get( data.postId );
		case 15: 
			return dataFetch[id].get( +data.pageNum, data.query.before, data.query.after );
		case 17: 
			return dataFetch[id].get( +data.pageNum, data.query.s );
		default:
			return dataFetch[id].get();
	}
};

let fetchCache = {};
export function getComponentData( api, data ) {
	console.log( 'dataFetch - forming Promise' );
	return Promise.all( api.map( id => {

		// if the promise is already cached - return it 
		if ( typeof fetchCache[id] === 'undefined' ) {
			return fetchCache[id] = getData( id, data );
		} else {
			return fetchCache[id];
		}

	} ) );
}

export function fetchCacheCleaner() {
	fetchCache = {};
}
