import React from 'react';
import generateLink from '../../helper/generateLink';
import convertSizeImageUrl from '../../helper/convertSizeImageUrl';

function PostCardClassic (props) {
    return (
        <div className="single-bottom">
            <a href={generateLink( props.post.title, props.post._id )}>
                <div className="trend-bottom-img mb-30">
                    <img className="img-fluid w-100" src={convertSizeImageUrl.toFull(props.post.thumb_art)} alt={props.post.title} />
                </div>
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

export default PostCardClassic;