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
import Pagination from '../pagination/pagination';
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
        let { data: { navUri, currPage, params, totalPages, items } } = this.props;
        let children;

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
            	<ul className="postIndex__list">
                    { children }
                </ul>
                <Pagination currPage={ currPage }
                            totalPages={ totalPages }
                            navUri={ navUri }
                            params={ params } />
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