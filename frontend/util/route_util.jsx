import React from 'react';
import { withRouter, Route, Redirect } from "react-router-dom"
import { connect } from "react-redux"

const mapStateToProps = (state) => {
    return ({
        isLoggedIn: Boolean(state.session.currentUser.id)
    });
};

const Auth = ({ component: Component, path, exact, isLoggedIn, render}) => {
    if(render === undefined){ 
        return (
            <Route
                path={path}
                exact={exact}
                render={(props)=>(
                    isLoggedIn ? (
                        <Redirect to = "/" /> 
                    ) : (
                        <Component {...props} />
                    )
                )}
            />
        )
    } else {
        return (
            <Route
                path={path}
                exact={exact}
                render={render}
            />
        ) 
    }
};

const Protected = ({component: Component, path, exact, isLoggedIn, render}) => {
    if(render === undefined){
        return (
            <Route
                path={path}
                exact={exact}
                render={(props) => (
                    isLoggedIn ? (
                        <Component {...props}/>
                    ) : (
                            <Redirect to="/signin" />
                    )
                )}
            />
        )
    } else {
        return (
            <Route
                path={path}
                exact={exact}
                render={render}
            />
        ) 
    }
};

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth)); //routes you can see if you are NOT logged in
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected)); //routes you can see if you are logged in