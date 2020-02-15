import React from 'react';
import Home from './home_page/home_container';
import { Route, Switch } from 'react-router-dom';
import SignUp from './session/signup/signup_container';
import LogIn from './session/login/login_container';
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import NotFoundPage from './404_page/not_found_container';
import NavBar from './navbar/navbar_container.js';
import StudioShow from './studio_page/studio_container';
import AnimeShow from './product_page/anime_show_container';
import CreateReviewForm from './product_page/review_form/new_review_container';
import EditReviewForm from './product_page/review_form/edit_review_container';
import Footer from './footer/footer';

const App = () => {

    const ref = React.createRef();

    return(
        <div id="app" ref={ref}>
            <Switch>
                <AuthRoute path="/register" component={() => (null)} />
                <AuthRoute path="/signin" component={() => (null)} />
                <Route component={NavBar}/>
            </Switch>

            <Switch>
                <Route exact path="/" component={Home}/>
                <AuthRoute path="/register" component={SignUp} />
                <AuthRoute path="/signin" component={LogIn} />
                <Route path="/studio" component={StudioShow} />
                <Route path="/anime" component={AnimeShow} />
                <ProtectedRoute path="/review/create-review" component={CreateReviewForm} />
                <ProtectedRoute path="/review/edit-review" component={EditReviewForm} />
                <Route component={NotFoundPage}/>
            </Switch>

            <Switch>
                <AuthRoute path="/register" component={() => (null)} />
                <AuthRoute path="/signin" component={() => (null)} />
                <Route render={() => <Footer refPos={ref} />}/>
            </Switch>
        </div>
    )
};

export default App;

