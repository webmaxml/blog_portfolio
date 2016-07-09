// deps
import React from 'react';
// content components
import PostDate from '../content/postDate/postDate';
import PostHeaderLink from '../content/postHeaderLink/postHeaderLink';
import PostCatLink from '../content/postCatLink/postCatLink';
import PostContent from '../content/postContent/postContent';
import PostCommentsLink from '../content/postCommentsLink/postCommentsLink';
import BtnLink from '../content/btnLink/btnLink';
// components
import ExcerptFooter from '../excerptFooter/excerptFooter';

class Post extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<li className="post">
        		<div className="post__date-line">
        			<PostDate>{ this.props.date }</PostDate>
        		</div>
        		<h1 className="post__header-line">
        			<PostHeaderLink href="#">{ this.props.title }</PostHeaderLink>
        		</h1>
        		<ul className="post__categories-line">

                    { this.props.cats.map( cat => {
                        return (
                            <li className="post__category-wrap" key={ cat.id }>
                                <PostCatLink href="#">{ cat.title }</PostCatLink>
                            </li>
                        );
                    } ) }
        			
        		</ul>
        		<div className="post__text-line">
        			<PostContent>{ this.props.excerpt }</PostContent>
        		</div>
        		<footer className="post__footer-line">
                    <div className="post__read-wrap">
                        <BtnLink href="#">Читать далее</BtnLink>
                    </div>
                    <div className="post__comments-wrap">
                        <PostCommentsLink href="#">2 комментария</PostCommentsLink>
                    </div>
                </footer>
        	</li>
        );
    }

}

export default Post;
