// deps
import { store } from './store';
// actions
import { initPage, initPostPageNum, initCatsPageNum } from './actions';

const pages = {
	root: {
		path: '/',
		reg: /^\/#?$/,
		components: [ 1, 2, 3 ],
		init: function ( uri ) {
			return store.dispatch( initPage( this.components ) );
		}
	},

	post: {
		path: 'post/:id',
		reg: /^\/?post\/\d+\/?$/,
		components: [ 2, 3, 4, 5 ],
		init: function ( uri ) {
			let postId = uri.slice( uri.search(/\d+$/) );
			return store.dispatch( initPage( this.components, { postId } ) );
		}
	},

	postsPage: {
		path: 'posts/page/:count',
		reg: /^\/?posts\/page\/\d+\/?$/,
		components: [ 1, 3, 5, 6, 9 ],
		init: function ( uri ) {
			let postPageNum = uri.slice( uri.search(/\d+$/) );
			return store.dispatch( initPage( this.components, { postPageNum } ) );
		}
	},

	catsPage: {
		path: 'cats/:id/page/:count',
		reg: /^\/?cats\/\d+\/page\/\d+\/?$/,
		components: [ 1, 3, 5, 6, 9 ],
		init: function ( uri ) {
			let idPart = uri.slice( uri.search( /\d+/ ) );

			let catId = idPart.slice( 0, idPart.search( /\// ) );
			let catsPageNum = uri.slice( uri.search(/\d+$/) );
			return store.dispatch( initCatsPageNum( this.components, { catId, catsPageNum } ) );
		}
	}
};

export default pages;