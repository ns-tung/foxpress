import React from 'react';
import {Helmet} from 'react-helmet';
import SideBarContainer from '../SideBar/SideBarContainer';
import BoxCommentForm from '../BoxComment/BoxCommentForm';
import Categories from '../Categories/CategoriesList';
class PostsDetailContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            postId: "",
            postDetail: {}
        };
    }

    UNSAFE_componentWillMount() {
        let getIdSlug = this.props.match.params.slug.match(/[\w-]{1,}-(.*)/)[1];
        this.setState({ postId: this.props.catName+"/"+getIdSlug });
    }

    componentDidMount() {

        let apiUrl = "https://45.76.179.13:4043/api/articles/"+this.state.postId;

        fetch(apiUrl)
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        postDetail: result.data
                    });
            },
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
            <>
                <Helmet defer={false}>
                    <meta name="description" content={this.state.postDetail.title} />
                    <title>{this.state.postDetail.title+' – FoxPress News'}</title>
                </Helmet>
                <main className="my-5">
                    {/* About US Start */}
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-8">
                                {/* Trending Tittle */}
                                <div className="about-area">
                                    <div className="about-right mb-30">
                                        {
                                            Categories
                                                .filter(e => e.categoryName === this.state.postDetail.categoryName)
                                                .map((e,index) => <span key={index} className="category">{e.name}</span>)
                                        }
                                        <div className="section-tittle mb-20">
                                            <h3>{this.state.postDetail.title}</h3>
                                            <time>{this.state.postDetail.time}</time>
                                        </div>
                                        <div className="about-prea" dangerouslySetInnerHTML={{__html:this.state.postDetail.article}} />
                                        <hr />
                                        <div className="social-share">
                                                <div className="section-tittle">
                                                <h3 className="mr-20">Chia sẻ:</h3>
                                                <ul>
                                                    <li>
                                                        <a href="/"><img className="img-fluid" src="img/news/icon-fb.png" alt="" /></a>
                                                    </li>
                                                    <li>
                                                        <a href="/"><img className="img-fluid" src="img/news/icon-ins.png" alt="" /></a>
                                                    </li>
                                                    <li>
                                                        <a href="/"><img className="img-fluid" src="img/news/icon-tw.png" alt="" /></a>
                                                    </li>
                                                    <li>
                                                        <a href="/"><img className="img-fluid" src="img/news/icon-yo.png" alt="" /></a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <BoxCommentForm />
                            </div>
                            <div className="col-12 col-md-4">
                                <SideBarContainer />
                            </div>
                        </div>
                    </div>
                    {/* About US End */}
                </main>
            </>
        );
    }
}

export default PostsDetailContainer;