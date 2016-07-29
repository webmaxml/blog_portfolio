// deps
import React from 'react';
import { reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { push } from 'react-router-redux';

class SearchForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mode: props.mode
        }
    }

    onSubmit( data ) {
        this.props.dispatch( push(`/search/page/1?s=${ data.search }`) );
    }

    render() {
        let classes;
        switch( this.state.mode ) {
            case 'mobile':
                classes = 'searchForm searchForm--mobile';
                break;
            default:
                classes = 'searchForm';
                break;
        };
        const { fields: { search }, handleSubmit } = this.props;
        return ( 
        	<form className={ classes } onSubmit={ handleSubmit( data => this.onSubmit( data ) ) }>
                <div className="searchForm__wrap">
    		        <input type="text" 
                           className="searchForm__search-input" 
                           placeholder="поиск..."
                           { ...search }
                    />
                </div>
    			<button className="searchForm__search-btn">
    				<i className="fa fa-search searchForm__search-icon"></i>
    			</button>
    		</form>
        );
    }

}

SearchForm = reduxForm({
    form: 'searchForm',
    fields: [ 'search' ]
})( SearchForm );

SearchForm = connect()( SearchForm );

export default SearchForm;
