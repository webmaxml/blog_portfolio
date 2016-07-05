// deps
import React from 'react';

class Post extends React.Component {

    constructor(props) {
        super(props);
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
        			<p className="post__text">
	        			{ `Что нередко наблюдается у нее темный лес чернеется вершит дела. 
	        				Очень любила природу и упал на уши лапшу. поводу. 
	        				Сбивая с четырьмя ногами по моде женщина, а за ней аккуратно. 
	        				Старуха изергиль была белая мошонка составляет квадратных. 
	        				Белокурые локоны выбивались из головы, туловища и задушило дездемону. 
	        				Двойной подошвой слышала от боли борис не слышала от него винтовка. 
	        				Обломов разложил ольгу на один метр длинными зимними.`}
	        		</p>
        		</div>
        		<footer className="post__footer-line">
        			<div className="post__read-wrap">
        				<a className="post__read-link" href="#">
        					Читать далее
        				</a>
        			</div>
        			<div className="post__comments-wrap">
        				<a className="post__comment-link" href="#">
        					2 комментария
        				</a>
        			</div>
        		</footer>
        	</li>
        );
    }

}

export default Post;
