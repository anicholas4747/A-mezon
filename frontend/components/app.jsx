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
import ProfilePage from './profile_page/profile_page_container';
import LangSelect from './lang_select_page/lang_select_container';
import EditProfileForm from './profile_page/edit_profile/edit_profile_form_container';
import SearchResults from './search_results_page/search_results_container';

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
                <Route exact path="/" render={(props) => <Home refPos= { ref } {...props}/>} />
                <AuthRoute path="/register" component={SignUp} />
                <AuthRoute path="/signin" component={LogIn} />
                <Route path="/studio" render={(props) => <StudioShow refPos= { ref } {...props} />} />
                <Route path="/s" render={(props) => <SearchResults refPos= { ref } {...props} />} />
                <Route path="/anime" render={(props) => <AnimeShow refPos= { ref } {...props} />} />
                <Route path="/language-select" render={(props) => <LangSelect refPos= { ref } {...props} />} />
                <ProtectedRoute path="/profile/edit-profile" render={(props) => <EditProfileForm refPos= { ref } {...props} />} />
                <Route path="/profile" render={(props) => <ProfilePage refPos= { ref } {...props} />} />
                <ProtectedRoute path="/review/create-review" render={(props) => <CreateReviewForm refPos= { ref } {...props} />} />
                <ProtectedRoute path="/review/edit-review" render={(props) => <EditReviewForm refPos= { ref } {...props} />} />
                <Route render={(props) => <NotFoundPage refPos= { ref } {...props} />}/>
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

