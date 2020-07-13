import React from 'react';
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
            <main className="my-5">
                {/* About US Start */}
                <div className="about-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12 col-md-8">
                                {/* Trending Tittle */}
                                <div className="about-right mb-30">
                                    {/* <div className="trend-top-cap">
                                        <span>Appetizers</span>
                                        <h2><a href="details.html">Welcome To The Best Model Winner<br /> Contest At Look of the year</a></h2>
                                    </div> */}
                                    {/* <div className="about-img">
                                        <img src={this.state.postDetail.thumb_art} alt={this.state.postDetail.title} />
                                    </div> */}
                                    {Categories.map((e,index) => { if(e.categoryName === this.state.postDetail.categoryName) {return <span key={index} className="category" >{e.name}</span>}})}
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
                                {/* From */}
                                <form className="form-contact contact_form mb-80" method="post" id="contactForm" noValidate="novalidate">
                                    <div className="row">
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input className="form-control error" name="name" id="name" type="text" placeholder="Enter your name" />
                                            </div>
                                        </div>
                                        <div className="col-sm-6">
                                            <div className="form-group">
                                                <input className="form-control error" name="email" id="email" type="email" placeholder="Email" />
                                            </div>
                                        </div>
                                        {/* <div className="col-12">
                                            <div className="form-group">
                                                <input className="form-control error" name="subject" id="subject" type="text" placeholder="Enter Subject" />
                                            </div>
                                        </div> */}
                                        <div className="col-12">
                                            <div className="form-group">
                                                <textarea className="form-control h-100 error" name="message" id="message" cols={30} rows={9} placeholder="Enter Message" defaultValue={""} />
                                            </div>
                                        </div>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" className="w-100 button button-contactForm boxed-btn">Gửi</button>
                                    </div>
                                </form>
                            </div>
                            <div className="col-12 col-md-4">
                                {/* Section Tittle */}
                                <div className="section-tittle mb-30">
                                    <h3>Follow Us</h3>
                                </div>
                                {/* Flow Socail */}
                                <div className="single-follow mb-30">
                                    <div className="single-box">
                                        <div className="follow-us d-flex align-items-center">
                                            <div className="follow-social">
                                                <a href="/"><img className="img-fluid" src="img/news/icon-fb.png" alt="" /></a>
                                            </div>
                                            <div className="follow-count">
                                                <span>8,045</span>
                                                <p>Fans</p>
                                            </div>
                                        </div>
                                        <div className="follow-us d-flex align-items-center">
                                            <div className="follow-social">
                                                <a href="/"><img className="img-fluid" src="img/news/icon-tw.png" alt="" /></a>
                                            </div>
                                            <div className="follow-count">
                                                <span>8,045</span>
                                                <p>Fans</p>
                                            </div>
                                        </div>
                                        <div className="follow-us d-flex align-items-center">
                                            <div className="follow-social">
                                                <a href="/"><img className="img-fluid" src="img/news/icon-ins.png" alt="" /></a>
                                            </div>
                                            <div className="follow-count">
                                                <span>8,045</span>
                                                <p>Fans</p>
                                            </div>
                                        </div>
                                        <div className="follow-us d-flex align-items-center">
                                            <div className="follow-social">
                                                <a href="/"><img className="img-fluid" src="img/news/icon-yo.png" alt="" /></a>
                                            </div>
                                            <div className="follow-count">
                                                <span>8,045</span>
                                                <p>Fans</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/* New Poster */}
                                <div className="news-poster d-none d-md-block">
                                    <img className="img-fluid" src="img/news/news_card.jpg" alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* About US End */}
            </main>
        );
    }
}

export default PostsDetailContainer;