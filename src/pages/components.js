// deps
import store from '../store';
// actions
import { unrenderDateArchive, 
		 renderDateArchive, 
		 formDateArchive } from '../components/archive/actions';


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

export default components;