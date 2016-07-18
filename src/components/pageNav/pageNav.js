// deps
import React from 'react';

class PageNav extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
        	<div className="postIndex__nav-line">
                <div className="postIndex__nav-wrap">
                    { this.props.data.currPage > 1 ? 
                        this.props.data.currPage === 2 ?
                            <PostPageLink href="/">Следующие</PostPageLink> :
                            <PostPageLink href={ `/posts/page/${this.props.data.currPage - 1}` }>Следующие</PostPageLink> :
                        null
                    }
                </div>
                <div className="postIndex__nav-wrap">
                    { this.props.data.nextPageExist ? 
                        <PostPageLink href={ `/posts/page/${this.props.data.currPage + 1}` }>Предыдущие</PostPageLink> : 
                        null 
                    }
                </div>
            </div>
        );
    }
    
}

export default PageNav;
