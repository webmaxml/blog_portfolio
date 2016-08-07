// deps
import store from '../../store';

let disqusThrottled = _.throttle( handleDisqus, 300 );

let previousState;
function handler() {
	let currentState = store.getState().modules.scrollListener.state;
	if ( previousState === currentState ) { return; }
		previousState = currentState;

		switch( currentState ) {
			case 'hideDisqus':
				unrenderDisqus();
				break;
			case 'setScrollListener':
				window.addEventListener( 'scroll', disqusThrottled );
				break;
			default:
				break;
		};
}

function handleDisqus( event ) {
	let scrollValue = event.view.innerHeight + event.pageY;

	console.log( 'scrolling - ' + scrollValue );

    if ( scrollValue > 2000 ) {
        renderDisqus();
        console.log( 'removing handler' );
        window.removeEventListener( 'scroll', disqusThrottled );
    }
}

function renderDisqus() {
    store.dispatch( store.getState().components.disqus.show() );
}

function unrenderDisqus() {
    store.dispatch( store.getState().components.disqus.hide() );
}


let unsubscribe = store.subscribe( handler );