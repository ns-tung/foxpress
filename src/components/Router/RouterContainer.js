import React from 'react';
import { Route, Switch } from 'react-router-dom';
import HomeContainer from '../Home/HomeContainer';
import PostsDetailContainer from '../PostsDetail/PostsDetailContainer';
import NotFoundContainer from '../NotFound/NotFoundContainer';
import Categories from '../Categories/CategoriesList';
import CategoryContainer from '../Categories/CategoryContainer';

class RouterContainer extends React.Component {
    render() {
        return (
            <Switch>
                <Route exact path="/" component={HomeContainer} />
                { Categories.map((e,index) => <Route key={index} path={e.type} component={CategoryContainer} />) }
                <Route path="/:slug.html" component={PostsDetailContainer} />
                <Route component={NotFoundContainer} />
            </Switch>
        )
    }
}

export default RouterContainer;