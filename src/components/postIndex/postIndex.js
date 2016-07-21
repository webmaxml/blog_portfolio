// deps
import React from 'react';
import { connect } from 'react-redux';
import TweenMax from 'gsap';
import Helmet from 'react-helmet';
// content components
import PostPageLink from '../content/postPageLink/postPageLink'
// components
import PostItemExcerpt from '../postItemExcerpt/postItemExcerpt';
// helpers
import transition from '../../transition';

class PostIndex extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        // reseting comment count
        DISQUSWIDGETS.getCount({reset: true});
    }

    componentWillEnter( callback ) {
        TweenMax.from( this.section, .3, { opacity: 0, onComplete: callback } );
    }
    render() {
        let prevHref, nextHref, children;

        prevHref = this.props.data.navUri + ( this.props.data.currPage + 1 ) + this.props.data.params;
        nextHref = this.props.data.navUri + ( this.props.data.currPage - 1 ) + this.props.data.params;

        if ( this.props.data.currPage === 2 && 
             this.props.data.navUri === 'posts/page/' ) {
            nextHref = '/';
        }

        if ( this.props.data.items.length === 0 ) {
            children = [ <li className="postIndex__notFound" key="0">К сожалению постов по данному запросу не найдено</li> ];
        } else {
            children = this.props.data.items.map( item => {
                return(
                    <PostItemExcerpt key={ item.id } { ...item } />
                 );
            } ) 
        };

        return (
        	<article className="postIndex" ref={ ref => this.section = ref }>
                <Helmet title="Главная" />
            	<ul className="postIndex__list">
                    { children }
                </ul>
                <div className="postIndex__nav-line">
                    <div className="postIndex__nav-wrap">
                        { this.props.data.currPage > 1 ? 
                            <PostPageLink href={ nextHref }>Следующие</PostPageLink> :
                            null
                        }
                    </div>
                    <div className="postIndex__nav-wrap">
                        { this.props.data.nextPageExist ? 
                            <PostPageLink href={ prevHref }>Предыдущие</PostPageLink> : 
                            null 
                        }
                    </div>
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

const PostIndexContainer = connect( mapStateToProps )( transition( PostIndex ) );

export default PostIndexContainer;
