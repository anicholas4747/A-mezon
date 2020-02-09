import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SignUp extends Component {
    constructor(props){
        super(props);
        this.state = {
            email: "",
            username: "",
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
        this.props.signup(this.state)
            .then( ()=> this.props.history.push("/") );
    }

    render(){
        return (
            <div className="auth-div">
                <span>
                    <Link to="/"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amezon Logo" className="logo" /></Link>
                </span>
                <form onSubmit={this.handleSubmit} className="auth-form">
                    <h2>Create account</h2>
                    <label>Username
                        <input type="text" onChange={this.handleInput("username")} value={this.state.username}/>
                    </label>
                    <br/>
                    <label>Email
                        <input type="email" onChange={this.handleInput("email")} value={this.state.email}/>
                    </label>
                    <br/>
                    <label>Password
                        <input type="password" onChange={this.handleInput("password")} value={this.state.password} placeholder="At least 6 characters"/>
                    </label>
                    <br/>
                    <button>Create your Aにmezon account</button>
                    <br/>
                    <br/>
                    <br/>
                    <div className="already-have-account">
                        <p className="already-have-account">Already have an account?   </p>
                        <Link to="/signin" className="already-have-account">Sign-In ▸</Link>
                    </div>
                </form>
            </div>
        )
    }
}

export default SignUp;