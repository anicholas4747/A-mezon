import React, { Component } from 'react';

class AccountDropdown extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        if (Boolean(this.props.currentUser.id)){
            this.props.history.push("/profile");
        } else {
            this.props.history.push("/signin?verify_email");
        }
    }

    render(){
        let displayMessage = (Boolean(this.props.currentUser.id)) ? this.props.currentUser.username : "Sign in";
        let authSection = (Boolean(this.props.currentUser)) ? (
            null
        ) : (
            <div>
                <button>Sign in</button><br/>
                New customer? 
            </div>
        )

        return (
            <div id="account-dropdown">
                <span onClick={this.handleClick}>
                    <p>Hello, {displayMessage}</p>
                    <h4>Account & Lists ▾</h4>
                </span>
                <ul>

                </ul>
            </div>
        )
    }
}

export default AccountDropdown;