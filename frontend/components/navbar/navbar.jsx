import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './searchbar/searchbar_container';
import AccountDropdown from './account_dropdown/account_dropdown_container';

class NavBar extends Component {
    constructor(props){
        super(props);
        this.randomAnimePage = this.randomAnimePage.bind(this);
    }

    randomAnimePage(e){
        e.preventDefault();
        const { anime } = this.props;
        const randomAnime = anime[Math.floor(Math.random()*anime.length)] //sb an arr of objects (object.values(fetched anime))
        this.props.history.push(`/${randomAnime.title.split(" ").join("-")}`);
    }
    render(){
        let profileLink = null;
        if (this.props.isLoggedIn){
            const profileLinkText = `${this.props.currentUser.username}'s Aにmezon.com`;
            profileLink = <Link to="/profile">{profileLinkText}</Link>;
        }

        let lang = "EN"; //add to state

        return(
            <>
                <div className="nav-top-line">
                    <img id="sidebar" src="https://i.ya-webdesign.com/images/hamburger-icon-white-png-1.png" alt="SideBar"/>
                    <Link to="/" className="logo"><img src="https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" alt="Amezon Logo"/></Link>
                    <SearchBar />
                    <Link to="/language-select" id="language-toggle">
                        {lang}
                        <div>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/f4/White_Globe_Icon.png/1200px-White_Globe_Icon.png" alt="" />
                            {"▾"}
                        </div>
                    </Link>
                    <AccountDropdown />
                    <Link to="/order-history" id="order-history">
                        <p>Returns</p>
                        <h4>& Orders</h4>
                    </Link>
                    <Link to="/cart" id="cart"><img src="https://mircenza.com/wp-content/uploads/2018/05/White_Cart_Icon.png" alt="cart"/></Link>
                </div>

                <div className="nav-bottom-line">
                    <Link to="/s" id="search-by-studio">Search by Studio ▾</Link>
                    {profileLink}
                    <Link to="/s" >Search by Filters</Link>
                    <a href="#" onClick={this.randomAnimePage}>Surprise Me!</a>
                </div>
            </>
        )
    }
}

export default NavBar;