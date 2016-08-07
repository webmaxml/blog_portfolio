// deps
import React from 'react';
import { connect } from 'react-redux';
import TweenMax from 'gsap';
import Helmet from 'react-helmet';
import ReactTransitionGroup from 'react-addons-transition-group';
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
        let { data: { navUri, currPage, params, nextPageExist, items } } = this.props;

        prevHref = navUri + ( currPage + 1 ) + params;
        nextHref = navUri + ( currPage - 1 ) + params;

        if ( currPage === 2 && navUri === 'posts/page/' ) {
            nextHref = '/';
        }

        if ( items.length === 0 ) {
            children = [ <li className="postIndex__notFound" key="0">К сожалению постов по данному запросу не найдено</li> ];
        } else {
            children = items.map( item => {
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
                        { currPage > 1 ? 
                            <PostPageLink href={ nextHref }>Следующие</PostPageLink> :
                            null
                        }
                    </div>
                    <div className="postIndex__nav-wrap">
                        { nextPageExist ? 
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
        render: state.components.postIndex.state.render.value,
        data: state.components.postIndex.ui
    };
};

PostIndex = connect( mapStateToProps )( transition( PostIndex ) );

export default PostIndex;