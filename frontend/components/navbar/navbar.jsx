import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './searchbar/searchbar_container';
import AccountDropdown from './account_dropdown/account_dropdown_container';
import StudioDropdown from './studio_dropdown/studio_dropdown_container';

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

        let lang = "EN"; //add toggle to state

        return(
            <>
                <div className="nav-top-line">
                    <img id="sidebar" src={window.hamburgerMenu} alt="SideBar"/>
                    <Link to="/"><div id="logo-div"></div></Link>
                    
                    <img className="logo" src={window.logoWhite} alt="Amezon Logo"/>
                    <SearchBar />
                    <Link to="/language-select" id="language-toggle">
                        {lang}
                        <div>
                            <img src={window.globe} alt="" />
                            {"▾"}
                        </div>
                    </Link>
                    <AccountDropdown />
                    <Link to="/order-history" id="order-history">
                        <p>Returns</p>
                        <h4>& Orders</h4>
                    </Link>
                    <Link to="/" id="prime">
                        <p>.</p>
                        <h4>Try Prime ▾</h4>
                    </Link>
                    <Link to="/cart" id="cart">
                        <h4>0</h4>
                        <img src={window.cart} alt="cart"/>
                    </Link>
                </div>

                <div className="nav-bottom-line">
                    <StudioDropdown />
                    {profileLink}
                    <Link to="/s" >Search by Filters</Link>
                    <a href="#" onClick={this.randomAnimePage}>Surprise Me!</a>
                </div>
            </>
        )
    }
}

export default NavBar;