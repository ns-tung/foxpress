import React from 'react';
import Categories from '../Categories/CategoriesList';

function PostCardClassic (props) {

    function to_slug(str){
        // Chuyển hết sang chữ thường
        str = str.toLowerCase();     
    
        // xóa dấu
        str = str.replace(/(à|á|ạ|ả|ã|â|ầ|ấ|ậ|ẩ|ẫ|ă|ằ|ắ|ặ|ẳ|ẵ)/g, 'a');
        str = str.replace(/(è|é|ẹ|ẻ|ẽ|ê|ề|ế|ệ|ể|ễ)/g, 'e');
        str = str.replace(/(ì|í|ị|ỉ|ĩ)/g, 'i');
        str = str.replace(/(ò|ó|ọ|ỏ|õ|ô|ồ|ố|ộ|ổ|ỗ|ơ|ờ|ớ|ợ|ở|ỡ)/g, 'o');
        str = str.replace(/(ù|ú|ụ|ủ|ũ|ư|ừ|ứ|ự|ử|ữ)/g, 'u');
        str = str.replace(/(ỳ|ý|ỵ|ỷ|ỹ)/g, 'y');
        str = str.replace(/(đ)/g, 'd');
    
        // Xóa ký tự đặc biệt
        str = str.replace(/([^0-9a-z-\s])/g, '');
    
        // Xóa khoảng trắng thay bằng ký tự -
        str = str.replace(/(\s+)/g, '-');
    
        // Xóa phần dư - ở đầu
        str = str.replace(/^-+/g, '');

        // Thay thế --- ở giữa
        str = str.replace(/(---)/g, '-');
    
        // Xóa phần dư - ở cuối
        str = str.replace(/-+$/g, '');
    
        // return
        return str;
    }

    return (
        <div className="single-bottom">
            <a href={to_slug(props.post.title)+"-"+props.post._id+".html"}>
                <div className="trend-bottom-img mb-30">
                    <img className="img-fluid w-100" src={props.post.thumb_art} alt={props.post.title} />
                </div>
                <div className="trend-bottom-cap">
                    {
                        Categories
                            .filter(e => e.categoryName === props.post.categoryName)
                            .map((e,index) => <span className="category" key={index}>{e.name}</span>)
                    }
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