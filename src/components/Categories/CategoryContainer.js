import React from 'react';
import PostCardOverlay from '../PostCard/PostCardOverlay';
import Categories from '../Categories/CategoriesList';

class CategoryContainer extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            catName: "",
            items: []
        }
    }

    UNSAFE_componentWillMount() {
        Categories.map( e => {
            if(e.type === this.props.match.url) {
                this.setState({catName: e.categoryName});
            }
        })
    }
    
    componentDidMount() {


        let apiUrl = "https://45.76.179.13:4043/api/articles/"+this.state.catName;

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
        return (
            <main className="trending-area my-5">
                <div className="trending-main">
                    <div className="container">
                        <div className="row">
                            { this.state.items && this.state.items.length ? this.state.items.map( e => <div key={e._id} className="col-12 col-sm-6"><PostCardOverlay post={e} /></div> ) : <div className="col"><p className="theme-color">No data posts</p></div> }
                        </div>
                    </div>
                </div>
            </main>
        )
    }
}

export default CategoryContainer;