const pages = {

	root: {
		path: '/',
		reg: /^\/#?$/,
		components: [ 'postIndex:posts', 'dateArchive', 'categories', 'footer', 'postsTop' ],
		getPageData: function ( uri, query, search ) {
			let navUri = 'posts/page/';
			return [ this.components, { pageNum: 1, navUri, search } ];
		}
	},

	post: {
		path: 'post/:id',
		reg: /^\/?post\/\d+\/?$/,
		components: [ 2, 3, 4, 5, 8, 9, 10 ],
		getPageData: function ( uri, query, search ) {
			let postId = uri.slice( uri.search(/\d+$/) );
			return [ this.components, { postId } ];
		}
	},

	postsPage: {
		path: 'posts/page/:count',
		reg: /^\/?posts\/page\/\d+\/?$/,
		components: [ 'postIndex:posts', 'dateArchive', 'categories', 'footer', 'postsTop'  ],
		getPageData: function ( uri, query, search ) {
			let pageNum = uri.slice( uri.search(/\d+$/) );
			let navUri = 'posts/page/';
			return [ this.components, { pageNum, navUri, search } ];
		}
	},

	catsPage: {
		path: 'cats/:id/page/:count',
		reg: /^\/?cats\/\d+\/page\/\d+\/?$/,
		components: [ 'postIndex:cats', 'dateArchive', 'categories', 'footer', 'postsTop' ],
		getPageData: function ( uri, query, search ) {
			let navUri = uri.slice( 0, uri.search(/\d+$/) );
			let idPart = uri.slice( uri.search( /\d+/ ) );

			let catId = idPart.slice( 0, idPart.search( /\// ) );
			let pageNum = uri.slice( uri.search(/\d+$/) );
			return [ this.components, { pageNum, catId, navUri, search } ];
		}
	},

	tagsPage: {
		path: 'tags/:id/page/:count',
		reg: /^\/?tags\/\d+\/page\/\d+\/?$/,
		components: [ 'postIndex:tags', 'dateArchive', 'categories', 'footer', 'postsTop' ],
		getPageData: function ( uri, query, search ) {
			let navUri = uri.slice( 0, uri.search(/\d+$/) );
			let idPart = uri.slice( uri.search( /\d+/ ) );

			let tagId = idPart.slice( 0, idPart.search( /\// ) );
			let pageNum = uri.slice( uri.search(/\d+$/) );
			return [ this.components, { pageNum, tagId, navUri, search } ]
		}
	},

	archivePage: {
		path: 'archive/page/:count',
		reg: /^\/?archive\/page\/\d+\/?$/,
		components: [ 'postIndex:archive', 'dateArchive', 'categories', 'footer', 'postsTop' ],
		getPageData: function ( uri, query, search ) {
			let navUri = uri.slice( 0, uri.search(/\d+$/) );
			let pageNum = uri.slice( uri.search(/\d+$/) );
			return [ this.components, { pageNum, query, search, navUri } ];
		}
	},

	searchPage: {
		path: 'search/page/:count',
		reg: /^\/?search\/page\/\d+\/?$/,
		components: [ 'postIndex:search', 'dateArchive', 'categories', 'footer', 'postsTop' ],
		getPageData: function ( uri, query, search ) {
			let navUri = uri.slice( 0, uri.search(/\d+$/) );
			let pageNum = uri.slice( uri.search(/\d+$/) );
			return [ this.components, { pageNum, query, search, navUri } ];
		}
	},

	contact: {
		path: 'contact',
		reg: /^\/?contact\/?$/,
		components: [ 2, 3, 9, 10 ],
		getPageData: function ( uri, query, search ) {
			return [ this.components, {} ];
		}
	},

	quotes: {
		path: 'quotes',
		reg: /^\/?quotes\/?$/,
		components: [ 2, 3 ],
		getPageData: function ( uri, query, search ) {
			return [ this.components, {} ];
		}
	},
};

export default pages;