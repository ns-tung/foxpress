import React from 'react';
import generateLink from '../../helper/generateLink';
import convertSizeImageUrl from '../../helper/convertSizeImageUrl';

function PostCardImage (props) {
    return (
        <div className="card mb-3 pb-3 border-0 rounded-0">
            <a href={generateLink( props.post.title, props.post._id )}>
                <h6 className="card-title">{props.post.title}</h6>
                <div className="row no-gutters">
                <div className="col-md-4 border-right-0">
                    <img className="card-img" src={convertSizeImageUrl.toMedium(props.post.thumb_art)} alt={props.post.title} />
                </div>
                <div className="col-md-8">
                    <p className="card-text pl-2" style={{ marginTop:(-3)+'px', lineHeight:1.2 }}><small>{props.post.description}</small></p>
                </div>
                </div>
            </a>
        </div>
    )
}

export default PostCardImage;