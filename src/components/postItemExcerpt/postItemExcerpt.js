// deps
import React from 'react';
// content components
import PostDate from '../content/postDate/postDate';
import PostHeaderLink from '../content/postHeaderLink/postHeaderLink';
import PostCatLink from '../content/postCatLink/postCatLink';
import PostContent from '../content/postContent/postContent';
import PostCommentsLink from '../content/postCommentsLink/postCommentsLink';
import BtnLink from '../content/btnLink/btnLink';

class PostItemExcerpt extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<li className="postItemExcerpt">
        		<div className="postItemExcerpt__date-line">
        			<PostDate>{ this.props.date }</PostDate>
        		</div>
        		<h1 className="postItemExcerpt__header-line">
        			<PostHeaderLink href={ `/post/${ this.props.id }` }>{ this.props.title }</PostHeaderLink>
        		</h1>
        		<ul className="postItemExcerpt__categories-line">

                    { this.props.cats.map( cat => {
                        return (
                            <li className="postItemExcerpt__category-wrap" key={ cat.id }>
                                <PostCatLink href="#">{ cat.title }</PostCatLink>
                            </li>
                        );
                    } ) }
        			
        		</ul>
        		<div className="postItemExcerpt__text-line">
        			<PostContent>{ this.props.excerpt }</PostContent>
        		</div>
        		<footer className="postItemExcerpt__footer-line">
                    <div className="postItemExcerpt__read-wrap">
                        <BtnLink href={ `/post/${ this.props.id }`}>Читать далее</BtnLink>
                    </div>
                    <div className="postItemExcerpt__comments-wrap">
                        <PostCommentsLink href={ `/post/${ this.props.id }` }></PostCommentsLink>
                    </div>
                </footer>
        	</li>
        );
    }

}

export default PostItemExcerpt;
