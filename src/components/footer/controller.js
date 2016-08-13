// deps
import store from '../../store';
// actions
import { switchFooterState } from './actions';

/**
 *	render footer
 *	
 *	triggered by - pageDataFormed
 */

let prevPageDataStamp = 0;
function renderFooter() {
	let currentState = store.getState();

	// checking if there is need to process
	let pageDataFormed = currentState.pages.state.pageDataFormed;

	if ( pageDataFormed.stamp === prevPageDataStamp ) {
		return;
	}
	prevPageDataStamp = pageDataFormed.stamp;

	let isCached = currentState.components.footer.state.isCached;

	// forming conditions
	let conds = [ 
		pageDataFormed.value === true,
		isCached.value === false,
	];

	// perform actions depending on conditions
	if ( conds[0] && conds[1] ) {
		console.log( 'footer - render' )
		store.dispatch( switchFooterState({ 
			render: {
				value: true,
				stamp: Date.now()
			} 
		}) );
	};
	
};


/**
 *	Cache component
 *	
 *	triggered by - isRendered
 */

let prevIsRenderedStamp = 0;
function componentCache() {
	let currentState = store.getState();

	// checking if there is need to process
	let isRendered = currentState.components.footer.state.render;

	if ( isRendered.stamp === prevIsRenderedStamp ) {
		return;
	}
	prevIsRenderedStamp = isRendered.stamp;

	// forming conditions
	let conds = [ isRendered.value === true ];

	// perform actions depending on conditions
	if ( conds[0] ) {
		console.log( 'footer - caching' );
		store.dispatch( switchFooterState({ 
			isCached: {
				value: true,
				stamp: Date.now()
			}
		}) );
	}
}

// subscribe handlers
store.subscribe( renderFooter );
store.subscribe( componentCache );