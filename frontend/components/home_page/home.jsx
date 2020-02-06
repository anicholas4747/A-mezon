import React, {Component} from 'react';
import { Link } from 'react-router-dom';

class Home extends Component {
    constructor(props){
        super(props)
    }

    render(){
        return (
            <div>
                <h1>Amezon Home Page</h1>
                <Link to="/login">Sign in</Link>

            </div>
        )
    }
}

export default Home;