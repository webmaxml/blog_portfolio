// // deps
// import getData from '../dataFetch';

// // separator in components between name and state
// const stateSep = /:/;

// export function initPage( componentNames, data ) {
// 	return function( dispatch, getState ) {

// 		return new Promise( resolve => resolve( dispatch( getComponentsList( componentNames ) ) ) )
// 				.then( componentsList => dispatch( hideComponents( componentsList ) ) )
// 				.then( componentsList => {

// 					// every component has api list to fetch, there are common api items
// 					// we need to cache them and check the cache before fetching new api item
// 					let cache = {};
// 					let pagePromises = componentsList.map( component => { 
// 						return getComponentData( component, _.extend( { cache }, data ) )
// 								.then( result => component.form ? dispatch( component.form( result ) ) : true )
// 								.then( () => component.showOnInit ? dispatch( component.show() ) : true )
// 								.then( () => cacheComponent( component, dispatch ) )
// 					});

// 					Promise.all( pagePromises ).catch( error => console.log( error ) );

// 				} )

// 	};
// };


// function getComponentsList( componentNames ) {
// 	return function( dispatch, getState ) {
// 		let components = getState().components;
// 		let componentsList = [];

// 		componentNames.map( name => {

// 			// check if name contains component's state
// 			if ( stateSep.test( name ) ) {
// 				let state = name.slice( name.search( stateSep ) + 1 );
// 				name = name.slice( 0, name.search( stateSep ) );

// 				// if component is not cached, switch its state and add to list
// 				if ( !components[name].cached ) { 
// 					dispatch( components[name].switchState( state ) );
// 					componentsList.push( getState().components[name] );
// 				}

// 			} else {

// 				// if there is no state in name, just check if cached and add to list
// 				if ( !components[name].cached ) { 
// 					componentsList.push( components[name] );
// 				}
// 			}

// 		});	

// 		return componentsList;
// 	}
// };

// function hideComponents( componentsList ) {
// 	return function( dispatch, getState ) {
// 		componentsList.forEach( component => dispatch( component.hide() ) );

// 		return componentsList;
// 	}
// };



// function getComponentData( component, data ) {
	
// 	return Promise.all( component.api.map( id => {

// 		// if the promise is already cached - return it 
// 		if ( typeof data.cache[id] !== 'undefined' ) {
// 			return data.cache[id];
// 		} else {
// 			return data.cache[id] = getData( id, data );
// 		}

// 	} ) );
// };


// function cacheComponent( component, dispatch ) {
// 	if ( component.toCache ) {
// 		dispatch( component.cache() );
// 	} 
// }

// function getComponentsData( componentsList ) {
// 	return function( dispatch, getState ) {
// 		let cache = {};

// 		let pagePromises = componentsList.map( component => { 
// 			let componentPromise = Promise.all( component.api.map( id => {

// 				// if the promise is already cached - return it 
// 				if ( typeof cache[id] !== 'undefined' ) {
// 					return cache[id];
// 				} else {
// 					return cache[id] = getData( id, data );
// 				}

// 			} ) );
					
// 		return componentPromise

// 		});

// 	}
// };

// switch page state
export const SWITCH_PAGE_STATE = 'SWITCH_PAGE_STATE';
export function switchPageState( newState ) {
	return {
		type: SWITCH_PAGE_STATE,
		newState
	};
};

// form page data
export const FORM_PAGE_DATA = 'FORM_PAGE_DATA';
export function formPageData( data ) {
	return {
		type: FORM_PAGE_DATA,
		data
	};
};