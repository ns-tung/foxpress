import React from 'react';
import ReactPaginate from 'react-paginate';
import PostCardOverlay from '../PostCard/PostCardOverlay';
import Categories from '../Categories/CategoriesList';
import SideBarContainer from '../SideBar/SideBarContainer';

class CategoryContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            activePage: 1,
            catName: "",
            items: [],
            offset: 0
        }
    }

    // handlePageClick = data => {
    //     let selected = data.selected;
    //     let offset = Math.ceil(selected * this.props.perPage);

    //     this.setState({ offset: offset }, () => {
    //         Router.push('/[category]', `${this.props.categoryPath}-p${selected + 1}`);
    //         window.scroll({top: 0, left: 0, behavior: 'smooth' })
    //     });
    // };

    changCurrentPage = numPage => {
        console.log(numPage);
        this.setState({ activePage: numPage })
    }

    UNSAFE_componentWillMount() {
        Categories
            .filter(e => e.type === this.props.match.url)
            .map(e => this.setState({ catName: e.categoryName }))
    }

    componentDidMount() {


        let apiUrl = "https://45.76.179.13:4043/api/articles/" + this.state.catName;

        fetch(apiUrl)
            .then(res => res.json())
            .then((result) => {
                // let listPost = [];
                // listPost = result.data.articles;
                this.setState({
                    isLoaded: true,
                    items: result.data.articles
                })
            })
    }

    render() {
        // const { articles: listArticles, pages = 1 } = this.props.articles;
        // const categoryName = this.props.categoryName;
        // const firstArticle = listArticles.length && listArticles[0];
        // if (firstArticle) firstArticle.thumb_art = convertSizeImageUrl.toFull(firstArticle.thumb_art);
        // const ortherArticles = listArticles.slice(1);
        return (
            <main className="trending-area my-5">
                <div className="trending-main">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-8">
                                <div className="row">
                                    {this.state.items && this.state.items.length ? this.state.items.map(e => <div key={e._id} className="col-12 col-sm-6"><PostCardOverlay post={e} /></div>) : <div className="col"><p className="theme-color">No data posts</p></div>}
                                    <div className="pagination-area py-5 text-center">
                                        <div className="container">
                                            <div className="row">
                                                <div className="col-xl-12">
                                                    <div className="single-wrap d-flex justify-content-center">
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
                                                                pageCount={10}
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
                            </div>
                            <div className="col-md-4">
                                <SideBarContainer />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default CategoryContainer;