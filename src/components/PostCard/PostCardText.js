import React from 'react';
import generateLink from '../../helper/generateLink';

function PostCardText (props) {
    return (
        <div className="single-bottom">
            <a href={generateLink( props.post.title, props.post._id )}>
                <div className="trend-bottom-cap">
                    {/* {
                        Categories
                            .filter(e => e.categoryName === props.post.categoryName)
                            .map((e,index) => <span className="category" key={index}>{e.name}</span>)
                    } */}
                    <h4>{props.post.title}</h4>
                    <div className="post-date">
                        <time>{props.post.time}</time>
                    </div>
                    <p>{props.post.description}</p>
                </div>
            </a>
        </div>
    )
}

export default PostCardText;