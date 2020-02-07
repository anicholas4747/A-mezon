import React, { Component } from 'react';
import { Link } from 'react-router-dom';

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
        this.props.login(this.state)
            .then( ()=> this.props.history.push("/") );
    }

    render(){
        return (
            <div className="auth-div">
                <span>
                    <Link to="/" className="logo"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amezon Logo" /></Link>
                </span>
                <form onSubmit={this.handleSubmit} className="auth-form">
                    <h2>Sign-In</h2>
                    <label>Email (or username)
                        <input type="text" onChange={this.handleInput("un_or_email")} value={this.state.email}/>
                    </label>
                    <br/>
                    <label>Password
                        <input type="password" onChange={this.handleInput("password")} value={this.state.password}/>
                    </label>
                    <br/>
                    <button>Sign-In</button>
                </form>
                <br/>
                <div className="new-to-site"></div>
                <p className="new-to-site">New to Aにmezon?</p>
                <br/>
                <Link to="/register" className="new-to-site">Create your Aにmezon account</Link>

            </div>
        )
    }
}

export default LogIn;