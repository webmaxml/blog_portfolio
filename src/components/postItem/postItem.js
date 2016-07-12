// deps
import React from 'react';
import { connect } from 'react-redux';
import TweenMax from 'gsap';
// content components
import PostDate from '../content/postDate/postDate';
import PostHeaderLink from '../content/postHeaderLink/postHeaderLink';
import PostCatLink from '../content/postCatLink/postCatLink';
import PostContent from '../content/postContent/postContent';
// helpers
import transition from '../../transition';

class PostItem extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillEnter( callback ) {
        TweenMax.from( this.section, .3, { opacity: 0, onComplete: callback } );
    }

    render() {
        console.log( 'render' );
       return (
            <article className="postItem" ref={ ref => this.section = ref }>
                <div className="postItemt__date-line">
                    <PostDate>{ this.props.data.item.date }</PostDate>
                </div>
                <h1 className="postItem__header-line">
                    <PostHeaderLink href="#">{ this.props.data.item.title }</PostHeaderLink>
                </h1>
                <ul className="postItem__categories-line">

                    { this.props.data.item.cats.map( cat => {
                        return (
                            <li className="postItem__category-wrap" key={ cat.id }>
                                <PostCatLink href="#">{ cat.title }</PostCatLink>
                            </li>
                        );
                    } ) }
                    
                </ul>
                <div className="postItem__text-line">
                    <PostContent>{ this.props.data.item.content }</PostContent>
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

const PostItemContainer = connect( mapStateToProps )( transition( PostItem ) );

export default PostItemContainer;
