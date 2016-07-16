// deps
import { store } from './store';
// actions
import { initRoot, initPostPage, initPostPageNum, initCatsPageNum } from './actions';

const pages = {
	root: {
		path: '/',
		reg: /^\/#?$/,
		components: [ 1, 3, 4, 6, 9 ],
		init: uri => store.dispatch( initRoot() )
	},

	post: {
		path: 'post/:id',
		reg: /^\/?post\/\d+\/?$/,
		components: [ 1, 3, 5, 6, 9 ],
		init: uri => {
			let postId = uri.slice( uri.search(/\d+$/) );
			return store.dispatch( initPostPage( postId ) );
		}
	},

	postsPage: {
		path: 'posts/page/:count',
		reg: /^\/?posts\/page\/\d+\/?$/,
		components: [ 1, 3, 5, 6, 9 ],
		init: uri => {
			let postPageNum = uri.slice( uri.search(/\d+$/) );
			return store.dispatch( initPostPageNum( postPageNum ) );
		}
	},

	catsPage: {
		path: 'cats/:id/page/:count',
		reg: /^\/?cats\/\d+\/page\/\d+\/?$/,
		components: [ 1, 3, 5, 6, 9 ],
		init: uri => {
			let idPart = uri.slice( uri.search( /\d+/ ) );

			let catId = idPart.slice( 0, idPart.search( /\// ) );
			let catsPageNum = uri.slice( uri.search(/\d+$/) );
			return store.dispatch( initCatsPageNum( catId, catsPageNum ) );
		}
	}
};

export default pages;