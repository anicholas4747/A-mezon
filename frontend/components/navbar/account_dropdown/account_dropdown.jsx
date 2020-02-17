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
            const profileWDashes = this.props.currentUser.username.split(" ").join("-");
            this.props.fetchProfile(profileWDashes)
                .then(this.props.history.push(`/profile?${profileWDashes}`));
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
            null
        ) : (
            <li>
                <div>
                    <button onClick={this.handleClick}>Sign in</button><br/>
                    <p>New customer? <Link to="/register" id="start-here">Start here.</Link></p>
                </div>
            </li>
        )
        let acctOptions = (Boolean(this.props.currentUser.id)) ? (
            <span>
                <div id="your-lists">
                    <h3>Your Lists</h3>
                    <li>
                        <Link to="/">Wish List</Link>
                        <Link to="/">Shopping List</Link>
                    </li>
                    <Link to="/">Create a List</Link>
                    <Link to="/">Find a Gift</Link>
                    <Link to="/">Save Items from the Web</Link>
                    <Link to="/">Wedding Registry</Link>
                    <Link to="/">Baby Registry</Link>
                    <Link to="/">Friends & Family Gifting</Link>
                    <Link to="/">AmazonSmile Charity Lists</Link>
                    <Link to="/">Pantry Lists</Link>
                    <Link to="/">Your Hearts</Link>
                    <Link to="/">Explore Idea Lists</Link>
                    <Link to="/">Explore Showroom</Link>
                    <Link to="/">Discover</Link>
                    <Link to="/">Take the Home Style Quiz</Link>
                </div>
            
                <div id="your-acct">
                    <h3>Your Account</h3>
                    <Link id="ok" onClick={() => this.props.navLiClicked(true)} to={`/profile?${this.props.currentUser.username.split(" ").join("-")}`}>Your Account</Link>
                    <Link to="/">Your Orders</Link>
                    <Link to="/">Your Lists</Link>
                    <Link to="/">Your Recommendations</Link>
                    <Link to="/">Your Subscribe & Save Items</Link>
                    <Link to="/">Memberships & Subscriptions</Link>
                    <Link to="/">Your Service Requests</Link>
                    <Link to="/">Your Prime Membership</Link>
                    <Link to="/">Your Garage</Link>
                    <Link to="/">Your Fanshop</Link>
                    <Link to="/">Your Pets</Link>
                    <Link to="/">Start a Selling Account</Link>
                    <Link to="/">Register for a Business Account</Link>
                    <Link to="/">Your Amazon Credit Cards</Link>
                    <Link to="/">Your Content and Devices</Link>
                    <Link to="/">Your Music Library</Link>
                    <Link to="/">Your Amazon Photos</Link>
                    <Link to="/">Your Amazon Drive</Link>
                    <Link to="/">Your Prime Video</Link>
                    <Link to="/">Your Kindle Unlimited</Link>
                    <Link to="/">Your Watchlist</Link>
                    <Link to="/">Your Video Purchases & Rentals</Link>
                    <Link to="/">Your Android Apps & Devices</Link>
                    <a id="ok" onClick={this.signout}>Sign Out</a>
                </div>
            </span>
        ) : (
                <span>
                    <div id="your-lists">
                        <h3>Your Lists</h3>
                        <li>
                            <Link to="/">Wish List</Link>
                            <Link to="/">Shopping List</Link>
                        </li>
                        <Link to="/">Create a List</Link>
                        <Link to="/">Find a Gift</Link>
                        <Link to="/">Save Items from the Web</Link>
                        <Link to="/">Wedding Registry</Link>
                        <Link to="/">Baby Registry</Link>
                        <Link to="/">Friends & Family Gifting</Link>
                        <Link to="/">AmazonSmile Charity Lists</Link>
                        <Link to="/">Pantry Lists</Link>
                        <Link to="/">Your Hearts</Link>
                        <Link to="/">Explore Idea Lists</Link>
                        <Link to="/">Explore Showroom</Link>
                        <Link to="/">Discover</Link>
                        <Link to="/">Take the Home Style Quiz</Link>
                    </div>

                    <div id="your-acct">
                        <h3>Your Account</h3>
                        <Link to={`/signin?verify_email`}>Your Account</Link>
                        <Link to="/">Your Orders</Link>
                        <Link to="/">Your Lists</Link>
                        <Link to="/">Your Recommendations</Link>
                        <Link to="/">Your Subscribe & Save Items</Link>
                        <Link to="/">Memberships & Subscriptions</Link>
                        <Link to="/">Your Service Requests</Link>
                        <Link to="/">Your Prime Membership</Link>
                        <Link to="/">Your Garage</Link>
                        <Link to="/">Your Fanshop</Link>
                        <Link to="/">Your Pets</Link>
                        <Link to="/">Start a Selling Account</Link>
                        <Link to="/">Register for a Business Account</Link>
                        <Link to="/">Your Amazon Credit Cards</Link>
                        <Link to="/">Your Content and Devices</Link>
                        <Link to="/">Your Music Library</Link>
                        <Link to="/">Your Amazon Photos</Link>
                        <Link to="/">Your Amazon Drive</Link>
                        <Link to="/">Your Prime Video</Link>
                        <Link to="/">Your Kindle Unlimited</Link>
                        <Link to="/">Your Watchlist</Link>
                        <Link to="/">Your Video Purchases & Rentals</Link>
                        <Link to="/">Your Android Apps & Devices</Link>
                    </div>
                </span>
        );
        const acctLang = (this.props.language === "EN") ? "en-acct" : "jp-acct";

        const ulClass = (this.props.liClicked) ? "HIDDEN" : null;
        if (this.props.language === "EN") {
            return (
                <div id="account-dropdown" onClick={() => this.props.navLiClicked(true)} onMouseOver={this.handleMouseOver} onMouseLeave={() => this.props.navDropdown(false)}>
                    <span id={acctLang} onClick={this.handleClick}>
                        <p>Hello, {displayMessage}</p>
                        <h4>Account & Lists ▾</h4>
                    </span>
                    <ul id="account-dropdown-ul" className={ulClass}>
                        {authSection}
                        {acctOptions}
                    </ul>
                </div>
            )
        } else {
            return (
                <div id="account-dropdown" onClick={() => this.props.navLiClicked(true)} onMouseOver={this.handleMouseOver} onMouseLeave={() => this.props.navDropdown(false)}>
                    <span id={acctLang} onClick={this.handleClick}>
                        <p>ようこそ、{displayMessage}</p>
                        <h4>アカウント&リスト ▾</h4>
                    </span>
                    <ul id="account-dropdown-ul" className={ulClass}>
                        {authSection}
                        {acctOptions}
                    </ul>
                </div>
            )
        }
    }
}

export default AccountDropdown;