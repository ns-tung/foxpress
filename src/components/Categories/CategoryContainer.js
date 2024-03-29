import React from 'react';
import { Helmet } from 'react-helmet';
import ReactPaginate from 'react-paginate';
import PostCardClassic from '../PostCard/PostCardClassic';
import PostCardHorizontal from '../PostCard/PostCartHorizontal';
import Categories from '../Categories/CategoriesList';
import PostCardText from '../PostCard/PostCardText';
import generateLink from '../../helper/generateLink';

class CategoryContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            catName: "",
            catType: "",
            nameCategory: "",
            apiUrl: "",
            items: [],
            pages: 0,
            offset: 0
        }
    }

    handlePageClick = data => {
        let selected = data.selected;
        let offset = Math.ceil(selected * this.props.perPage);
        this.setState({ 
            offset,
            apiUrl: "https://magnews24h-api.netlify.app/.netlify/functions/api/articles/" + this.state.catName + "?limit=10&page=" + (selected + 1)
        }, () => {
            this.addZero();
            this.loadArticles();
            window.scroll({top: 0, behavior: "smooth"});
        });
    };

    // Callback loadArticles when not use componentWillMount ---
    UNSAFE_componentWillMount() {
        Categories
            .filter(e => e.type === this.props.match.url)
            .map(e => this.setState({ 
                catName: e.categoryName,
                catType: e.type,
                nameCategory: e.name,
                apiUrl: "https://magnews24h-api.netlify.app/.netlify/functions/api/articles/" + e.categoryName + "?limit=10&page=1"
            }));
    }
        
        
    loadArticles() {
        
        let apiUrl = this.state.apiUrl;

        fetch(apiUrl).then(res => res.json()).then((result) => {
                this.setState({
                    isLoaded: true,
                    pages: result.data.pages,
                    items: result.data.articles
                })
            })
    }
    
    // Add 0 number before numbers < 10 on pagination link
    addZero() {
        let pageLink = document.getElementsByClassName("page-link");
        let i;
        for (i = 0; i < pageLink.length; i++) {
            Number(pageLink[i].innerText) < 10
            && pageLink[i].innerHTML.length < 2
            ? pageLink[i].innerHTML="0"+pageLink[i].innerText
            : pageLink[i].innerHTML=pageLink[i].innerText;
        }
    }

    componentDidUpdate() {
        this.addZero();
    }

    componentDidMount() {

        // Callback loadArticles when not use componentWillMount ---
        // Categories
        //     .filter(e => e.type === this.props.match.url)
        //     .map(e => this.setState({ 
        //         catName: e.categoryName,
        //         apiUrl: "https://magnews24h-api.netlify.app/.netlify/functions/api/articles/" + e.categoryName + "?limit=10&page=1"
        //     }, this.loadArticles));

        // Callback loadArticles when not use componentWillMount ---
        this.loadArticles();
        window.scroll({top: 0, behavior: "smooth"});
    }

    render() {
        return (
            <>
                <Helmet defer={false}>
                    <meta name="description" content={this.state.nameCategory} />
                    <title>{`${this.state.nameCategory} – FoxPress News`}</title>
                </Helmet>
                <main className={`trending-area my-5 fp-${this.state.catType.substring(1)}`}>
                    <div className="trending-main">
                        <div className="container">
                            <div className="row">
                                <div className="col">
                                    {
                                        this.state.items.length
                                            ? this.state.items.splice(0,1).map(
                                                e => <a key={e._id} href={generateLink(e.title, e._id)}><PostCardHorizontal post={e} /></a>
                                            )
                                            : <div class="d-flex align-items-center justify-content-center my-5"><div class="dashed-loading"></div></div>
                                    }
                                    <div className="trending-bottom">
                                        <div className="row post-card-text">
                                            {
                                                this.state.items.length
                                                    ? this.state.items.splice(0,3).map( e => <div key={e._id} className="col-12 col-sm-6 col-md-4 mb-30"><PostCardText post={e} /></div> )
                                                    : <div className="col"><div class="d-flex align-items-center justify-content-center my-5"><div class="dashed-loading"></div></div></div>
                                            }
                                        </div>
                                    </div>
                                    <hr />
                                    <div className="trending-bottom pt-30">
                                        <div className="row">
                                            {
                                                this.state.items.length
                                                    ? this.state.items.map( e => <div key={e._id} className="col-12 col-sm-6 col-md-4 mb-30"><PostCardClassic post={e} /></div> )
                                                    : <div className="col"><div class="d-flex align-items-center justify-content-center my-5"><div class="dashed-loading"></div></div></div>
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="pagination-area py-5">
                                <div className="row">
                                    <div className="col-xl-12">
                                        <div className="single-wrap d-flex justify-content-start">
                                            {/* <nav aria-label="Page navigation example">
                                                <ul className="pagination justify-content-start">
                                                    <li className="page-item"><a className="page-link" href="/"><span className="flaticon-left" /></a></li>
                                                    <li className="page-item active"><a className="page-link" href="/">01</a></li>
                                                    <li className="page-item"><a className="page-link" href="/">02</a></li>
                                                    <li className="page-item"><a className="page-link" href="/">03</a></li>
                                                    <li className="page-item"><a className="page-link" href="/"><span className="flaticon-right" /></a></li>
                                                </ul>
                                            </nav> */}
                                            <nav className="navigation">
                                                <ReactPaginate
                                                    previousLabel={<span className="flaticon-left" />}
                                                    nextLabel={<span className="flaticon-right" />}
                                                    breakLabel={'•••'}
                                                    breakClassName={'break-me'}
                                                    initialPage={0}
                                                    disableInitialCallback={true}
                                                    pageCount={this.state.pages}
                                                    marginPagesDisplayed={2}
                                                    pageRangeDisplayed={3}
                                                    onPageChange={this.handlePageClick}
                                                    containerClassName={'pagination justify-content-start'}
                                                    pageClassName={'page-item'}
                                                    pageLinkClassName={'page-link'}
                                                    activeClassName={'active'}
                                                />
                                            </nav>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </>
        )
    }
}

export default CategoryContainer;