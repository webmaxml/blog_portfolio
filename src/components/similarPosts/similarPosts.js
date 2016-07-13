// deps
import React from 'react';
// content components
import SectionHeader from '../content/sectionHeader/sectionHeader';
import PostSidebarLink from '../content/postSidebarLink/postSidebarLink';

class SimilarPosts extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<div className="similarPosts">
        		<h2 className="similarPosts__header-line">
        			<SectionHeader>Похожие</SectionHeader>
        		</h2>
        		<ul className="similarPosts__list-line">
        			<li className="similarPosts__item-wrap">
        				<PostSidebarLink href="#">Похожий пост номер 1</PostSidebarLink>
        			</li>
        			<li className="similarPosts__item-wrap">
        				<PostSidebarLink href="#">Похожий пост номер 2</PostSidebarLink>
        			</li>
        			<li className="similarPosts__item-wrap">
        				<PostSidebarLink href="#">Похожий пост номер 3</PostSidebarLink>
        			</li>
        		</ul>
        	</div>
        );
    }

}

export default SimilarPosts;
