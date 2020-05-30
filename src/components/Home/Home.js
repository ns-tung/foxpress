import React from 'react';
import testData from './testData';
function Home() {
    return (
        <div className="Home">
            {/* Preloader Start */}
            <div id="preloader-active">
                <div className="preloader d-flex align-items-center justify-content-center">
                    <div className="preloader-inner position-relative">
                        <div className="preloader-circle" />
                        <div className="preloader-img pere-text">
                            <img className="img-fluid" src="img/logo/logo.png" alt="" />
                        </div>
                    </div>
                </div>
            </div>
            {/* Preloader Start */}
            <header>
                {/* Header Start */}
                <div className="header-area">
                    <div className="main-header">
                        <div className="header-top black-bg d-none d-md-block">
                            <div className="container">
                                <div className="col-xl-12">
                                    <div className="row justify-content-between align-items-center">
                                        <div className="header-info-left">
                                            <ul>
                                                <li><i className="fad fa-sun mr-2" />34ºC, Sunny </li>
                                                <li><i className="fad fa-calendar-alt mr-2" />Mon, 25th May, 2020</li>
                                            </ul>
                                        </div>
                                        <div className="header-info-right">
                                            <ul className="header-social">
                                                <li><a href="/"><i className="fab fa-twitter" /></a></li>
                                                <li><a href="/"><i className="fab fa-instagram" /></a></li>
                                                <li> <a href="/"><i className="fab fa-pinterest-p" /></a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="header-mid border-bottom d-none d-md-block">
                            <div className="container">
                                <div className="row align-items-center">
                                    {/* Logo */}
                                    <div className="col-xl-3 col-lg-3 col-md-3">
                                        <div className="logo">
                                            <a href="/"><img className="img-fluid" src="img/logo/logo.png" alt="" /></a>
                                        </div>
                                    </div>
                                    <div className="col-xl-9 col-lg-9 col-md-9">
                                        <div className="header-banner f-right ">
                                            <img className="img-fluid" src="img/hero/header_card.jpg" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="header-bottom header-sticky">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-xl-10 col-lg-10 col-md-12 header-flex align-items-center">
                                        {/* sticky */}
                                        <div className="sticky-logo info-open">
                                            <a href="/"><img className="img-fluid" src="img/logo/logo.png" alt="" /></a>
                                        </div>
                                        {/* Main-menu */}
                                        <div className="main-menu d-none d-md-block">
                                            <nav>
                                                <ul id="navigation" className="d-flex align-items-center">
                                                    <li>
                                                        <a className="m-0" href="/">
                                                            <i className="far fa-home-lg-alt" />
                                                            <span className="ml-2 d-md-none">Trang Chủ</span>
                                                        </a>
                                                    </li>
                                                    <li><a href="categori.html">Category</a></li>
                                                    <li><a href="about.html">About</a></li>
                                                    <li><a href="latest_news.html">Latest News</a></li>
                                                    <li><a href="contact.html">Contact</a></li>
                                                    <li><a href="/">Pages</a>
                                                        <ul className="submenu">
                                                            <li><a href="elements.html">Element</a></li>
                                                            <li><a href="blog.html">Blog</a></li>
                                                            <li><a href="single-blog.html">Blog Details</a></li>
                                                            <li><a href="details.html">Categori Details</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </nav>
                                        </div>
                                    </div>
                                    <div className="col-xl-2 col-lg-2 col-md-4">
                                        <div className="header-right-btn f-right d-none d-lg-block">
                                            <i className="fas fa-search special-tag" />
                                            <div className="search-box">
                                                <form action="#">
                                                    <input type="text" placeholder="Search" />
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Mobile Menu */}
                                    <div className="col-12">
                                        <div className="mobile_menu d-block d-md-none" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Header End */}
            </header>
            <main>
                {/* Trending Area Start */}
                <div className="trending-area fix">
                    <div className="container">
                        <div className="trending-main">
                            <div className="row mt-5">
                                <div className="col-lg-8">
                                    {/* Trending Top */}
                                    <div className="trending-top mb-30">
                                        <div className="trend-top-img">
                                            <img src="img/trending/trending_top.jpg" alt="" />
                                            <div className="trend-top-cap">
                                                <span>Appetizers</span>
                                                <h2><a href="details.html">Welcome To The Best Model Winner<br /> Contest At Look of the year</a></h2>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Trending Bottom */}
                                    <div className="trending-bottom">
                                        <div className="row">
                                            <div className="col-lg-4">
                                                <div className="single-bottom mb-35">
                                                    <div className="trend-bottom-img mb-30">
                                                        <img src="img/trending/trending_bottom1.jpg" alt="" />
                                                    </div>
                                                    <div className="trend-bottom-cap">
                                                        <span className="color1">Lifestyple</span>
                                                        <h4><a href="details.html">Get the Illusion of Fuller Lashes by “Mascng.”</a></h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="single-bottom mb-35">
                                                    <div className="trend-bottom-img mb-30">
                                                        <img src="img/trending/trending_bottom2.jpg" alt="" />
                                                    </div>
                                                    <div className="trend-bottom-cap">
                                                        <span className="color2">Sports</span>
                                                        <h4 /><h4><a href="details.html">Get the Illusion of Fuller Lashes by “Mascng.”</a></h4>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-lg-4">
                                                <div className="single-bottom mb-35">
                                                    <div className="trend-bottom-img mb-30">
                                                        <img src="img/trending/trending_bottom3.jpg" alt="" />
                                                    </div>
                                                    <div className="trend-bottom-cap">
                                                        <span className="color3">Travels</span>
                                                        <h4><a href="details.html"> Welcome To The Best Model Winner Contest</a></h4>
                                                    </div>
                                                </div>
                                            </div>
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
                                            testData.map(x => <div className="weekly-single col-md-4 mx-0" key={x._id}>
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
                {/*   Weekly2-News start */}
                <div className="weekly2-news-area  weekly2-pading gray-bg">
                    <div className="container">
                        <div className="weekly2-wrapper">
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
                                    <div className="weekly2-news-active dot-style d-flex dot-style">
                                        <div className="weekly2-single">
                                            <div className="weekly2-img">
                                                <img src="img/news/weekly2News1.jpg" alt="" />
                                            </div>
                                            <div className="weekly2-caption">
                                                <span className="color1">Corporate</span>
                                                <p>25 Jan 2020</p>
                                                <h4><a href="/">Welcome To The Best Model  Winner Contest</a></h4>
                                            </div>
                                        </div>
                                        <div className="weekly2-single">
                                            <div className="weekly2-img">
                                                <img src="img/news/weekly2News2.jpg" alt="" />
                                            </div>
                                            <div className="weekly2-caption">
                                                <span className="color1">Event night</span>
                                                <p>25 Jan 2020</p>
                                                <h4><a href="/">Welcome To The Best Model  Winner Contest</a></h4>
                                            </div>
                                        </div>
                                        <div className="weekly2-single">
                                            <div className="weekly2-img">
                                                <img src="img/news/weekly2News3.jpg" alt="" />
                                            </div>
                                            <div className="weekly2-caption">
                                                <span className="color1">Corporate</span>
                                                <p>25 Jan 2020</p>
                                                <h4><a href="/">Welcome To The Best Model  Winner Contest</a></h4>
                                            </div>
                                        </div>
                                        <div className="weekly2-single">
                                            <div className="weekly2-img">
                                                <img src="img/news/weekly2News4.jpg" alt="" />
                                            </div>
                                            <div className="weekly2-caption">
                                                <span className="color1">Event time</span>
                                                <p>25 Jan 2020</p>
                                                <h4><a href="/">Welcome To The Best Model  Winner Contest</a></h4>
                                            </div>
                                        </div>
                                        <div className="weekly2-single">
                                            <div className="weekly2-img">
                                                <img src="img/news/weekly2News4.jpg" alt="" />
                                            </div>
                                            <div className="weekly2-caption">
                                                <span className="color1">Corporate</span>
                                                <p>25 Jan 2020</p>
                                                <h4><a href="/">Welcome To The Best Model  Winner Contest</a></h4>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Weekly-News */}
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
                <div className="pagination-area pb-45 text-center">
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
            <footer>
                {/* Footer Start*/}
                <div className="footer-area footer-padding fix">
                    <div className="container">
                        <div className="row justify-content-between">
                            <div className="col-xl-5 col-lg-5 col-md-7 col-sm-12">
                                <div className="single-footer-caption">
                                    <div className="single-footer-caption">
                                        {/* logo */}
                                        <div className="footer-logo">
                                            <a href="/"><img src="img/logo/logo-footer.png" alt="" /></a>
                                        </div>
                                        <div className="footer-tittle">
                                            <div className="footer-pera">
                                                <p>Suscipit mauris pede for con sectetuer sodales adipisci for cursus fames lectus tempor da blandit gravida sodales  Suscipit mauris pede for con sectetuer sodales adipisci for cursus fames lectus tempor da blandit gravida sodales  Suscipit mauris pede for sectetuer.</p>
                                            </div>
                                        </div>
                                        {/* social */}
                                        <div className="footer-social">
                                            <a href="/"><i className="fab fa-twitter" /></a>
                                            <a href="/"><i className="fab fa-instagram" /></a>
                                            <a href="/"><i className="fab fa-pinterest-p" /></a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-4  col-sm-6">
                                <div className="single-footer-caption mt-60">
                                    <div className="footer-tittle">
                                        <h4>Newsletter</h4>
                                        <p>Heaven fruitful doesn't over les idays appear creeping</p>
                                        {/* Form */}
                                        <div className="footer-form">
                                            <div id="mc_embed_signup">
                                                <form target="_blank" action="https://spondonit.us12.list-manage.com/subscribe/post?u=1462626880ade1ac87bd9c93a&id=92a4423d01" method="get" className="subscribe_form relative mail_part">
                                                    <input type="email" name="email" id="newsletter-form-email" placeholder="Email Address" className="placeholder hide-on-focus" onFocus="this.placeholder = ''" onBlur="this.placeholder = ' Email Address '" />
                                                    <div className="form-icon">
                                                        <button type="submit" name="submit" id="newsletter-submit" className="email_icon newsletter-submit button-contactForm"><img src="img/logo/form-iocn.png" alt="" /></button>
                                                    </div>
                                                    <div className="mt-10 info" />
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-3 col-md-5 col-sm-6">
                                <div className="single-footer-caption mb-50 mt-60">
                                    <div className="footer-tittle">
                                        <h4>Instagram Feed</h4>
                                    </div>
                                    <div className="instagram-gellay">
                                        <ul className="insta-feed">
                                            <li><a href="/"><img src="img/post/instra1.jpg" alt="" /></a></li>
                                            <li><a href="/"><img src="img/post/instra2.jpg" alt="" /></a></li>
                                            <li><a href="/"><img src="img/post/instra3.jpg" alt="" /></a></li>
                                            <li><a href="/"><img src="img/post/instra4.jpg" alt="" /></a></li>
                                            <li><a href="/"><img src="img/post/instra5.jpg" alt="" /></a></li>
                                            <li><a href="/"><img src="img/post/instra6.jpg" alt="" /></a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* footer-bottom aera */}
                <div className="footer-bottom-area">
                    <div className="container">
                        <div className="footer-border">
                            <div className="row align-items-center justify-content-between">
                                <div className="col-lg-6">
                                    <div className="footer-copy-right">
                                        <p>
                                            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}

                                            Copyright © All rights reserved | This template is made with <i className="fal fa-heart" /> by <a href="https://colorlib.com" target="_blank">Colorlib</a>

                                            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
                                        </p>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="footer-menu f-right">
                                        <ul>
                                            <li><a href="/">Terms of use</a></li>
                                            <li><a href="/">Privacy Policy</a></li>
                                            <li><a href="/">Contact</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Footer End*/}
            </footer>
        </div>
    );
}

export default Home;
