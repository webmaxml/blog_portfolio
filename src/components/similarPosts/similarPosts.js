// deps
import React from 'react';
import { connect } from 'react-redux';
import TweenMax from 'gsap';
// content components
import SectionHeader from '../content/sectionHeader/sectionHeader';
import PostSidebarLink from '../content/postSidebarLink/postSidebarLink';
// helpers
import transition from '../../transition';

class SimilarPosts extends React.Component {

    constructor(props) {
        super(props);
    }

    componentWillEnter( callback ) {
        TweenMax.from( this.section, .3, { opacity: 0, onComplete: callback } );
    }

    render() {
        return (
        	<div className="similarPosts">
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
