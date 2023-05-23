import React, { Fragment } from 'react';
import generateLink from '../../helper/generateLink';
import convertSizeImageUrl from '../../helper/convertSizeImageUrl';
import Categories from '../Categories/CategoriesList';

class CategoryBox extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        }
    }

    findCat() {
        let cat = this.state.items.find(e => e.type === this.state.items.type);
        this.setState({catName: cat.name});
    }

    componentDidMount() {
        fetch("https://magnews24h-api.netlify.app/.netlify/functions/api/articles/post")
        .then(res => res.json())
        .then( 
            result => {
                this.setState({
                    isLoaded: true,
                    items: result.data
                });
            },
            error => {
                this.setState({
                    isLoaded: true,
                    error
                })
            }
        )
    }

    render() {
        
        let data = this.state.items;
        data = data.filter(item => item.type !== "Khoahoc");
        return (
            <>
                { data.length ? data.map((cate,i) => {
                    let catName = Categories.find(e => e.categoryName === cate.type).name;
                    let catLink = Categories.find(e => cate.type === e.categoryName).type;
                    return (
                        <Fragment key={i}>
                            <div className="container">
                                <a href={catLink} style={{ marginLeft:(-15)+'px', marginRight:(-15)+'px' }}><span className="category">{ catName }</span></a>
                                <div className="row">
                                    <div className="col-12 col-md-8 pl-0">
                                        <div className="card mb-3 pb-3 border-0 rounded-0">
                                            <a href={generateLink( cate.data[0].title, cate.data[0]._id )}>
                                                <div className="row no-gutters">
                                                <div className="col-md-4 border-right-0">
                                                    <img className="card-img" src={convertSizeImageUrl.toLarge(cate.data[0].thumb_art)} alt={cate.data[0].title} />
                                                </div>
                                                <div className="col-md-8 pl-3">
                                                    <h6 className="card-title">{cate.data[0].title}</h6>
                                                    <div className="post-date">
                                                        <time>{cate.data[0].time}</time>
                                                    </div>
                                                    <p className="card-text" style={{ marginTop:(-5)+'px', lineHeight:1.2 }}><small>{cate.data[0].description}</small></p>
                                                </div>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-4 pl-3 pr-0">
                                        <div className="card mb-3 pb-3 border-0 rounded-0">
                                            <a href={generateLink( cate.data[1].title, cate.data[1]._id )}>
                                                <div className="row no-gutters">
                                                    <h6 className="card-title">{cate.data[1].title}</h6>
                                                    <div className="post-date">
                                                        <time>{cate.data[1].time}</time>
                                                    </div>
                                                    <p className="card-text" style={{ marginTop:(-5)+'px', lineHeight:1.2 }}><small>{cate.data[1].description}</small></p>
                                                </div>
                                            </a>
                                        </div>
                                    </div>
                                </div>
                                <hr style={{ marginLeft:(-15)+'px', marginRight:(-15)+'px' }}/>
                                <div className="row">
                                    <div className="card border-0 rounded-0">
                                        <a href={generateLink( cate.data[2].title, cate.data[2]._id )}>
                                            <div className="row flex-column no-gutters">
                                                <h6 className="card-title">{cate.data[2].title}</h6>
                                                <div className="post-date">
                                                    <time>{cate.data[2].time}</time>
                                                </div>
                                                <p className="card-text" style={{ marginTop:(-5)+'px' }}><small>{cate.data[2].description}</small></p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <hr />
                        </Fragment>
                    )}) : <div className="container"><div className="row"><div className="col"><p className="theme-color">Loading . . .</p></div></div></div>
                }
            </>
        )
    }
}

export default CategoryBox;