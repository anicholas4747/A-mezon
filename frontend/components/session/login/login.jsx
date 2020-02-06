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
            <div>
                <Link to="/"><img src="" alt="Amezon Logo" /></Link>
                <form onSubmit={this.handleSubmit} className="auth-form">
                    <h2>Sign-In</h2>
                    <label>Email (or username)
                        <input type="text" onChange={this.handleInput("un_or_email")} value={this.state.email}/>
                    </label>
                    <label>Password
                        <input type="password" onChange={this.handleInput("password")} value={this.state.password} placeholder="At least 6 characters"/>
                    </label>
                    <button>Sign-In</button>
                </form>
                <br/>
                <p>--- New to Aにmezon? ---</p>
                <br/>
                <Link to="/signup">Create your Aにmezon account</Link>

            </div>
        )
    }
}

export default LogIn;