import React from 'react';
import generateLink from '../../helper/generateLink';
import convertSizeImageUrl from '../../helper/convertSizeImageUrl';

function PostCardHorizontal(props) {
    
    return (
        // <a href={generateLink( props.post.title, props.post._id )}>
            <div className="trand-right-single d-flex">
                    <div className="container">
                        <div className="row">
                                <div className="col-12 px-0 col-md-6 pl-md-0">
                                    <div className="trand-right-img">
                                        <img className="img-fluid w-100" src={convertSizeImageUrl.toFull(props.post.thumb_art)} alt={props.post.title} />
                                    </div>
                                </div>
                                <div className="col-12 col-md-6 px-md-4">
                                    <div className="trand-right-cap py-3 py-md-4">
                                        <h4>{props.post.title}</h4>
                                        <time>{props.post.time}</time>
                                        <p>{props.post.description}</p>
                                    </div>
                                </div>
                        </div>
                    </div>
            </div>
        // </a>
    )
}

export default PostCardHorizontal;