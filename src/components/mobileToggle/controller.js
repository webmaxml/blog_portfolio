// deps
import store from '../../store';
// actions
import { switchMobileToggleState } from './actions';

/**
 *	Close button on mobile menu close
 *	
 *	triggered by - mobileMenuRender
 */

// let prevMobileRenderStamp = 0;
// function buttonCloser() {
// 	let currentState = store.getState();

// 	// checking if there is need to process
// 	let mobileMenuRender = currentState.components.mobileMenu.state.render;
// 	if ( mobileMenuRender.stamp === prevMobileRenderStamp ) {
// 		return;
// 	}
// 	prevMobileRenderStamp = mobileMenuRender.stamp;

// 	let toggleOpen = currentState.components.mobileToggle.state.open;

// 	let conds = [
// 		mobileMenuRender.value === false,
// 		toggleOpen.value === true
// 	]

// 	if ( conds[0] && conds[1] ) {

// 		console.log( 'mobileToggle - close on mobile close' );
// 		store.dispatch( switchMobileToggleState({
// 			open: {
// 				value: false,
// 				stamp: Date.now()
// 			}
// 		}) )

// 	}

// };

// // subscribe handlers
// store.subscribe( buttonCloser );