// deps
import { store } from './store';
// actions
import { initPage, initPostPageNum, initCatsPageNum } from './actions';

const pages = {
	root: {
		path: '/',
		reg: /^\/#?$/,
		components: [ 1, 2, 3, 9, 10 ],
		init: function ( uri ) {
			let navUri = 'posts/page/';
			return store.dispatch( initPage( this.components, { pageNum: 1, navUri } ) );
		}
	},

	post: {
		path: 'post/:id',
		reg: /^\/?post\/\d+\/?$/,
		components: [ 2, 3, 4, 5, 8, 9, 10 ],
		init: function ( uri ) {
			let postId = uri.slice( uri.search(/\d+$/) );
			return store.dispatch( initPage( this.components, { postId } ) );
		}
	},

	postsPage: {
		path: 'posts/page/:count',
		reg: /^\/?posts\/page\/\d+\/?$/,
		components: [ 1, 2, 3, 9, 10 ],
		init: function ( uri ) {
			let pageNum = uri.slice( uri.search(/\d+$/) );
			let navUri = 'posts/page/';
			return store.dispatch( initPage( this.components, { pageNum, navUri } ) );
		}
	},

	catsPage: {
		path: 'cats/:id/page/:count',
		reg: /^\/?cats\/\d+\/page\/\d+\/?$/,
		components: [ 6, 2, 3, 9, 10 ],
		init: function ( uri ) {
			let navUri = uri.slice( 0, uri.search(/\d+$/) );
			let idPart = uri.slice( uri.search( /\d+/ ) );

			let catId = idPart.slice( 0, idPart.search( /\// ) );
			let pageNum = uri.slice( uri.search(/\d+$/) );
			return store.dispatch( initPage( this.components, { pageNum, catId, navUri } ) );
		}
	},

	tagsPage: {
		path: 'tags/:id/page/:count',
		reg: /^\/?tags\/\d+\/page\/\d+\/?$/,
		components: [ 7, 2, 3, 9, 10 ],
		init: function ( uri ) {
			let navUri = uri.slice( 0, uri.search(/\d+$/) );
			let idPart = uri.slice( uri.search( /\d+/ ) );

			let tagId = idPart.slice( 0, idPart.search( /\// ) );
			let pageNum = uri.slice( uri.search(/\d+$/) );
			return store.dispatch( initPage( this.components, { pageNum, tagId, navUri } ) );
		}
	}
};

export default pages;