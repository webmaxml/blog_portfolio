// deps
import React from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';
// components
import MonthList from '../monthList/monthList';
// content components
import PostSidebarLink from '../content/postSidebarLink/postSidebarLink';

class ArchiveItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        	monthShow: false
        }

        this.clickHandle = this.clickHandle.bind( this );
    }

    clickHandle( event ) {
        event.preventDefault();
    	this.setState({ monthShow: !this.state.monthShow });
    }

    render() {
        return (
        	<li className="archiveItem">
    			<div className="archiveItem__year-line">
    				<div className="archiveItem__link-wrap">
        				<PostSidebarLink 
                            href={ `/archive/page/1?after=${ this.props.hrefAfter }&before=${ this.props.hrefBefore }` }
                        >
                        { this.props.year }
                        </PostSidebarLink>
        			</div>
        			<div className="archiveItem__toggle-wrap">
	        			<button type="button" className="archiveItem__toggle" onClick={ this.clickHandle } onTouchStart={ this.clickHandle }>
	        				<i className="fa fa-caret-down archiveItem__toggle-icon"></i>
	        			</button>
        			</div>
    			</div>
    			<ReactTransitionGroup component="div">
	    			{ this.state.monthShow ? <MonthList months={ this.props.months }/> : false }
	    		</ReactTransitionGroup>
    		</li>
        );
    }

}

export default ArchiveItem;
