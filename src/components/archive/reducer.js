// actions
import { SWITCH_ARCHIVE_STATE, FORM_ARCHIVE } from './actions';

const initialState = {
	api: [ 14 ],
	ui: {
		items: []
	},
	state: {
		render: {
			value: false,
			stamp: 0
		},
		needToFetch: {
			value: false,
			stamp: 0
		},
		isFetched: {
			value: false,
			stamp: 0
		},
		isFormed: {
			value: false,
			stamp: 0
		},
		isCached: {
			value: false,
			stamp: 0
		}
	}
};

function dateArchive( state = initialState, action ) {
	switch ( action.type ) {
		case FORM_ARCHIVE:
			const json = action.fetchData[0];

			const firstPostDate = new Date( json[0].date );
			const lastPostDate = new Date( json[1].date );

			const firstPostYear = firstPostDate.getFullYear();
			const firstPostMonth = firstPostDate.getMonth();
			const lastPostYear = lastPostDate.getFullYear();
			const lastPostMonth = lastPostDate.getMonth();

			const monthList = [ 
				'Январь', 
				'Февраль', 
				'Март', 
				'Апрель', 
				'Май', 
				'Июнь', 
				'Июль', 
				'Август', 
				'Сентябрь', 
				'Октябрь', 
				'Ноябрь', 
				'Декабрь' 
			];

			let items = [];
			for ( let i = 0; i <= lastPostYear - firstPostYear; i++ ) {
				let year = firstPostYear + i;

				let firstMonth = year === firstPostYear ? firstPostMonth : 0;
				let lastMonth = year === lastPostYear ? lastPostMonth : 11;

				let months = [];
				for ( firstMonth; firstMonth <= lastMonth; firstMonth++ ) {
					months.push({
						title: monthList[ firstMonth ],
						hrefAfter: toLocalISOString( year, firstMonth ),
						hrefBefore: toLocalISOString( year, firstMonth + 1 )
					});
				};

				items.push({
					year,
					hrefAfter: toLocalISOString( year, 0 ),
					hrefBefore: toLocalISOString( year + 1, 0 ),
					months
				});
			};

			return _.extend( {}, state, { 
				ui: {
					items 
				}
			});
		case SWITCH_ARCHIVE_STATE:
			let needToFetch = typeof action.newState.needToFetch === 'undefined' ? 
								  	state.state.needToFetch :
								  	action.newState.needToFetch;
			let isFetched = typeof action.newState.isFetched === 'undefined' ?  
									  state.state.isFetched :
									  action.newState.isFetched;
			let isFormed = typeof action.newState.isFormed === 'undefined' ?  
									  state.state.isFormed :
									  action.newState.isFormed;
			let isCached = typeof action.newState.isCached === 'undefined' ?  
									  state.state.isCached :
									  action.newState.isCached;
			let render = typeof action.newState.render === 'undefined' ?  
									  state.state.render :
									  action.newState.render;

			// if value = 'toggle', toggle the value
			needToFetch.value = needToFetch.value === 'toggle' ? !state.state.needToFetch.value : needToFetch.value;
			isFetched.value = isFetched.value === 'toggle' ? !state.state.isFetched.value : isFetched.value;
			isFormed.value = isFormed.value === 'toggle' ? !state.state.isFormed.value : isFormed.value;
			isCached.value = isCached.value === 'toggle' ? !state.state.isCached.value : isCached.value;
			render.value = render.value === 'toggle' ? !state.state.render.value : render.value;

			return _.extend( {}, state, { 
				state: {
					render,
					needToFetch,
					isFetched,
					isFormed,
					isCached
				}
			} );
		default:
			return state;
	}
};

// helper
function toLocalISOString( year, month ) {
	let zoneDiff = 10800000;
	let date = new Date( year, month ).valueOf();

	return new Date( date + zoneDiff ).toISOString()
}

export default dateArchive;