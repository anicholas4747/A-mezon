import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(props){
        super(props);
        this.signout = this.signout.bind(this);
    }

    signout(e){
        e.preventDefault();
        this.props.logout()
            .then(() => (this.props.history.push("/signin")));
    }

    render(){
        const authButton = this.props.isLoggedIn ? (
            <button onClick={this.signout}>Sign Out</button>
        ) : (
                <Link to="/signin?verify_email">Sign in</Link>
        );

        return (
            <div>
                <h1>Aにmezon Home Page</h1>
                {authButton}
            </div>
        )
    }
}

export default Home;