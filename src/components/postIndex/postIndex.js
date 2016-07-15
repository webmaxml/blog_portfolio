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
                            this.props.data.currPage === 2 ?
                                <PostPageLink href="/">Следующие</PostPageLink> :
                                <PostPageLink href={ `/page/${this.props.data.currPage - 1}` }>Следующие</PostPageLink> :
                            null
                        }
                    </div>
                    <div className="postIndex__nav-wrap">
                        { this.props.data.nextPageExist ? 
                            <PostPageLink href={ `/page/${this.props.data.currPage + 1}` }>Предыдущие</PostPageLink> : 
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
