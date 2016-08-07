// deps
import React from 'react';
import { connect } from 'react-redux';
// components
import ArchiveItem from '../archiveItem/archiveItem';
// helpers
import transition from '../../transition';

class Archive extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillEnter( callback ) {
        TweenMax.from( this.section, .3, { opacity: 0, onComplete: callback } );
    }

    render() {
        return (
       		<div className="archive" ref={ ref => this.section = ref }>
       			<h1 className="archive__header-line">
	        		<b className="archive__header">Архив</b>
	        	</h1>
	        	<ul className="archive__list">

                    { this.props.data.items.map( (item, index) => {
                        return(
                            <ArchiveItem key={ index } { ...item }/>
                        );
                    } ) }

	        	</ul>
       		</div>
        );
    }

}

function mapStateToProps( state ) {
    return {
        render: state.components.dateArchive.state.render.value,
        data: state.components.dateArchive.ui
    };
};

const ArchiveContainer = connect( mapStateToProps )( transition( Archive ) );

export default ArchiveContainer;