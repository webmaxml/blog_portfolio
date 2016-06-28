// deps
import React from 'react';
// components
import ArchiveItem from '../archiveItem/archiveItem';

class Archive extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
       		<div className="archive">
       			<h1 className="archive__header-line">
	        		<b className="archive__header">Архив</b>
	        	</h1>
	        	<ul className="archive__list">
	        		<ArchiveItem />
	        		<ArchiveItem />
	        	</ul>
       		</div>
        );
    }

}

export default Archive;
