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
		 searchPageApi } from './entry';

const dataFetch = {

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

function getData( id, data ) {
	switch ( id ) {
		case 1: 
			return dataFetch[id].get( +data.pageNum );
		case 2: 
			return dataFetch[id].get( +data.pageNum + 1 );
		case 4: 
			return dataFetch[id].get( +data.pageNum );
		case 5: 
			return dataFetch[id].get( data.postId );
		case 6: 
			return dataFetch[id].get( +data.pageNum, data.catId );
		case 7: 
			return dataFetch[id].get( +data.pageNum + 1, data.catId );
		case 8: 
			return dataFetch[id].get( data.navUri, data.search );
		case 10: 
			return dataFetch[id].get( +data.pageNum, data.tagId );
		case 11: 
			return dataFetch[id].get( +data.pageNum + 1, data.tagId );
		case 12: 
			return dataFetch[id].get( data.postId );
		case 15: 
			return dataFetch[id].get( +data.pageNum, data.query.before, data.query.after );
		case 16: 
			return dataFetch[id].get( +data.pageNum + 1, data.query.before, data.query.after );
		case 17: 
			return dataFetch[id].get( +data.pageNum, data.query.s );
		case 18: 
			return dataFetch[id].get( +data.pageNum + 1, data.query.s );
		default:
			return dataFetch[id].get();
	}
}

export default getData;