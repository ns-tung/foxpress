import React from 'react';
import { NavLink } from 'react-router-dom';

import Categories from '../Categories/CategoriesList';

class HeaderContainer extends React.Component {

    // constructor(props) {
    //     super(props);
    //     this.state = {
    //         error: null,
    //         isLoaded: false,
    //         categories: CategoriesList
    //     }
    // }

    render() {
        return (
            <header className="header-area">
                {/* Header Start */}
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
                    <div className="header-bottom border-bottom header-sticky">
                        <div className="container">
                            <div className="row align-items-center">
                                <div className="col-12 header-flex">
                                    {/* sticky */}
                                    <div className="sticky-logo w-100 info-open">
                                        <a href="/"><img className="img-fluid w-25" src="img/logo/logo.png" alt="" /></a>
                                    </div>
                                    {/* Main-menu */}
                                    <div className="main-menu d-none d-md-block">
                                        <nav>
                                            <ul id="navigation" className="d-flex align-items-center">
                                                <li>
                                                    <NavLink activeClassName="active" className="m-0" to="/">
                                                        <i className="far fa-home-lg-alt" />
                                                        <i className="fox-press" />
                                                        <span className="ml-2 d-md-none">Trang Chủ</span>
                                                    </NavLink>
                                                </li>
                                                { Categories.map((e, index) => (<li key={index}><NavLink activeClassName="active" to={e.type}>{e.name}</NavLink></li>)) }
                                            </ul>
                                        </nav>
                                    </div>
                                </div>
                                {/* <div className="col-md-3 d-none d-md-block">
                                    <div className="header-right-btn">
                                        <div className="search-box">
                                            <form action="#">
                                                <input className="w-100" type="text" placeholder="Search" />
                                                <i className="far fa-search special-tag" />
                                            </form>
                                        </div>
                                    </div>
                                </div> */}
                                {/* Mobile Menu */}
                                <div className="col d-block">
                                    <div className="mobile_menu d-block d-md-none" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Header End */}
            </header>
        )
    }
}

export default HeaderContainer;