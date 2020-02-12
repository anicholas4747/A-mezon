import React from 'react';
import Home from './home_page/home_container';
import { Route, Switch } from 'react-router-dom';
import SignUp from './session/signup/signup_container';
import LogIn from './session/login/login_container';
import { AuthRoute } from '../util/route_util';
import NotFoundPage from './404_page/not_found';
import NavBar from './navbar/navbar_container';
import StudioShow from './studio_page/studio_container';
import AnimeShow from './product_page/anime_show_container';

const App = () => {
    return(
        <div>
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
                <Route component={NotFoundPage}/>
            </Switch>
        </div>
    )
};

export default App;

