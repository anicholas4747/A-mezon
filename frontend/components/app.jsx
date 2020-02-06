import React from 'react';
import Home from './home_page/home';
import { Route, Switch } from 'react-router-dom';
import SignUp from './session/signup/signup_container';
import LogIn from './session/login/login_container';

const App = () => {
    return(
        <div>
            <h1>hello from the App</h1>
            <Switch>
                <Route exact path="/" component={Home}/>
                <Route path="/signup" component={SignUp}/>
                <Route path="/login" component={LogIn}/>
            </Switch>
        </div>
    )
};

export default App;