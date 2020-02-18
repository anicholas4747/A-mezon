import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class EditProfileForm extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.passwordCheck = this.passwordCheck.bind(this);
        this.handleInput = this.handleInput.bind(this);
        this.state = {
            userInfo: {
                username: this.props.user.username,
                email: this.props.user.email,
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
    }

    handleInput(field){
        return (e) => {
            e.preventDefault();
            
            if (this.props.location.search.includes("?verify_password")){
                this.setState({
                    userInfo: {
                        username: this.props.user.username,
                        email: this.props.user.email,
                        password: e.target.value,
                        passwordRe: ""
                    },
                    errors: {
                        username: "",
                        email: "",
                        password: "",
                        passwordRe: "",
                        match: ""
                    }
                });
            } else {
                if (field === "username") {
                    this.setState({
                        userInfo: {
                            username: e.target.value,
                            email: this.state.userInfo.email,
                            password: this.state.userInfo.password,
                            passwordRe: this.state.userInfo.passwordRe
                        },
                        errors: {
                            username: "",
                            email: this.state.errors.email,
                            password: this.state.errors.password,
                            passwordRe: this.state.errors.passwordRe,
                            match: this.state.errors.match
                        }
                    });
                } else if (field === "email") {
                    this.setState({
                        userInfo: {
                            username: this.state.userInfo.username,
                            email: e.target.value,
                            password: this.state.userInfo.password,
                            passwordRe: this.state.userInfo.passwordRe
                        },
                        errors: {
                            username: this.state.errors.username,
                            email: "",
                            password: this.state.errors.password,
                            passwordRe: this.state.errors.passwordRe,
                            match: this.state.errors.match
                        }
                    });
                } else if (field === "password") {
                    this.setState({
                        userInfo: {
                            username: this.state.userInfo.username,
                            email: this.state.userInfo.email,
                            password: e.target.value,
                            passwordRe: this.state.userInfo.passwordRe
                        },
                        errors: {
                            username: this.state.errors.username,
                            email: this.state.errors.email,
                            password: "",
                            passwordRe: this.state.errors.passwordRe,
                            match: this.state.errors.match
                        }
                    });
                } else if (field === "passwordRe") {
                    this.setState({
                        userInfo: {
                            username: this.state.userInfo.username,
                            email: this.state.userInfo.email,
                            password: this.state.userInfo.password,
                            passwordRe: e.target.value
                        },
                        errors: {
                            username: this.state.errors.username,
                            email: this.state.errors.email,
                            password: this.state.errors.password,
                            passwordRe: "",
                            match: ""
                        }
                    });
                }
            }
        };
    }

    passwordCheck(e){
        e.preventDefault();
        if (this.state.userInfo.password === "") {
            this.setState({
                errors: {
                    username: "",
                    email: "",
                    password: <h4 className="no-entry">! Enter your password</h4>,
                    passwordRe: "",
                    match: ""
                }
            });
        } else {
            const creds = {
                un: this.state.userInfo.username,
                pw: this.state.userInfo.password
            };

            this.props.verifyPassword(creds)
                .then(() => {
                    let userExists = Boolean(this.props.currentUser.exists);
                    if (userExists) {
                        this.setState({
                            userInfo: {
                                username: this.props.user.username,
                                email: this.props.user.email,
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
                        }, () => (
                            this.props.history.push("/profile/edit-profile")
                        ));
                    } else {
                        this.setState({
                            userInfo: {
                                username: this.props.user.username,
                                email: this.props.user.email,
                                password: this.state.userInfo.password,
                                passwordRe: ""
                            },
                            errors: {
                                username: "",
                                email: "",
                                password: "",
                                passwordRe: "",
                                match: ""
                            }
                        }, () => (
                            this.props.history.push("/profile/edit-profile?verify_password"))
                        )}
                });
        }
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
            unError = <h4 className="no-entry">! Enter your username</h4>
            errs++;
        }
        if (this.state.userInfo.email === "") {
            emError = <h4 className="no-entry">! Enter your email</h4>
            errs++;
        }
        if (this.state.userInfo.password !== "" && this.state.userInfo.password.length < 6) {
            pwError = <h4 className="no-entry">! Passwords must be at least 6 characters.</h4>
            errs++;
        }
        if (this.state.userInfo.password !== "" && this.state.userInfo.passwordRe === "") {
            pwReError = <h4 className="no-entry">! Type your new password again</h4>
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
                match: matchError
            }
        });

        if (errs === 0) {
            const userInfo = (this.state.userInfo.password === "") ? {
                id: this.props.currentUser.id,
                username: this.state.userInfo.username,
                email: this.state.userInfo.email,
            } : {
                id: this.props.currentUser.id,
                username: this.state.userInfo.username,
                email: this.state.userInfo.email,
                password: this.state.userInfo.password
            };

            this.props.updateUser(userInfo)
                .then(() => this.props.history.push(`/profile?${this.state.userInfo.username.split(" ").join("-")}`));
        }
    }

    componentDidMount(){
        if (this.props.refPos.current !== null) {
            this.props.refPos.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
        this.props.fetchProfile(this.props.currentUser.username);
    }

    componentWillUnmount() {
        if (!this.props.location.search.includes("?verify_password") || this.props.currentUser.exists === 0){
            this.props.switchPage();
        }
    }

    render(){

        if(this.props.user.username === undefined) return <h1>Loading...</h1>

        if (this.props.location.search.includes("?verify_password")){
            // verify password
            const badPW = (this.props.currentUser.exists === 1 || this.props.currentUser.exists === undefined) ? null : (
                <div className="auth-errors">
                    <div><img src={window.hazard} alt="hazard" /></div>
                    <span>
                        <h4>There was a problem</h4>
                        <h5>Your password is incorrect</h5>
                    </span>
                </div>
            )

            const inputColor = (typeof this.state.errors.password !== "string" && this.state.errors.password.props.children.includes("!")) ? "no-entry" : null;

            return (
                <div className="auth-div">
                    <span>
                        <Link to="/"><img src={window.logoBlack} alt="Amezon Logo" className="logo" /></Link>
                    </span>
                    {badPW}
                    <form className="auth-form">
                        <h2>Please confirm your password</h2>
                        <div id="auth-email">
                            <br/>
                            <label>Username <p>{this.props.currentUser.username}</p></label>
                            <br/>
                            <label>Email <p>{this.props.user.email}</p></label>
                        </div>
                        <br /><br />
                        <label>
                            <div id="pw-section">
                                Password
                            </div>
                            <input className={inputColor} type="password" onChange={this.handleInput("password")} value={this.state.userInfo.password} autoFocus />
                        </label>
                        {(this.state.userInfo.password === "" && this.state.errors !== "bad password") ? this.state.errors.password : null}
                        <br />
                        <button onClick={this.passwordCheck}>Confirm</button>
                        <br />
                        <br />
                    </form>
                </div>
            )
        } else {
            // update profile info
            const unInputColor = (this.state.errors.username !== "") ? "no-entry" : null;
            const emInputColor = (this.state.errors.email !== "") ? "no-entry" : null;
            const pwInputColor = (this.state.errors.password !== "") ? "no-entry" : null;
            const pwReInputColor = (this.state.errors.passwordRe !== "") ? "no-entry" : null;

            return (
                <div className="auth-div">
                    <span>
                        <Link to="/"><img src={window.logoBlack} alt="Amezon Logo" className="logo" /></Link>
                    </span>
                    <form className="auth-form">
                        <h2>Update account information</h2>
                        <label>Username
                            <input className={unInputColor} type="text" onChange={this.handleInput("username")} value={this.state.userInfo.username} autoFocus />
                        </label>
                        {(this.state.userInfo.username === "") ? this.state.errors.username : null}
                        <br />
                        <label>Email
                            <input className={emInputColor} type="email" onChange={this.handleInput("email")} value={this.state.userInfo.email} />
                        </label>
                        {(this.state.userInfo.email === "") ? this.state.errors.email : null}
                        <br />
                        <label>New password <p>(if no change, leave field blank)</p>
                            <input className={pwInputColor} type="password" onChange={this.handleInput("password")} value={this.state.userInfo.password} placeholder="At least 6 characters" />
                        </label>
                        {(this.state.userInfo.password.length >= 6) ? null : this.state.errors.password}
                        <br />
                        <label>Re-enter new password <p>(if no change, leave field blank)</p>
                            <input className={pwReInputColor} type="password" onChange={this.handleInput("passwordRe")} value={this.state.userInfo.passwordRe} />
                        </label>
                        {(this.state.userInfo.passwordRe === "") ? this.state.errors.passwordRe : null}
                        {this.state.errors.match}
                        <br /><br/>
                        <button id="cancel" onClick={()=> this.props.history.push(`/profile?${this.props.currentUser.username.split(" ").join("-")}`)}>Cancel</button>
                        <button onClick={this.handleSubmit} id="save-changes">Save Changes</button>
                    </form>
                </div>
            )
        }
    }
}

export default EditProfileForm;