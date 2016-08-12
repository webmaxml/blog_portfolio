// deps
import React from 'react';
import { Link } from 'react-router';

class Pagination extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        let { currPage, totalPages, navUri, params } = this.props;

        let prevHref = '/' + navUri + ( currPage + 1 ) + params;
        let nextHref = '/' + navUri + ( currPage - 1 ) + params;

        if ( totalPages < 2 ) { return null }

        if ( currPage === 2 && navUri === 'posts/page/' ) {
            nextHref = '/';
        }

        let numberLinks = [];
        let classes;
        let pageNum = getFirstPaginationItem( currPage );

        if ( pageNum > 1 ) {
            numberLinks.push( 
                <li className="pagination__item" key={ 0 }>
                    <Link className="pagination__num-btn" to={ '/' + navUri + '1' + params }>{ 1 }</Link> 
                </li>,
                <li className="pagination__item" key={ 1 }>
                    <span className="pagination__num-btn">...</span>
                </li>
            );
        }
    
        for (let i = 1; i <= 5; i++, pageNum++ ) {
            classes = currPage === pageNum ? 'pagination__num-btn pagination__num-btn--active' : 'pagination__num-btn';
            if ( pageNum > totalPages ) { break; }

            numberLinks.push( 
                <li className="pagination__item" key={ pageNum }>
                    <Link className={ classes } to={ '/' + navUri + pageNum + params }>{ pageNum }</Link> 
                </li>
            );
        }

        if ( pageNum < totalPages ) {
            numberLinks.push( 
                <li className="pagination__item" key={ pageNum }>
                    <span className="pagination__num-btn">...</span>
                </li>,
                <li className="pagination__item" key={ totalPages }>
                    <Link className="pagination__num-btn" to={ '/' + navUri + totalPages + params }>{ totalPages }</Link> 
                </li>
            );
        }

        return (
            <ul className="pagination">
                <li className="pagination__item">
                    { currPage > 1 ? 
                        <Link to={ nextHref } className="pagination__arrow-btn">
                            <i className="fa fa-angle-double-left pagination__icon" />
                        </Link> :
                        null
                    }
                </li>
                { numberLinks }
                <li className="pagination__item">
                    { currPage < totalPages ?
                        <Link to={ prevHref } className="pagination__arrow-btn">
                            <i className="fa fa-angle-double-right pagination__icon" />
                        </Link> :
                        null
                    }
                </li>    
            </ul>
        );
    }

};

function getFirstPaginationItem( currPage ) {
    // if the rest is null, we need to make it 5 to get pagination item
    let rest = ( currPage % 5 ) === 0 ? 5 : currPage % 5;
    return currPage - rest + 1;
}


export default Pagination;

                    