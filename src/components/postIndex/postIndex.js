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
        let prevHref, nextHref;

        prevHref = this.props.data.navUri + ( this.props.data.currPage + 1 );
        nextHref = this.props.data.navUri + ( this.props.data.currPage - 1 );

        if ( this.props.data.currPage === 2 && 
             this.props.data.navUri === 'posts/page/' ) {
            nextHref = '/';
        }

        return (
        	<article className="postIndex" ref={ ref => this.section = ref }>
                <Helmet title="Главная" />
            	<ul className="postIndex__list">
                    { this.props.data.items.map( item => {
                        return(
                            <PostItemExcerpt key={ item.id } { ...item } />
                         );
                    } ) }
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
