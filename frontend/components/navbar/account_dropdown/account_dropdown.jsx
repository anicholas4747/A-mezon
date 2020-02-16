import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AccountDropdown extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.signout = this.signout.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
    }

    signout(e) {
        e.preventDefault();
        this.props.logout()
            .then(() => (this.props.history.push("/signin?verify_email")));
    }

    handleClick(e){
        e.preventDefault();
        if (Boolean(this.props.currentUser.id)){
            this.props.history.push(`/profile?${this.props.currentUser.username}`);
        } else {
            this.props.history.push("/signin?verify_email");
        }
    }

    handleMouseOver() {
        this.props.navDropdown(true);
        this.props.navLiClicked(false);
    }

    render(){
        let displayMessage = (Boolean(this.props.currentUser.id)) ? this.props.currentUser.username : "Sign in";
        let authSection = (Boolean(this.props.currentUser.id)) ? (
            <a onClick={this.signout}>Sign Out</a>
        ) : (
            <div>
                <button onClick={this.handleClick}>Sign in</button><br/>
                New customer? <Link to="/register">Start here.</Link>
            </div>
        )

        const acctLang = (this.props.language === "EN") ? null : "jp-acct";

        if (this.props.language === "EN") {
            return (
                <div id="account-dropdown" onMouseOver={this.handleMouseOver} onMouseLeave={() => this.props.navDropdown(false)}>
                    <span onClick={this.handleClick}>
                        <p>Hello, {displayMessage}</p>
                        <h4>Account & Lists ▾</h4>
                    </span>
                    <ul id="account-dropdown-ul">
                        <li>{authSection}</li>
                    </ul>
                </div>
            )
        } else {
            return (
                <div id="account-dropdown" onMouseOver={this.handleMouseOver} onMouseLeave={() => this.props.navDropdown(false)}>
                    <span id={acctLang} onClick={this.handleClick}>
                        <p>こんにちは、{displayMessage}</p>
                        <h4>アカウント&リスト ▾</h4>
                    </span>
                    <ul id="account-dropdown-ul">
                        <li>{authSection}</li>
                    </ul>
                </div>
            )
        }
    }
}

export default AccountDropdown;