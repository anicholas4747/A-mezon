import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './searchbar/searchbar_container';
import AccountDropdown from './account_dropdown/account_dropdown_container';
import StudioDropdown from './studio_dropdown/studio_dropdown_container';
import LangToggle from './lang_toggle/lang_toggle_container';

class NavBar extends Component {
    constructor(props){
        super(props);
        this.randomAnimePage = this.randomAnimePage.bind(this);
    }

    randomAnimePage(e){
        e.preventDefault();
        // fetch all anime titles (non-restful action, make new action on frontend too), return json as an array then pick a random title to .then push the user to
        // same logic as search bar, only care about names until you actually search
        // search by studio and search by filters will give all details (limit 12) displaying grid like studio show page or block (default), make a toggle in ui slice of state to switch onclick of a button
        this.props.fetchAnimeTitles().then(() => {
            console.log(this.props.anime.allTitles);
            const titlesArray = this.props.anime.allTitles;
            const randomAnime = titlesArray[Math.floor(Math.random() * titlesArray.length)]; //sb an arr of objects (object.values(fetched anime))
            this.props.fetchOneAnime(randomAnime.title.split(" ").join("-"))
                .then(() => this.props.history.push(`/anime?${randomAnime.title.split(" ").join("-")}`));
        });  
    }
    
    render(){
        let profileLink = null;
        if (this.props.isLoggedIn){
            const profileLinkText = `${this.props.currentUser.username}'s Aにmezon.com`;
            profileLink = <Link to="/profile">{profileLinkText}</Link>;
        }

        return(
            <>
                <div className="nav-top-line" ref={this.myRef}>
                    <img id="sidebar" src={window.hamburgerMenu} alt="SideBar"/>
                    <Link to="/"><div id="logo-div"></div></Link>
                    
                    <img className="logo" src={window.logoWhite} alt="Amezon Logo"/>
                    <SearchBar />
                    <LangToggle/>
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