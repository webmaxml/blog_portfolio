// deps
import React from 'react';
import { connect } from 'react-redux';
// components
import Post from '../post/post';
// actions
import { fetchPosts, fetchCats } from '../../actions';

class PostSection extends React.Component {

    constructor(props) {
        super(props);
    }

    componentDidUpdate() {
        // making css transition when all items are rendered
        if ( this.props.data.render ) {
            this.section.style.opacity = 1;
        }
    }

    render() {
        return (
        	<section className="postSection" ref={ ref => this.section = ref }>
                { this.props.data.render ? 
            		<ul className="postSection__list">
                        { this.props.data.items.map( item => {
                            return(
                                <Post key={ item.id } { ...item } mode="excerpt" />
                            );
                        } ) }
                    </ul>
                    : false 
                }
                <div className="postSection__nav-line">
                    <a className="postSection__nav-link" href="#">Следующие</a>
                    <a className="postSection__nav-link" href="#">Предыдущие</a>
                </div>
        	</section>
        );
    }

};

function mapStateToProps( state ) {
    return {
        data: state.components.postIndex.data
    };
};

const PostSectionContainer = connect( mapStateToProps )( PostSection );

export default PostSectionContainer;