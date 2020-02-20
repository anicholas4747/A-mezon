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
import Cart from './cart_page/cart_container';

const App = () => {

    const top = React.createRef();
    const bottom = React.createRef();

    return(
        <div id="app" ref={ top }>
            <Switch>
                <AuthRoute path="/register" component={() => (null)} />
                <AuthRoute path="/signin" component={() => (null)} />
                <ProtectedRoute path="/profile/edit-profile" component={() => (null)} />
                <Route render={(props) => <NavBar bottom={bottom} top={top} {...props} />} />
            </Switch>

            <Switch>
                <Route exact path="/" render={(props) => <Home refPos= { top } {...props}/>} />
                <AuthRoute path="/register" component={SignUp} />
                <AuthRoute path="/signin" component={LogIn} />
                <Route path="/studio" render={(props) => <StudioShow refPos= { top } {...props} />} />
                <Route path="/s" render={(props) => <SearchResults refPos= { top } {...props} />} />
                <Route path="/anime" render={(props) => <AnimeShow refPos= { top } {...props} />} />
                <Route path="/cart" render={(props) => <Cart refPos= { top } {...props} />} />
                <Route path="/language-select" render={(props) => <LangSelect refPos= { top } {...props} />} />
                <ProtectedRoute path="/profile/edit-profile" render={(props) => <EditProfileForm refPos= { top } {...props} />} />
                <Route path="/profile" render={(props) => <ProfilePage refPos= { top } {...props} />} />
                <ProtectedRoute path="/review/create-review" render={(props) => <CreateReviewForm refPos= { top } {...props} />} />
                <ProtectedRoute path="/review/edit-review" render={(props) => <EditReviewForm refPos= { top } {...props} />} />
                <Route render={(props) => <NotFoundPage refPos= { top } {...props} />}/>
            </Switch>

            <Switch>
                <AuthRoute path="/register" component={() => (null)} />
                <AuthRoute path="/signin" component={() => (null)} />
                <ProtectedRoute path="/profile/edit-profile" component={() => (null)} />
                <Route render={() => <Footer refPos={ top } />}/>
            </Switch>
            <div ref={ bottom }></div>
        </div>
    )
};

export default App;

