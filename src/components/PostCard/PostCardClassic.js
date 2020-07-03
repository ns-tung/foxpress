import React from 'react';
function PostCardClassic (props) {
    console.log(props);
    return (
        <div className="col-lg-4">
            <div className="single-bottom mb-35">
                <div className="trend-bottom-img mb-30">
                    <img src={props.post.thumb_art} alt={props.post.title} />
                </div>
                <div className="trend-bottom-cap">
                    <span className="color1">{props.post.categoryName}</span>
                    <h4><a href="details.html">{props.post.title}</a></h4>
                    <p>{props.post.description}</p>
                </div>
            </div>
        </div>
    )
}

export default PostCardClassic;