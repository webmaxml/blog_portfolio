// deps
import React from 'react';
// components
import ExcerptFooter from '../excerptFooter/excerptFooter';

class Post extends React.Component {

    constructor(props) {
        super(props);
    }

    getExcerpt() {
        return this.props.excerpt;
    }

    render() {
        return (
        	<li className="post">
        		<div className="post__date-line">
        			<span className="post__date">{ this.props.date }</span>
        		</div>
        		<h1 className="post__header-line">
        			<a className="post__header" href="#">{ this.props.title }</a>
        		</h1>
        		<ul className="post__categories-line">

                    { this.props.cats.map( cat => {
                        return (
                            <li className="post__category-wrap" key={ cat.id }>
                                <a className="post__category-link" href="#">
                                    { cat.title }
                                </a>
                            </li>
                        );
                    } ) }
        			
        		</ul>
        		<div className="post__text-line">
        			<p className="post__text" dangerouslySetInnerHTML={{ __html: this.getExcerpt() }} ></p>
        		</div>
        		<ExcerptFooter />
        	</li>
        );
    }

}

export default Post;
