import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            userInfo: {
                username: "",
                email: "",
                password: "",
                passwordRe: ""
            },
            errors: {
                username: "",
                email: "",
                password: "",
                passwordRe: "",
                match: ""
            }
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleInput(field){
        return ((e) => {            
            if (field === "username") {
                this.setState({
                    userInfo: {
                        username: e.target.value,
                        email: this.state.userInfo.email,
                        password: this.state.userInfo.password,
                        passwordRe: this.state.userInfo.passwordRe
                    }
                });
            } else if (field === "email") {
                this.setState({
                    userInfo: {
                        username: this.state.userInfo.username,
                        email: e.target.value,
                        password: this.state.userInfo.password,
                        passwordRe: this.state.userInfo.passwordRe
                    }
                });
            } else if (field === "password") {
                this.setState({
                    userInfo: {
                        username: this.state.userInfo.username,
                        email: this.state.userInfo.email,
                        password: e.target.value,
                        passwordRe: this.state.userInfo.passwordRe
                    }
                });
            } else if (field === "passwordRe") {
                this.setState({
                    userInfo: {
                        username: this.state.userInfo.username,
                        email: this.state.userInfo.email,
                        password: this.state.userInfo.password,
                        passwordRe: e.target.value
                    }
                });
            }
        });
    }

    handleSubmit(e){
        e.preventDefault();
        let errs = 0;
        let unError = "";
        let emError = "";
        let pwError = "";
        let pwReError = "";
        let matchError = "";

        if (this.state.userInfo.username === "") {
            unError =<h4 className="no-entry">! Enter your username</h4>
            errs++;
        }
        if (this.state.userInfo.email === "") {
            emError = <h4 className="no-entry">! Enter your email</h4>
            errs++;
        }
        if (this.state.userInfo.password === "") {
            pwError = <h4 className="no-entry">! Enter your password</h4>
            errs++;
        } else if (this.state.userInfo.password.length < 6) {
            pwError = <h4 className="no-entry">! Passwords must be at least 6 characters.</h4>
            errs++;
        }
        if (this.state.userInfo.password !== "" && this.state.userInfo.passwordRe === "") {
            pwReError = <h4 className="no-entry">! Type your password again</h4>
            errs++;
        } else if (this.state.userInfo.passwordRe !== this.state.userInfo.password) {
            matchError = <h4 className="no-entry">! Passwords must match</h4>
            errs++;
        }

        this.setState({
            errors: {
                username: unError,
                email: emError,
                password: pwError,
                passwordRe: pwReError,
                match:matchError
            }
        });
        
        if (errs === 0) {
            this.props.signup(this.state.userInfo)
                .then( ()=> this.props.history.push("/") );
        }
    }

    render(){
        const unInputColor = (this.state.errors.username !== "") ? "no-entry" : null;
        const emInputColor = (this.state.errors.email !== "") ? "no-entry" : null;
        const pwInputColor = (this.state.errors.password !== "") ? "no-entry" : null;
        const pwReInputColor = (this.state.errors.passwordRe !== "") ? "no-entry" : null;

        return (
            <div className="auth-div">
                <span>
                    <Link to="/"><img src={window.logoBlack} alt="Amezon Logo" className="logo" /></Link>
                </span>
                <form onSubmit={this.handleSubmit} className="auth-form">
                    <h2>Create account</h2>
                    <label>Username
                        <input className={unInputColor} type="text" onChange={this.handleInput("username")} value={this.state.userInfo.username} autoFocus/>
                    </label>
                    {this.state.errors.username}
                    <br/>
                    <label>Email
                        <input className={emInputColor} type="email" onChange={this.handleInput("email")} value={this.state.userInfo.email}/>
                    </label>
                    {this.state.errors.email}
                    <br/>
                    <label>Password
                        <input className={pwInputColor} type="password" onChange={this.handleInput("password")} value={this.state.userInfo.password} placeholder="At least 6 characters"/>
                    </label>
                    {this.state.errors.password}
                    <br/>
                    <label>Re-enter password
                        <input className={pwReInputColor} type="password" onChange={this.handleInput("passwordRe")} value={this.state.userInfo.passwordRe}/>
                    </label>
                    {this.state.errors.passwordRe}
                    {this.state.errors.match}
                    <br/>
                    <button>Create your Aにmezon account</button>
                    <br/>
                    <br/>
                    <br/>
                    <div className="already-have-account">
                        <p className="already-have-account">Already have an account?   </p>
                        <Link to="/signin?verify_email" className="already-have-account">Sign-In ▸</Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp;