// deps
import React from 'react';
import { connect } from 'react-redux';
// content components
import PostDate from '../content/postDate/postDate';
import PostHeaderLink from '../content/postHeaderLink/postHeaderLink';
import PostCatLink from '../content/postCatLink/postCatLink';
import PostContent from '../content/postContent/postContent';

class PostItem extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        this.section.style.opacity = 1;
        window.scrollTo( 0, 0 );
    }

    render() {
        const { date, title, cats, content } = this.props.postItem;

        return (
        	<article className="postItem" ref={ ref => this.section = ref }>
                <div className="postItemt__date-line">
        			<PostDate>{ date }</PostDate>
        		</div>
        		<h1 className="postItem__header-line">
        			<PostHeaderLink href="#">{ title }</PostHeaderLink>
        		</h1>
        		<ul className="postItem__categories-line">

                    { cats.map( cat => {
                        return (
                            <li className="postItem__category-wrap" key={ cat.id }>
                                <PostCatLink href="#">{ cat.title }</PostCatLink>
                            </li>
                        );
                    } ) }
        			
        		</ul>
        		<div className="postItem__text-line">
        			<PostContent>{ content }</PostContent>
        		</div>
        	</article>
        );
    }

}

function mapStateToProps( state, ownProps ) {
    const postItem = _.find( state.components.postIndex.data.items, 
            item => item.id === +ownProps.params.id );

    return { postItem };
};

const PostItemContainer = connect( mapStateToProps )( PostItem );

export default PostItemContainer;
