// deps
import React from 'react';
import ReactTransitionGroup from 'react-addons-transition-group';
// components
import MonthList from '../monthList/monthList';

class ArchiveItem extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
        	monthShow: false
        }

        this.clickHandle = this.clickHandle.bind( this );
    }

    clickHandle() {
    	this.setState({ monthShow: !this.state.monthShow });
    }

    render() {
        return (
        	<li className="archiveItem">
    			<div className="archiveItem__year-line">
    				<div className="archiveItem__link-wrap">
        				<a className="archiveItem__link" href="#">2015</a>
        			</div>
        			<div className="archiveItem__toggle-wrap">
	        			<button type="button" className="archiveItem__toggle" onClick={ this.clickHandle }>
	        				<i className="fa fa-caret-down archiveItem__toggle-icon"></i>
	        			</button>
        			</div>
    			</div>
    			<ReactTransitionGroup component="div">
	    			{ this.state.monthShow ? <MonthList /> : false }
	    		</ReactTransitionGroup>
    		</li>
        );
    }

}

export default ArchiveItem;
