// deps
import React from 'react';
import { connect } from 'react-redux';
// content components
import PostDate from '../content/postDate/postDate';
import PostHeaderLink from '../content/postHeaderLink/postHeaderLink';
import PostCatLink from '../content/postCatLink/postCatLink';
import PostContent from '../content/postContent/postContent';
// helpers
import smoothAppear from '../../smoothAppear';

class PostItem extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
       return (
            <article className="postItem">
                <div className="postItemt__date-line">
                    <PostDate>{ this.props.item.date }</PostDate>
                </div>
                <h1 className="postItem__header-line">
                    <PostHeaderLink href="#">{ this.props.item.title }</PostHeaderLink>
                </h1>
                <ul className="postItem__categories-line">

                    { this.props.item.cats.map( cat => {
                        return (
                            <li className="postItem__category-wrap" key={ cat.id }>
                                <PostCatLink href="#">{ cat.title }</PostCatLink>
                            </li>
                        );
                    } ) }
                    
                </ul>
                <div className="postItem__text-line">
                    <PostContent>{ this.props.item.content }</PostContent>
                </div>
            </article>
        ); 
    }
}


function mapStateToProps( state ) {
    return {
        data: state.components.post.data
    };
};

const PostItemContainer = connect( mapStateToProps )( smoothAppear( PostItem ) );

export default PostItemContainer;
