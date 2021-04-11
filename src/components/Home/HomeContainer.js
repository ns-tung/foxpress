import React from 'react';
import { Helmet } from 'react-helmet';
import generateLink from '../../helper/generateLink';
import CategoryBox from '../PostCard/CategoryBox';
import PostCardImage from '../PostCard/PostCardImage';
import PostCardText from '../PostCard/PostCardText';
import PostCardHorizontal from '../PostCard/PostCartHorizontal';
class HomeContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
          error: null,
          isLoaded: false,
          items: []
        };
    }

    componentDidMount() {
        fetch("https://pacific-brook-34627.herokuapp.com/api/articles/Trangnhat?limit=41")
        .then(res => res.json())
        .then(
            result => {
                this.setState({
                    isLoaded: true,
                    items: result.data.articles
                });
            },
            error => {
                this.setState({
                    isLoaded: true,
                    error
                })
            }
        )
        window.scroll({top: 0, behavior: "smooth"});
    }

    render() {
        let listPost = this.state.items;
        return (
            <>
                <Helmet defer={false}>
                    <meta name="description" content="Trang Chủ – FoxPress News" />
                    <title>Trang Chủ – FoxPress News</title>
                </Helmet>
                <main className="my-5 fp-home">
                    {/* Trending Area Start */}
                    <div className="trending-area fix">
                        <div className="trending-main">
                            <div className="container">
                                <div className="row">
                                    <div className="col">
                                        {
                                            listPost.length
                                                ? listPost.splice(0,1).map(e => <a key={e._id} href={generateLink(e.title, e._id)}><PostCardHorizontal post={e} /></a>)
                                                : <div className="row"><div className="col"><p className="theme-color">Loading . . .</p></div></div>
                                        }
                                        <div className="trending-bottom">
                                            <div className="row post-card-text">
                                                {
                                                    listPost.slice(1,4).map(
                                                        e => <div key={e._id} className="col-12 col-sm-6 col-md-4 mb-4"><PostCardText post={e} /></div>
                                                    )
                                                }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <hr className="mt-0 mb-4" />
                            </div>
                        </div>
                    </div>
                    {/* Trending Area End */}
                    {/*   Weekly-News start */}
                    <div className="weekly-news-area">
                        <div className="container">
                            <div className="weekly-wrapper">
                                <div className="trending-area">
                                    <div className="trending-main">
                                        <div className="trending-bottom">
                                            <div className="row post-card-text">
                                                <div className="col-12 col-md-4">
                                                    {
                                                        listPost.slice(4,41).map( e => <PostCardImage key={e._id} post={e} /> )
                                                    }
                                                </div>
                                                <div className="col-12 col-md-8">
                                                    <CategoryBox />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </>
        );
    }
}

export default HomeContainer;
