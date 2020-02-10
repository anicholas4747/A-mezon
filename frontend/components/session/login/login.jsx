import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';

class LogIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            un_or_email: "",
            password: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(field){
        return ((e) => {
            this.setState({
                [field]: e.target.value
            });
        });
    }

    handleSubmit(e){
        e.preventDefault();
        if (this.props.location.search.includes("?verify_email")) {
            let userExists = true;
            //search database for user

            if(userExists) {
                this.props.history.push({
                    pathname: "/signin",
                    state: {un_or_email: this.state.un_or_email}
                });
            } else {
                this.props.history.push({
                    pathname: "/signin?verify_email#",
                });
            }
        } else {
            this.props.login(this.state)
                .then(() => this.props.history.push("/"));
        }
    }

    componentDidMount(){
        this.nameInput.focus();
    }

    render(){
        if ((this.props.location.search.includes("?verify_email")) || (this.props.location.state === undefined)) {
            // verify email
            return (
                <div className="auth-div">
                    <span>
                        <Link to="/"><img src={window.logoBlack} alt="Amezon Logo" className="logo"/></Link>
                    </span>
                    <form onSubmit={this.handleSubmit} className="auth-form">
                        <h2>Sign-In</h2>
                        <label>Email (or username)
                            <input type="text" onChange={this.handleInput("un_or_email")} value={this.state.email} ref={(input) => { this.nameInput = input; }}/>
                        </label>
                        <br/>
                        <button>Continue</button>
                    </form>
                    <br/>
                    <div className="new-to-site"></div>
                    <p className="new-to-site">New to Aにmezon?</p>
                    <br/>
                    <Link to="/register" className="new-to-site">Create your Aにmezon account</Link>
    
                </div>
            )
        } else {
            // verify password
            return (
                <div className="auth-div">
                    <span>
                        <Link to="/"><img src={window.logoBlack} alt="Amezon Logo" className="logo" /></Link>
                    </span>
                    <form onSubmit={this.handleSubmit} className="auth-form">
                        <h2>Sign-In</h2>
                        <div id="auth-email">
                            {this.props.location.state.un_or_email}
                            <a href="/signin?verify_email">Change</a>
                        </div>
                        <br/>
                        <br/>
                        <label>
                            <div id="pw-section">
                                Password
                                <Link to="/register">Forgot your Password?</Link>
                            </div>
                            <input type="password" onChange={this.handleInput("password")} value={this.state.password} ref={(input) => { this.nameInput = input; }} />
                        </label>
                        <br />
                        <button>Sign-In</button>
                        <br/>
                        <br/>
                        <div id="keep-signed-in">
                            <input type="checkbox"/><p>Keep me signed in.</p>
                        </div>
                    </form>
                </div>
            )
        }
    }
}

export default LogIn;