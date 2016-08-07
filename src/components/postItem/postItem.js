// deps
import React from 'react';
import { connect } from 'react-redux';
import TweenMax from 'gsap';
import Helmet from 'react-helmet';
// content components
import PostDate from '../content/postDate/postDate';
import PostCatLink from '../content/postCatLink/postCatLink';
import PostContent from '../content/postContent/postContent';
import SectionHeader from '../content/sectionHeader/sectionHeader';
import PostTagLink from '../content/postTagLink/postTagLink';
// components
import SimilarPosts from '../similarPosts/similarPosts';
import Disqus from '../disqus/disqus';
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
       return (
            <article className="postItem" ref={ ref => this.section = ref }>
                <Helmet title={ this.props.data.item.title } />
                <div className="postItemt__date-line">
                    <PostDate>{ this.props.data.item.date }</PostDate>
                </div>
                <h1 className="postItem__header-line">
                    <b className="postItem__header">{ this.props.data.item.title }</b>
                </h1>
                <ul className="postItem__categories-line">

                    { this.props.data.item.cats.map( cat => {
                        return (
                            <li className="postItem__category-wrap" key={ cat.id }>
                                <PostCatLink href={ `/cats/${ cat.id }/page/1` }>{ cat.title }</PostCatLink>
                            </li>
                        );
                    } ) }
                    
                </ul>
                <div className="postItem__text-line">
                    <PostContent>{ this.props.data.item.content }</PostContent>
                </div>
                <h2 className="postItem__tag-header-line">
                    <SectionHeader>Теги</SectionHeader>
                </h2>
                <ul className="postItem__tag-line">

                    { this.props.data.item.tags.map( tag => {
                        return (
                            <li className="postItem__tag-wrap" key={ tag.id }>
                                <PostTagLink href={ `/tags/${ tag.id }/page/1` }>{ tag.title }</PostTagLink>
                            </li>
                        );
                    } ) }

                </ul>
                <SimilarPosts />
                <Disqus id = { this.props.data.item.id } 
                        title = { this.props.data.item.title }
                />
            </article>
        ); 
    }
}


function mapStateToProps( state ) {
    return {
        render: state.components.postItem.state.render.value,
        data: state.components.postItem.ui
    };
};

const PostItemContainer = connect( mapStateToProps )( transition( PostItem ) );

export default PostItemContainer;
