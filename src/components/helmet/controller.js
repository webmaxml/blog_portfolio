// deps
import store from '../../store';
// actions
import { changePageTitle } from './actions';

/**
 *	Change page title on page change
 *	
 *	triggered by - page
 */

let prevPageStamp = 0;
function titleChangeByPage() {
	let currentState = store.getState();

	// checking if there is need to process
	let currentPage = currentState.pages.state.currentPage;
	if ( currentPage.stamp === prevPageStamp ) {
		return;
	}
	prevPageStamp = currentPage.stamp;

	// post page needs formed post title which we cant get here
	if ( currentPage.value === 'post' ) { return }

	// forming conditions
	let conds = [ 
		currentPage.value === 'root' || currentPage.value === 'postsPage' ||
		currentPage.value === 'catsPage' || currentPage.value === 'tagsPage' ||
		currentPage.value === 'archivePage' || currentPage.value === 'searchPage',

		currentPage.value === 'contact',
		currentPage.value === 'quotes',
		currentPage.value === '404',
	];

	// perform actions depending on conditions
	if ( conds[0] ) {
		console.log( 'helmet - switching page title' )
		store.dispatch( changePageTitle( 'Блог - LazyDaddy' ) );
	};

	if ( conds[1] ) {
		console.log( 'helmet - switching page title' )
		store.dispatch( changePageTitle( 'Контакты - LazyDaddy' ) );
	};

	if ( conds[2] ) {
		console.log( 'helmet - switching page title' )
		store.dispatch( changePageTitle( 'Цитаты - LazyDaddy' ) );
	};

	if ( conds[3] ) {
		console.log( 'helmet - switching page title' )
		store.dispatch( changePageTitle( 'Страница не найдена - LazyDaddy' ) );
	};
}

/**
 *	Change page title on post page by post title
 *	
 *	triggered by - postFormed
 */

let prevPostFormedStamp = 0;
function titleChangeByPost() {
	let currentState = store.getState();

	// checking if there is need to process
	let postFormed = currentState.components.postItem.state.isFormed;
	if ( postFormed.stamp === prevPostFormedStamp ) {
		return;
	}
	prevPostFormedStamp = postFormed.stamp;

	// forming conditions
	let conds = [ 
		postFormed.value === true
	];

	// perform actions depending on conditions
	if ( conds[0] ) {
		let postTitle = currentState.components.postItem.ui.item.title;

		console.log( 'helmet - switching page title' )
		store.dispatch( changePageTitle( `${postTitle} - LazyDaddy` ) );
	};	
}

// subscribe handlers
store.subscribe( titleChangeByPage );
store.subscribe( titleChangeByPost );