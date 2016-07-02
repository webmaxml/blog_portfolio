// deps
import React from 'react';
import { connect } from 'react-redux';
// components
import Post from '../post/post';
// actions
import { fetchPosts } from '../../actions';

class PostSection extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            posts: {
                render: false,
                items: []
            }
        }
    }

    componentDidMount() {
        this.props.dispatch( fetchPosts() );
    }

    componentWillReceiveProps( nextProps ) {
        let items = nextProps.items.map( item => {
            return {
                id: item.id,
                date: new Date( item.modified ).toLocaleDateString( 'ru', { day: 'numeric', month: 'long', year: 'numeric' } ),
                title: item.title.rendered
            }
        } );

        this.setState({ posts: { render: true, items } });
    }

    shouldComponentUpdate( nextProps, nextState ) {
        // update only on state change
        return nextState !== this.state;
    }

    render() {
        return (
        	<section className="postSection">
                { this.state.posts.render ? 
            		<ul className="postSection__list">
                        { this.state.posts.items.map( item => {
                            return(
                                <Post key={ item.id } { ...item }/>
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
        items: state.posts.items
    };
};

const PostSectionContainer = connect( mapStateToProps )( PostSection );

export default PostSectionContainer;
