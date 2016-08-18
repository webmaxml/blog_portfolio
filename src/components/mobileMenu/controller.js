// deps
import store from '../../store';
// actions
import { switchMobileMenuState } from './actions';

/**
 *	Toggles menu on button click
 *	
 *	triggered by - mobileToggle
 */

let prevMobileToggleStamp = 0;
function menuToggle() {
	let currentState = store.getState();

	// checking if there is need to process
	let mobileToggle = currentState.components.mobileToggle.state.open;

	if ( mobileToggle.stamp === prevMobileToggleStamp ) {
		return;
	}
	prevMobileToggleStamp = mobileToggle.stamp;


	let conds = [
		mobileToggle.value === true
	];

	if ( conds[0] ) {
		console.log( 'mobileMenu - open' );
		store.dispatch( switchMobileMenuState({
			render: {
				value: true,
				stamp: Date.now()
			}
		}) )
	}

};

/**
 *	Hides menu on page refresh
 *	
 *	triggered by - page
 */

let prevPageStamp = 0;
function menuHideOnRefresh() {
	let currentState = store.getState();

	// checking if there is need to process
	let currentPage = currentState.pages.state.currentPage;

	if ( currentPage.stamp === prevPageStamp ) {
		return;
	}
	prevPageStamp = currentPage.stamp;

	let mobileOpen = currentState.components.mobileMenu.state.render;

	if ( mobileOpen.value === true ) {
		console.log( 'mobileMenu - hide on refresh' );
		store.dispatch( switchMobileMenuState({
			render: {
				value: false,
				stamp: Date.now()
			}
		}) )
	}
	
};

// subscribe handlers
store.subscribe( menuToggle );
store.subscribe( menuHideOnRefresh );