// deps
import React from 'react';
import { connect } from 'react-redux';
// content components
import PostPageLink from '../content/postPageLink/postPageLink'
// components
import PostItemExcerpt from '../postItemExcerpt/postItemExcerpt';

class PostIndex extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        // making css transition when all items are rendered
        if ( this.props.data.render ) {
            this.section.style.opacity = 1;
        }
    }

    render() {
        return (
        	<article className="postIndex" ref={ ref => this.section = ref }>
                { this.props.data.render ? 
            		<ul className="postIndex__list">
                        { this.props.data.items.map( item => {
                            return(
                                <PostItemExcerpt key={ item.id } { ...item } />
                            );
                        } ) }
                    </ul>
                    : false 
                }
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

const PostIndexContainer = connect( mapStateToProps )( PostIndex );

export default PostIndexContainer;
