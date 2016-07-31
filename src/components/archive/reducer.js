// actions
import { unrenderDateArchive,
		 renderDateArchive,
		 formDateArchive,
		 cacheDateArchive,
		 RENDER_ARCHIVE,
		 UNRENDER_ARCHIVE,
		 CACHE_ARCHIVE,
		 FORM_ARCHIVE } from './actions';

const initialState = {
	showOnInit: true,
	toCache: true,
	cached: false,
	hide: unrenderDateArchive,
	show: renderDateArchive,
	form: formDateArchive,
	cache: cacheDateArchive,
	api: [ 14 ],
	data: {
		render: false,
		items: []
	}
};

function dateArchive( state = initialState, action ) {
	switch ( action.type ) {
		case RENDER_ARCHIVE:
			return _.extend( {}, state, {
				data: { 
					render: true,
					items: [].concat( state.data.items )
				} 
			} );
		case UNRENDER_ARCHIVE:
			return _.extend( {}, state, {
				data: { 
					render: false,
					items: [].concat( state.data.items )
				} 
			} );
		case FORM_ARCHIVE:
			const json = action.result[0];

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
				data: {
					render: state.data.render,
					items 
				}
			});
		case CACHE_ARCHIVE:
			return _.extend( {}, state, {
				toCache: false,
				cached: true
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