// deps
import React from 'react';

class SearchForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            mode: props.mode
        }
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
        return (
        	<form className={ classes }>
                <div className="searchForm__wrap">
    		        <input type="text" className="searchForm__search-input" placeholder="поиск..."/>
                </div>
    			<button className="searchForm__search-btn">
    				<i className="fa fa-search searchForm__search-icon"></i>
    			</button>
    		</form>
        );
    }

}

export default SearchForm;
