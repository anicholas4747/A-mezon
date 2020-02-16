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
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleProfileClick = this.handleProfileClick.bind(this);
        this.handlePrimeClick = this.handlePrimeClick.bind(this);
    }

    randomAnimePage(e){
        e.preventDefault();
        // fetch all anime titles (non-restful action, make new action on frontend too), return json as an array then pick a random title to .then push the user to
        // same logic as search bar, only care about names until you actually search
        // search by studio and search by filters will give all details (limit 12) displaying grid like studio show page or block (default), make a toggle in ui slice of state to switch onclick of a button
        this.props.fetchAnimeTitles().then(() => {
            const titlesArray = this.props.anime.allTitles;
            const randomAnime = titlesArray[Math.floor(Math.random() * titlesArray.length)]; //sb an arr of objects (object.values(fetched anime))
            this.props.fetchOneAnime(randomAnime.title.split(" ").join("-"))
                .then(() => this.props.history.push(`/anime?${randomAnime.title.split(" ").join("-")}`));
        });  
    }

    handleProfileClick(e){
        e.preventDefault();
        const profileWDashes = this.props.currentUser.username.split(" ").join("-");
        this.props.fetchProfile(profileWDashes)
            .then(this.props.history.push(`/profile?${profileWDashes}`));
    }

    handleMouseOver() {
        this.props.navDropdown(true);
        this.props.navLiClicked(false);
    }

    handlePrimeClick(){
        this.props.navLiClicked(true);
    }
    
    render(){
        let profileLink = null;
        if (this.props.isLoggedIn){
            const profileLinkText = (this.props.language === "EN") ? `${this.props.currentUser.username}'s Aにmezon.com` : `${this.props.currentUser.username} の Aにmezon.com`;
            profileLink = <a onClick={this.handleProfileClick} id="accts-adotcom">{profileLinkText}</a>;
        }

        const hiddenEl = (this.props.liClicked) ? "HIDDEN" : null;
        
        if (this.props.language === "EN"){
            return (
                <nav>
                    <div className="nav-top-line" ref={this.myRef}>
                        <img id="sidebar" src={window.hamburgerMenu} alt="SideBar" />
                        <Link to="/"><div id="logo-div"></div></Link>

                        <img className="logo" src={window.logoWhite} alt="Amezon Logo" />
                        <SearchBar />
                        <LangToggle />
                        <AccountDropdown />
                        <a id="order-history">
                            <p>Returns</p>
                            <h4>& Orders</h4>
                        </a>
                        <div id="try-prime" onClick={this.handlePrimeClick} onMouseOver={this.handleMouseOver} onMouseLeave={() => this.props.navDropdown(false)}>
                            <Link to="/" id="prime">
                                {/* <p>.</p> */}
                                <h4>Try Prime ▾</h4>
                            </Link>
                            <ul className={hiddenEl}><li><Link to="/">Feature Coming Soon...</Link></li></ul>
                        </div>
                        <Link to="/cart" id="cart">
                            <h4>0</h4>
                            <img src={(this.props.language === "EN") ? window.cart : window.cartJP} alt="cart" />
                        </Link>
                    </div>

                    <div className="nav-bottom-line">
                        <StudioDropdown />
                        {profileLink}
                        <Link to="/s" >Search by Filters</Link>
                        <a href="#" onClick={this.randomAnimePage}>Surprise Me!</a>
                    </div>
                </nav>
            )
        } else {
            return (
                <nav>
                    <div className="nav-top-line" ref={this.myRef}>
                        <img id="sidebar" src={window.hamburgerMenu} alt="SideBar" />
                        <Link to="/"><div id="logo-div"></div></Link>

                        <img className="logo" src={window.logoWhite} alt="Amezon Logo" />
                        <SearchBar />
                        <LangToggle />
                        <AccountDropdown />
                        <a id="order-history">
                            <p>返品</p>
                            <h4>& 注文</h4>
                        </a>
                        <div id="try-prime" onClick={this.handlePrimeClick} onMouseOver={this.handleMouseOver} onMouseLeave={() => this.props.navDropdown(false)}>
                            <Link to="/" id="prime">
                                {/* <p>.</p> */}
                                <h4>プライムを ▾</h4>
                            </Link>
                            <ul className={hiddenEl}><li><Link to="/">もうすぐ来る...</Link></li></ul>
                        </div>
                        <Link to="/cart" id="cart">
                            <h4>0</h4>
                            <img src={(this.props.language === "EN") ? window.cart : window.cartJP} alt="cart" />
                        </Link>
                    </div>

                    <div className="nav-bottom-line">
                        <StudioDropdown />
                        {profileLink}
                        <Link to="/s" >フィルターで探して</Link>
                        <a href="#" onClick={this.randomAnimePage}>ランダムのを見せて!</a>
                    </div>
                </nav>
            )
        }
    }
}

export default NavBar;