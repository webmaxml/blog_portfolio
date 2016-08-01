// deps
import React from 'react';
import { connect } from 'react-redux';
import TweenMax from 'gsap';
import store from '../../store';
// content components
import SectionHeader from '../content/sectionHeader/sectionHeader';
import PostSidebarLink from '../content/postSidebarLink/postSidebarLink';
// helpers
import transition from '../../transition';

class SimilarPosts extends React.Component {

    constructor(props) {
        super(props);

        this.throttled = _.throttle( this.scrollHandler.bind( this ), 300 );
        this.hideDisqus = store.getState().components.disqus.hide;
        this.showDisqus = store.getState().components.disqus.show;
    }

    componentWillEnter( callback ) {
        TweenMax.from( this.section, .3, { opacity: 0, onComplete: callback } );
    }

    componentDidMount() {
        this.bottomValue = this.section.getBoundingClientRect().top;
        
        window.addEventListener( 'scroll', this.throttled );
    }

    scrollHandler( event ) {
        let scrollValue = event.view.innerHeight + event.pageY;

        if ( scrollValue > this.bottomValue ) {
            this.renderDisqus();
            this.removeScrollListener();
        }
    }

    renderDisqus() {
        this.props.dispatch( this.showDisqus() );
    }

    componentWillUnmount() {
        this.removeScrollListener();
        this.props.dispatch( this.hideDisqus() );
    }

    removeScrollListener() {
        window.removeEventListener( 'scroll', this.throttled );
    }

    render() {
        return (
        	<div className="similarPosts" ref={ ref => this.section = ref }>
        		<h2 className="similarPosts__header-line">
        			<SectionHeader>Похожие</SectionHeader>
        		</h2>
        		<ul className="similarPosts__list-line">
                
                    { this.props.data.items.map( item => {
                        return (
                            <li className="similarPosts__item-wrap" key={ item.id }>
                                <PostSidebarLink href={ `/post/${ item.id }` }>{ item.title }</PostSidebarLink>
                            </li>
                        );
                    } ) }

        		</ul>
        	</div>
        );
    }

}

function mapStateToProps( state ) {
    return {
        data: state.components.similarPosts.data
    };
};

const SimilarPostsContainer = connect( mapStateToProps )( transition( SimilarPosts ) );

export default SimilarPostsContainer;
