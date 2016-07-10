// deps
import React from 'react';
import { connect } from 'react-redux';
// content components
import PostPageLink from '../content/postPageLink/postPageLink'
// components
import PostItemExcerpt from '../postItemExcerpt/postItemExcerpt';
// helpers
import smoothAppear from '../../smoothAppear';

class PostIndex extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<article className="postIndex">
            	<ul className="postIndex__list">
                    { this.props.items.map( item => {
                        return(
                            <PostItemExcerpt key={ item.id } { ...item } />
                         );
                    } ) }
                </ul>
                <div className="postIndex__nav-line">
                    <PostPageLink href="#">Следующие</PostPageLink>
                    <PostPageLink href="#">Предыдущие</PostPageLink>
                </div>
        	</article>
        );
    }

};

function mapStateToProps( state ) {
    return {
        data: state.components.postIndex.data
    };
};

const PostIndexContainer = connect( mapStateToProps )( smoothAppear( PostIndex ) );

export default PostIndexContainer;
