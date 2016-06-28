// deps
import React from 'react';

class PostsTop extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<div className="postsTop">
	        	<h1 className="postsTop__header-line">
	        		<b className="postsTop__header">Топ</b>
	        	</h1>
	        	<ul className="postsTop__list">
	        		<li className="postsTop__item-line">
	        			<a className="postsTop__link" href="#">
	        				Расплата за неправильное питание
	        			</a>
	        		</li>
	        		<li className="postsTop__item-line">
	        			<a className="postsTop__link" href="#">
	        				Адамыч и Ева
	        			</a>
	        		</li>
	        		<li className="postsTop__item-line">
	        			<a className="postsTop__link" href="#">
	        				Сейсмический способ накачать пресс
	        			</a>
	        		</li>
	        		<li className="postsTop__item-line">
	        			<a className="postsTop__link" href="#">
	        				Собаки и все что с ними связано
	        			</a>
	        		</li>
	        		<li className="postsTop__item-line">
	        			<a className="postsTop__link" href="#">
	        				Сетевой маркетинг. Мой личный опыт
	        			</a>
	        		</li>
	        	</ul>
	        </div>
	    );
    }

}

export default PostsTop;
