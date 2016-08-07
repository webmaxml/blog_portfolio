// deps
import React from 'react';
import { connect } from 'react-redux';
import TweenMax from 'gsap';
// content components
import SectionHeader from '../content/sectionHeader/sectionHeader';
import PostSidebarLink from '../content/postSidebarLink/postSidebarLink';
// helpers
import transition from '../../transition';
// actions
import { postSimilarPostsValue, switchSimilarPostsState } from './actions';

class SimilarPosts extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillEnter( callback ) {
        TweenMax.from( this.section, .3, { opacity: 0, onComplete: callback } );
    }

    componentDidMount() {
        let value = this.section.getBoundingClientRect().top;
        
        this.props.dispatch( postSimilarPostsValue( value ) );
        console.log( 'similarPosts - coord post' );
        this.props.dispatch( switchSimilarPostsState({
            coordPosted: {
                value: true,
                stamp: Date.now()
            }
        }) );
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
        render: state.components.similarPosts.state.render.value,
        data: state.components.similarPosts.ui
    };
};

const SimilarPostsContainer = connect( mapStateToProps )( transition( SimilarPosts ) );

export default SimilarPostsContainer;
