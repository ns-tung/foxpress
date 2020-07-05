import React from 'react';
import testData from './testData';
import PostCardClassic from '../PostCard/PostCardClassic';
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
        fetch("http://45.76.179.13:4041/api/articles/Trangnhat?limit=4")
            .then(res => res.json())
            .then(
                (result) => {
                    let listPost = [];
                    listPost = result.data.articles.splice(1,4);
                    this.setState({
                        isLoaded: true,
                        items: listPost
                    });
            },
            // Note: it's important to handle errors here
            // instead of a catch() block so that we don't swallow
            // exceptions from actual bugs in components.
            (error) => {
              this.setState({
                isLoaded: true,
                error
              });
            }
        )
    }

    render() {
        return (
            <main className="my-5">
                {/* Trending Area Start */}
                <div className="trending-area fix">
                    <div className="container">
                        <div className="trending-main">
                            <div className="row">
                                <div className="col-lg-8">
                                    {/* Trending Top */}
                                    <div className="trending-top mb-30">
                                        <div className="trend-top-img">
                                            <img className="img-fluid" src="img/trending/trending_top.jpg" alt="" />
                                            <div className="trend-top-cap">
                                                <span>Appetizers</span>
                                                <h2><a href="details.html">Welcome To The Best Model Winner<br /> Contest At Look of the year</a></h2>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Trending Bottom */}
                                    <div className="trending-bottom">
                                        <div className="row">
                                            {
                                                console.log(this.state.items&&this.state.items.length),
                                                this.state.items && this.state.items.length ? this.state.items.map( e => <PostCardClassic key={e._id} post={e} />) : <div className="col"><p className="theme-color">No data posts</p></div>
                                            }
                                        </div>
                                    </div>
                                </div>
                                {/* Riht content */}
                                <div className="col-lg-4">
                                    <div className="trand-right-single d-flex">
                                        <div className="trand-right-img">
                                            <img src="img/trending/right1.jpg" alt="" />
                                        </div>
                                        <div className="trand-right-cap">
                                            <span className="color1">Concert</span>
                                            <h4><a href="details.html">Welcome To The Best Model Winner Contest</a></h4>
                                        </div>
                                    </div>
                                    <div className="trand-right-single d-flex">
                                        <div className="trand-right-img">
                                            <img src="img/trending/right2.jpg" alt="" />
                                        </div>
                                        <div className="trand-right-cap">
                                            <span className="color3">sea beach</span>
                                            <h4><a href="details.html">Welcome To The Best Model Winner Contest</a></h4>
                                        </div>
                                    </div>
                                    <div className="trand-right-single d-flex">
                                        <div className="trand-right-img">
                                            <img src="img/trending/right3.jpg" alt="" />
                                        </div>
                                        <div className="trand-right-cap">
                                            <span className="color2">Bike Show</span>
                                            <h4><a href="details.html">Welcome To The Best Model Winner Contest</a></h4>
                                        </div>
                                    </div>
                                    <div className="trand-right-single d-flex">
                                        <div className="trand-right-img">
                                            <img src="img/trending/right4.jpg" alt="" />
                                        </div>
                                        <div className="trand-right-cap">
                                            <span className="color4">See beach</span>
                                            <h4><a href="details.html">Welcome To The Best Model Winner Contest</a></h4>
                                        </div>
                                    </div>
                                    <div className="trand-right-single d-flex">
                                        <div className="trand-right-img">
                                            <img src="img/trending/right5.jpg" alt="" />
                                        </div>
                                        <div className="trand-right-cap">
                                            <span className="color1">Skeping</span>
                                            <h4><a href="details.html">Welcome To The Best Model Winner Contest</a></h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Trending Area End */}
                {/*   Weekly-News start */}
                <div className="weekly-news-area pt-50">
                    <div className="container">
                        <div className="weekly-wrapper">
                            {/* section Tittle */}
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-tittle mb-30">
                                        <h3>Weekly Top News</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="row weekly-news-active dot-style d-flex dot-style">
                                        {
                                            testData.map(x => <div className="weekly-single col-md-4 mx-0 mb-5" key={x._id}>
                                                <div className="weekly-img">
                                                    <img src={x.thumb_art} alt="" />
                                                </div>
                                                <div className="weekly-caption">
                                                    <span className="color1">Strike</span>
                                                    <h4><a href="/">{x.title}</a></h4>
                                                </div>
                                            </div>)
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Weekly-News */}
                {/* Whats New Start */}
                <section className="whats-news-area pt-50 pb-20">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="row justify-content-between">
                                    <div className="col-lg-3 col-md-3">
                                        <div className="section-tittle mb-30">
                                            <h3>Whats New</h3>
                                        </div>
                                    </div>
                                    <div className="col-lg-9 col-md-9">
                                        <div className="properties__button">
                                            {/*Nav Button  */}
                                            <nav>
                                                <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                                    <a className="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">All</a>
                                                    <a className="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Lifestyle</a>
                                                    <a className="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Travel</a>
                                                    <a className="nav-item nav-link" id="nav-last-tab" data-toggle="tab" href="#nav-last" role="tab" aria-controls="nav-contact" aria-selected="false">Fashion</a>
                                                    <a className="nav-item nav-link" id="nav-Sports" data-toggle="tab" href="#nav-nav-Sport" role="tab" aria-controls="nav-contact" aria-selected="false">Sports</a>
                                                    <a className="nav-item nav-link" id="nav-technology" data-toggle="tab" href="#nav-techno" role="tab" aria-controls="nav-contact" aria-selected="false">Technology</a>
                                                </div>
                                            </nav>
                                            {/*End Nav Button  */}
                                        </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12">
                                        {/* Nav Card */}
                                        <div className="tab-content" id="nav-tabContent">
                                            {/* card one */}
                                            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
                                                <div className="whats-news-caption">
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="single-what-news mb-100">
                                                                <div className="what-img">
                                                                    <img src="img/news/whatNews1.jpg" alt="" />
                                                                </div>
                                                                <div className="what-cap">
                                                                    <span className="color1">Night party</span>
                                                                    <h4><a href="/">Welcome To The Best Model  Winner Contest</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="single-what-news mb-100">
                                                                <div className="what-img">
                                                                    <img src="img/news/whatNews2.jpg" alt="" />
                                                                </div>
                                                                <div className="what-cap">
                                                                    <span className="color1">Night party</span>
                                                                    <h4><a href="/">Welcome To The Best Model  Winner Contest</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="single-what-news mb-100">
                                                                <div className="what-img">
                                                                    <img src="img/news/whatNews3.jpg" alt="" />
                                                                </div>
                                                                <div className="what-cap">
                                                                    <span className="color1">Night party</span>
                                                                    <h4><a href="/">Welcome To The Best Model  Winner Contest</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="single-what-news mb-100">
                                                                <div className="what-img">
                                                                    <img src="img/news/whatNews4.jpg" alt="" />
                                                                </div>
                                                                <div className="what-cap">
                                                                    <span className="color1">Night party</span>
                                                                    <h4><a href="/">Welcome To The Best Model  Winner Contest</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Card two */}
                                            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
                                                <div className="whats-news-caption">
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="single-what-news mb-100">
                                                                <div className="what-img">
                                                                    <img src="img/news/whatNews1.jpg" alt="" />
                                                                </div>
                                                                <div className="what-cap">
                                                                    <span className="color1">Night party</span>
                                                                    <h4><a href="/">Welcome To The Best Model  Winner Contest</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="single-what-news mb-100">
                                                                <div className="what-img">
                                                                    <img src="img/news/whatNews2.jpg" alt="" />
                                                                </div>
                                                                <div className="what-cap">
                                                                    <span className="color1">Night party</span>
                                                                    <h4><a href="/">Welcome To The Best Model  Winner Contest</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="single-what-news mb-100">
                                                                <div className="what-img">
                                                                    <img src="img/news/whatNews3.jpg" alt="" />
                                                                </div>
                                                                <div className="what-cap">
                                                                    <span className="color1">Night party</span>
                                                                    <h4><a href="/">Welcome To The Best Model  Winner Contest</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="single-what-news mb-100">
                                                                <div className="what-img">
                                                                    <img src="img/news/whatNews4.jpg" alt="" />
                                                                </div>
                                                                <div className="what-cap">
                                                                    <span className="color1">Night party</span>
                                                                    <h4><a href="/">Welcome To The Best Model  Winner Contest</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* Card three */}
                                            <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
                                                <div className="whats-news-caption">
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="single-what-news mb-100">
                                                                <div className="what-img">
                                                                    <img src="img/news/whatNews1.jpg" alt="" />
                                                                </div>
                                                                <div className="what-cap">
                                                                    <span className="color1">Night party</span>
                                                                    <h4><a href="/">Welcome To The Best Model  Winner Contest</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="single-what-news mb-100">
                                                                <div className="what-img">
                                                                    <img src="img/news/whatNews2.jpg" alt="" />
                                                                </div>
                                                                <div className="what-cap">
                                                                    <span className="color1">Night party</span>
                                                                    <h4><a href="/">Welcome To The Best Model  Winner Contest</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="single-what-news mb-100">
                                                                <div className="what-img">
                                                                    <img src="img/news/whatNews3.jpg" alt="" />
                                                                </div>
                                                                <div className="what-cap">
                                                                    <span className="color1">Night party</span>
                                                                    <h4><a href="/">Welcome To The Best Model  Winner Contest</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="single-what-news mb-100">
                                                                <div className="what-img">
                                                                    <img src="img/news/whatNews4.jpg" alt="" />
                                                                </div>
                                                                <div className="what-cap">
                                                                    <span className="color1">Night party</span>
                                                                    <h4><a href="/">Welcome To The Best Model  Winner Contest</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* card fure */}
                                            <div className="tab-pane fade" id="nav-last" role="tabpanel" aria-labelledby="nav-last-tab">
                                                <div className="whats-news-caption">
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="single-what-news mb-100">
                                                                <div className="what-img">
                                                                    <img src="img/news/whatNews1.jpg" alt="" />
                                                                </div>
                                                                <div className="what-cap">
                                                                    <span className="color1">Night party</span>
                                                                    <h4><a href="/">Welcome To The Best Model  Winner Contest</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="single-what-news mb-100">
                                                                <div className="what-img">
                                                                    <img src="img/news/whatNews2.jpg" alt="" />
                                                                </div>
                                                                <div className="what-cap">
                                                                    <span className="color1">Night party</span>
                                                                    <h4><a href="/">Welcome To The Best Model  Winner Contest</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="single-what-news mb-100">
                                                                <div className="what-img">
                                                                    <img src="img/news/whatNews3.jpg" alt="" />
                                                                </div>
                                                                <div className="what-cap">
                                                                    <span className="color1">Night party</span>
                                                                    <h4><a href="/">Welcome To The Best Model  Winner Contest</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="single-what-news mb-100">
                                                                <div className="what-img">
                                                                    <img src="img/news/whatNews4.jpg" alt="" />
                                                                </div>
                                                                <div className="what-cap">
                                                                    <span className="color1">Night party</span>
                                                                    <h4><a href="/">Welcome To The Best Model  Winner Contest</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* card Five */}
                                            <div className="tab-pane fade" id="nav-nav-Sport" role="tabpanel" aria-labelledby="nav-Sports">
                                                <div className="whats-news-caption">
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="single-what-news mb-100">
                                                                <div className="what-img">
                                                                    <img src="img/news/whatNews1.jpg" alt="" />
                                                                </div>
                                                                <div className="what-cap">
                                                                    <span className="color1">Night party</span>
                                                                    <h4><a href="/">Welcome To The Best Model  Winner Contest</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="single-what-news mb-100">
                                                                <div className="what-img">
                                                                    <img src="img/news/whatNews2.jpg" alt="" />
                                                                </div>
                                                                <div className="what-cap">
                                                                    <span className="color1">Night party</span>
                                                                    <h4><a href="/">Welcome To The Best Model  Winner Contest</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="single-what-news mb-100">
                                                                <div className="what-img">
                                                                    <img src="img/news/whatNews3.jpg" alt="" />
                                                                </div>
                                                                <div className="what-cap">
                                                                    <span className="color1">Night party</span>
                                                                    <h4><a href="/">Welcome To The Best Model  Winner Contest</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="single-what-news mb-100">
                                                                <div className="what-img">
                                                                    <img src="img/news/whatNews4.jpg" alt="" />
                                                                </div>
                                                                <div className="what-cap">
                                                                    <span className="color1">Night party</span>
                                                                    <h4><a href="/">Welcome To The Best Model  Winner Contest</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* card Six */}
                                            <div className="tab-pane fade" id="nav-techno" role="tabpanel" aria-labelledby="nav-technology">
                                                <div className="whats-news-caption">
                                                    <div className="row">
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="single-what-news mb-100">
                                                                <div className="what-img">
                                                                    <img src="img/news/whatNews1.jpg" alt="" />
                                                                </div>
                                                                <div className="what-cap">
                                                                    <span className="color1">Night party</span>
                                                                    <h4><a href="/">Welcome To The Best Model  Winner Contest</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="single-what-news mb-100">
                                                                <div className="what-img">
                                                                    <img src="img/news/whatNews2.jpg" alt="" />
                                                                </div>
                                                                <div className="what-cap">
                                                                    <span className="color1">Night party</span>
                                                                    <h4><a href="/">Welcome To The Best Model  Winner Contest</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="single-what-news mb-100">
                                                                <div className="what-img">
                                                                    <img src="img/news/whatNews3.jpg" alt="" />
                                                                </div>
                                                                <div className="what-cap">
                                                                    <span className="color1">Night party</span>
                                                                    <h4><a href="/">Welcome To The Best Model  Winner Contest</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div className="col-lg-6 col-md-6">
                                                            <div className="single-what-news mb-100">
                                                                <div className="what-img">
                                                                    <img src="img/news/whatNews4.jpg" alt="" />
                                                                </div>
                                                                <div className="what-cap">
                                                                    <span className="color1">Night party</span>
                                                                    <h4><a href="/">Welcome To The Best Model  Winner Contest</a></h4>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        {/* End Nav Card */}
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                {/* Section Tittle */}
                                <div className="section-tittle mb-40">
                                    <h3>Follow Us</h3>
                                </div>
                                {/* Flow Socail */}
                                <div className="single-follow mb-45">
                                    <div className="single-box">
                                        <div className="follow-us d-flex align-items-center">
                                            <div className="follow-social">
                                                <a href="/"><img src="img/news/icon-fb.png" alt="" /></a>
                                            </div>
                                            <div className="follow-count">
                                                <span>8,045</span>
                                                <p>Fans</p>
                                            </div>
                                        </div>
                                        <div className="follow-us d-flex align-items-center">
                                            <div className="follow-social">
                                                <a href="/"><img src="img/news/icon-tw.png" alt="" /></a>
                                            </div>
                                            <div className="follow-count">
                                                <span>8,045</span>
                                                <p>Fans</p>
                                            </div>
                                        </div>
                                        <div className="follow-us d-flex align-items-center">
                                            <div className="follow-social">
                                                <a href="/"><img src="img/news/icon-ins.png" alt="" /></a>
                                            </div>
                                            <div className="follow-count">
                                                <span>8,045</span>
                                                <p>Fans</p>
                                            </div>
                                        </div>
                                        <div className="follow-us d-flex align-items-center">
                                            <div className="follow-social">
                                                <a href="/"><img src="img/news/icon-yo.png" alt="" /></a>
                                            </div>
                                            <div className="follow-count">
                                                <span>8,045</span>
                                                <p>Fans</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* New Poster */}
                                <div className="news-poster d-none d-lg-block">
                                    <img src="img/news/news_card.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* Whats New End */}

                {/*  Recent Articles start */}
                <div className="recent-articles">
                    <div className="container">
                        <div className="recent-wrapper">
                            {/* section Tittle */}
                            <div className="row">
                                <div className="col-lg-12">
                                    <div className="section-tittle mb-30">
                                        <h3>Recent Articles</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-12">
                                    <div className="recent-active dot-style d-flex dot-style">
                                        <div className="single-recent mb-100">
                                            <div className="what-img">
                                                <img src="img/news/recent1.jpg" alt="" />
                                            </div>
                                            <div className="what-cap">
                                                <span className="color1">Night party</span>
                                                <h4><a href="/">Welcome To The Best Model  Winner Contest</a></h4>
                                            </div>
                                        </div>
                                        <div className="single-recent mb-100">
                                            <div className="what-img">
                                                <img src="img/news/recent2.jpg" alt="" />
                                            </div>
                                            <div className="what-cap">
                                                <span className="color1">Night party</span>
                                                <h4><a href="/">Welcome To The Best Model  Winner Contest</a></h4>
                                            </div>
                                        </div>
                                        <div className="single-recent mb-100">
                                            <div className="what-img">
                                                <img src="img/news/recent3.jpg" alt="" />
                                            </div>
                                            <div className="what-cap">
                                                <span className="color1">Night party</span>
                                                <h4><a href="/">Welcome To The Best Model  Winner Contest</a></h4>
                                            </div>
                                        </div>
                                        <div className="single-recent mb-100">
                                            <div className="what-img">
                                                <img src="img/news/recent2.jpg" alt="" />
                                            </div>
                                            <div className="what-cap">
                                                <span className="color1">Night party</span>
                                                <h4><a href="/">Welcome To The Best Model  Winner Contest</a></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/*Recent Articles End */}
                {/*Start pagination */}
                <div className="pagination-area pb-5 text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-xl-12">
                                <div className="single-wrap d-flex justify-content-center">
                                    <nav aria-label="Page navigation example">
                                        <ul className="pagination justify-content-start">
                                            <li className="page-item"><a className="page-link" href="/"><span className="flaticon-arrow roted" /></a></li>
                                            <li className="page-item active"><a className="page-link" href="/">01</a></li>
                                            <li className="page-item"><a className="page-link" href="/">02</a></li>
                                            <li className="page-item"><a className="page-link" href="/">03</a></li>
                                            <li className="page-item"><a className="page-link" href="/"><span className="flaticon-arrow right-arrow" /></a></li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End pagination  */}
            </main>
        );
    }
}

export default HomeContainer;
