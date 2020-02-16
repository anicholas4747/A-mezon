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
            .then(() => (this.props.history.push("/signin?verify_email")));
    }

    componentDidMount(){
        this.props.navDropdown(false);
    }

    render(){
        const modalToggle = ((this.props.shouldGreyOut) ? "modal-on" : "modal-off");

        return (
            <div className="outermost">
                <div className={modalToggle}>.</div>
                <h1>Aにmezon Home Page</h1>
            </div>
        )
    }
}

export default Home;