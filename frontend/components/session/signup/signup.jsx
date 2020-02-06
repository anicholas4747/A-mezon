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
            <div>
                <Link to="/"><img src="" alt="Amezon Logo"/></Link>
                <form onSubmit={this.handleSubmit} className="auth-form">
                    <h2>Create account</h2>
                    <label>Username
                        <input type="text" onChange={this.handleInput("username")} value={this.state.username}/>
                    </label>
                    <label>Email
                        <input type="email" onChange={this.handleInput("email")} value={this.state.email}/>
                    </label>
                    <label>Password
                        <input type="password" onChange={this.handleInput("password")} value={this.state.password} placeholder="At least 6 characters"/>
                    </label>
                    <button>Create your Aにmezon account</button>
                </form>
                <p>Already have an account?</p>
                <Link to="/login">Sign-In ▸</Link>
            </div>
        )
    }
}

export default SignUp;