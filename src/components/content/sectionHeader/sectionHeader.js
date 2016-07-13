// deps
import React from 'react';

class SectionHeader extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<b className="sectionHeader">
                { this.props.children }
            </b>
        );
    }
}

export default SectionHeader;
