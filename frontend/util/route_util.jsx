import React from 'react';
import { withRouter, Route, Redirect } from "react-router-dom"
import { connect } from "react-redux"

const mapStateToProps = (state) => {
    return ({
        isLoggedIn: Boolean(state.session.currentUser.id)
    });
};

const Auth = ({ component: Component, path, exact, isLoggedIn}) => {
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
    );
};

const Protected = ({component: Component, path, exact, isLoggedIn}) => {
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
};

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth)); //routes you can see if you are NOT logged in
export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected)); //routes you can see if you are logged in