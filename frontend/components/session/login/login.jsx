import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LogIn extends Component {
    constructor(props){
        super(props);
        this.state = {
            userInfo: {
                un_or_email: "",
                password: ""
            },
            errors: ""
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoUser = this.handleDemoUser.bind(this);
    }

    handleInput(field){
        return ((e) => {
            if(field === "un_or_email"){
                this.setState({
                    userInfo: {
                        [field]: e.target.value,
                        password: this.state.userInfo.password
                    },
                    errors: ""
                });
            } else {
                this.setState({
                    userInfo: {
                        username: this.state.userInfo.username,
                        [field]: e.target.value
                    },
                    errors: ""
                });
            }
        });
    }

    handleDemoUser(e){
        e.preventDefault();

        const demoUsername = "anime_lover123";
        const demoPassword = "mypwishunter12";
        let i = 0;
        let j = 0;

        const demoUNLogin = () => {
            if(i < demoUsername.length){
                this.setState({userInfo: {
                    un_or_email: demoUsername.slice(0,i),
                    password: ""
                    }},
                    () => {
                        i++;
                        setTimeout(demoUNLogin, 120);
                    }
                );
            } else {
                this.props.history.push({
                    pathname: "/signin",
                    state: { un_or_email: demoUsername }
                });

                this.setState(
                    { userInfo: { un_or_email: demoUsername, password: demoPassword.slice(0, j) } },
                    demoPWLogin
                );
            }
        };

        const demoPWLogin = () => {
            if(j < demoPassword.length){
                this.setState({ userInfo: {un_or_email: demoUsername, password: demoPassword.slice(0,j)}},
                    () => {
                        j++;
                        setTimeout(demoPWLogin, 120);
                    }
                );
            } else {
                let userCredentials = {
                    un_or_email: demoUsername,
                    password: demoPassword
                };

                this.props.login(userCredentials)
                    .then(() => this.props.history.push("/"));
            }
        };

        this.setState({ userInfo: { un_or_email: demoUsername.slice(0, i) } }, demoUNLogin);
    }

    handleSubmit(e){
        e.preventDefault();
        if (this.state.userInfo.un_or_email === "") {
            this.setState({
                errors: <h4 className="no-entry">! Enter your email or username</h4>
            })
        } else if (this.props.location.search.includes("?verify_email")) {
            //search database for user
            this.props.verifyUNEmail(this.state.userInfo.un_or_email)
                .then( () => {
                    let userExists = Boolean(this.props.currentUser.exists);
                    if (userExists) {
                        this.props.history.push({
                            pathname: "/signin",
                            state: { un_or_email: this.state.userInfo.un_or_email }
                        });
                        this.setState({
                            errors: ""
                        });
                    } else {
                        this.setState({
                            errors: ""
                        }, () => (this.props.history.push({
                            pathname: "/signin?verify_email"
                        })))
                    }
                })
        } else if (this.state.userInfo.password === "") {
            this.setState({
                errors: <h4 className="no-entry">! Enter your password</h4>
            })
        } else {
            let userCredentials = {
                un_or_email: this.props.location.state.un_or_email,
                password: this.state.userInfo.password
            }
            this.props.login(userCredentials)
                .then(
                    () => this.props.history.push("/"),
                    () => this.setState({errors: "bad password"})
            );
        }
    }

    componentWillUnmount(){
        this.props.switchPage();
    }

    render(){

        const noUser = (this.props.currentUser.exists === 1 || this.props.currentUser.exists === undefined) ? null : (
            <div className="auth-errors">
                <div><img src={window.hazard} alt="hazard" /></div>
                <span>
                    <h4>There was a problem</h4>
                    <h5>We cannot find an account with that email or username</h5>
                </span>
            </div>
        );

        const inputColor = (typeof this.state.errors !== "string" && this.state.errors.props.children.includes("!")) ? "no-entry" : null;

        if ( noUser || (this.props.location.search.includes("?verify_email")) || (this.props.location.state === undefined)) {
            // verify email
            return (
                <div className="auth-div">
                    <span>
                        <Link to="/"><img src={window.logoBlack} alt="Amezon Logo" className="logo"/></Link>
                    </span>
                    {noUser}
                    <form className="auth-form">
                        <h2>Sign-In</h2>
                        <label>Email (or username)
                            <input className={inputColor} type="text" onChange={this.handleInput("un_or_email")} value={this.state.userInfo.un_or_email} autoFocus/>
                        </label>
                        {(this.state.userInfo.un_or_email === "") ? this.state.errors : null}
                        <br/>
                        <button onClick={this.handleSubmit}>Continue</button>
                        <br />
                        <button onClick={this.handleDemoUser} id="demo-button">Log In as Demo User</button>
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
            const badPW = (this.state.errors !== "bad password") ? null : (
                <div className="auth-errors">
                    <div><img src={window.hazard} alt="hazard" /></div>
                    <span>
                        <h4>There was a problem</h4>
                        <h5>Your password is incorrect</h5>
                    </span>
                </div>
            )
            return (
                <div className="auth-div">
                    <span>
                        <Link to="/"><img src={window.logoBlack} alt="Amezon Logo" className="logo" /></Link>
                    </span>
                    {badPW}
                    <form className="auth-form">
                        <h2>Sign-In</h2>
                        <div id="auth-email">
                            {this.props.location.state.un_or_email}
                            <Link to="/signin?verify_email">Change</Link>
                        </div>
                        <br/><br/>
                        <label>
                            <div id="pw-section">
                                Password
                                {/* <Link to="/register">Forgot your Password?</Link> */}
                            </div>
                            <input className={inputColor} type="password" onChange={this.handleInput("password")} value={this.state.userInfo.password} autoFocus />
                        </label>
                        {(this.state.userInfo.password === "" && this.state.errors !== "bad password") ? this.state.errors : null}
                        <br />
                        <button onClick={this.handleSubmit}>Sign-In</button>
                        <br/>
                        <br/>
                        {/* <div id="keep-signed-in">
                            <input type="checkbox"/><p>Keep me signed in.</p>
                        </div> */}
                    </form>
                </div>
            )
        }
    }
}

export default LogIn;