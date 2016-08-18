// deps
import { switchPageState, formPageData } from './actions';

const pages = {

	actions: { switchPageState, formPageData },

	items: {

		root: {
			name: 'root',
			path: '/',
			reg: /^\/#?$/,
			getPageData: function ( uri, query, search, hash ) {
				let navUri = 'posts/page/';
				return { pageNum: 1, navUri, search };
			}
		},

		post: {
			name: 'post',
			path: 'post/:id',
			reg: /^\/?post\/\d+\/?$/,
			getPageData: function ( uri, query, search, hash ) {
				let postId = uri.slice( uri.search(/\d+$/) );
				return { postId, hash };
			}
		},

		postsPage: {
			name: 'postsPage',
			path: 'posts/page/:count',
			reg: /^\/?posts\/page\/\d+\/?$/,
			getPageData: function ( uri, query, search, hash ) {
				let pageNum = uri.slice( uri.search(/\d+$/) );
				let navUri = 'posts/page/';
				return { pageNum, navUri, search };
			}
		},

		catsPage: {
			name: 'catsPage',
			path: 'cats/:id/page/:count',
			reg: /^\/?cats\/\d+\/page\/\d+\/?$/,
			getPageData: function ( uri, query, search, hash ) {
				let navUri = uri.slice( 0, uri.search(/\d+$/) );
				let idPart = uri.slice( uri.search( /\d+/ ) );

				let catId = idPart.slice( 0, idPart.search( /\// ) );
				let pageNum = uri.slice( uri.search(/\d+$/) );
				return { pageNum, catId, navUri, search };
			}
		},

		tagsPage: {
			name: 'tagsPage',
			path: 'tags/:id/page/:count',
			reg: /^\/?tags\/\d+\/page\/\d+\/?$/,
			getPageData: function ( uri, query, search, hash ) {
				let navUri = uri.slice( 0, uri.search(/\d+$/) );
				let idPart = uri.slice( uri.search( /\d+/ ) );

				let tagId = idPart.slice( 0, idPart.search( /\// ) );
				let pageNum = uri.slice( uri.search(/\d+$/) );
				return { pageNum, tagId, navUri, search };
			}
		},

		archivePage: {
			name: 'archivePage',
			path: 'archive/page/:count',
			reg: /^\/?archive\/page\/\d+\/?$/,
			getPageData: function ( uri, query, search, hash ) {
				let navUri = uri.slice( 0, uri.search(/\d+$/) );
				let pageNum = uri.slice( uri.search(/\d+$/) );
				return { pageNum, query, search, navUri };
			}
		},

		searchPage: {
			name: 'searchPage',
			path: 'search/page/:count',
			reg: /^\/?search\/page\/\d+\/?$/,
			getPageData: function ( uri, query, search, hash ) {
				let navUri = uri.slice( 0, uri.search(/\d+$/) );
				let pageNum = uri.slice( uri.search(/\d+$/) );
				return { pageNum, query, search, navUri };
			}
		},

		contact: {
			name: 'contact',
			path: 'contact',
			reg: /^\/?contact\/?$/,
			getPageData: function ( uri, query, search, hash ) {
				return {};
			}
		},

		quotes: {
			name: 'quotes',
			path: 'quotes',
			reg: /^\/?quotes\/?$/,
			getPageData: function ( uri, query, search, hash ) {
				return {};
			}
		},

		404: {
			name: '404',
			path: '404',
			reg: /alwaysFalse/,
			getPageData: function ( uri, query, search, hash ) {
				return {};
			}
		}

	},

	pageData: {},

	state: {
		currentPage: {
			value: 'pending',
			stamp: 0
		},
		pageDataFormed: {
			value: false,
			stamp: 0
		}
	}
};

export default pages;