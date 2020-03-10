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
        this.props.searchDropdownHide(true);
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
        let acctOptionsEN = (Boolean(this.props.currentUser.id)) ? (
            <span>
                {/* <div id="your-lists"> */}
                    {/* <h3>Your Lists</h3>
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
                    <Link to="/">AにmezonSmile Charity Lists</Link>
                    <Link to="/">Pantry Lists</Link>
                    <Link to="/">Your Hearts</Link>
                    <Link to="/">Explore Idea Lists</Link>
                    <Link to="/">Explore Showroom</Link>
                    <Link to="/">Discover</Link>
                    <Link to="/">Take the Home Style Quiz</Link> */}
                {/* </div> */}
            
                <div id="your-acct">
                    <h3>Your Account</h3>
                    <li id="ok">
                        <Link id="ok" onClick={() => this.props.navLiClicked(true)} to={`/profile?${this.props.currentUser.username.split(" ").join("-")}`}>Your Account</Link>
                    </li>
                    {/* <li>
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
                        <Link to="/">Your Aにmezon Credit Cards</Link>
                        <Link to="/">Your Content and Devices</Link>
                        <Link to="/">Your Aにmezon Photos</Link>
                        <Link to="/">Your Aにmezon Drive</Link>
                        <Link to="/">Your Prime Video</Link>
                        <Link to="/">Your Watchlist</Link>
                        <Link to="/">Your Video Purchases & Rentals</Link>
                        <Link to="/">Your Android Apps & Devices</Link>
                    </li> */}
                    <a id="ok" onClick={this.signout}>Sign Out</a>
                </div>
            </span>
        ) : (
                <span>
                    {/* <div id="your-lists"> */}
                        {/* <h3>Your Lists</h3>
                        <li>
                            <Link to="/">Wish List</Link>
                            <Link to="/">Shopping List</Link>
                        </li>
                        <li>
                            <Link to="/">Create a List</Link>
                            <Link to="/">Find a Gift</Link>
                            <Link to="/">Save Items from the Web</Link>
                            <Link to="/">Wedding Registry</Link>
                            <Link to="/">Baby Registry</Link>
                            <Link to="/">Friends & Family Gifting</Link>
                            <Link to="/">AにmezonSmile Charity Lists</Link>
                            <Link to="/">Pantry Lists</Link>
                            <Link to="/">Your Hearts</Link>
                            <Link to="/">Explore Idea Lists</Link>
                            <Link to="/">Explore Showroom</Link>
                            <Link to="/">Discover</Link>
                            <Link to="/">Take the Home Style Quiz</Link>
                        </li> */}
                    {/* </div> */}

                    <div id="your-acct">
                        <h3 id="ok">Your Account</h3>
                        <li id="ok">
                            <Link to={`/signin?verify_email`}>Your Account</Link>
                        </li>
                        {/* <li>
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
                            <Link to="/">Your Aにmezon Credit Cards</Link>
                            <Link to="/">Your Content and Devices</Link>
                            <Link to="/">Your Aにmezon Photos</Link>
                            <Link to="/">Your Aにmezon Drive</Link>
                            <Link to="/">Your Prime Video</Link>
                            <Link to="/">Your Watchlist</Link>
                            <Link to="/">Your Video Purchases & Rentals</Link>
                            <Link to="/">Your Android Apps & Devices</Link>
                        </li> */}
                    </div>
                </span>
        );
        let acctOptionsJP = (Boolean(this.props.currentUser.id)) ? (
            <span>
                {/* <div id="your-lists"> */}
                    {/* <h3>リスト</h3>
                    <li>
                        <Link to="/">新しいリストを作成する</Link>
                        <Link to="/">ギフトアイデア</Link>
                        <Link to="/">ベビーレジストリ</Link>
                        <Link to="/">ショールーム</Link>
                    </li> */}
                {/* </div> */}
            
                <div id="your-acct">
                    <h3>アカウントサービス</h3>
                    <li id="ok">
                        <Link id="ok" onClick={() => this.props.navLiClicked(true)} to={`/profile?${this.props.currentUser.username.split(" ").join("-")}`}>アカウントサービス</Link>
                    </li>
                    {/* <li>
                        <Link to="/">注文履歴</Link>
                        <Link to="/">バーチャルダッシュ</Link>
                        <Link to="/">ほしい物リスト</Link>
                        <Link to="/">おすすめ商品</Link>
                        <Link to="/">ご利用中の定期おトク便の変更・停止</Link>
                        <Link to="/">メンバーシップおよび購読</Link>
                        <Link to="/">Aにmezonプライム会員情報</Link>
                        <Link to="/">Aにmezonビジネス (法人購買・請求書払い・法人割引)</Link>
                        <Link to="/">コンテンツと端末の管理</Link>
                        <Link to="/">お客様のAにmezon Drive</Link>
                        <Link to="/">ウォッチリスト</Link>
                        <Link to="/">ビデオの購入とレンタル</Link>
                        <Link to="/">マンガ本棚</Link>
                        <Link to="/">ゲーム&PCソフトダウンロードライブラリ</Link>
                        <Link to="/">アプリライブラリとデバイスの管理</Link>
                    </li> */}
                    <a id="ok" onClick={this.signout}>ログアウト</a>
                </div>
            </span>
        ) : (
                <span>
                    {/* <div id="your-lists"> */}
                        {/* <h3>リスト</h3>
                        <Link to="/">新しいリストを作成する</Link>
                        <Link to="/">ギフトアイデア</Link>
                        <Link to="/">ベビーレジストリ</Link>
                        <Link to="/">ショールーム</Link> */}
                    {/* </div> */}

                    <div id="your-acct">
                        <h3>アカウントサービス</h3>
                        <li id="ok">
                            <Link to={`/signin?verify_email`}>アカウントサービス</Link>
                        </li>
                        {/* <li>
                            <Link to="/">注文履歴</Link>
                            <Link to="/">バーチャルダッシュ</Link>
                            <Link to="/">ほしい物リスト</Link>
                            <Link to="/">おすすめ商品</Link>
                            <Link to="/">ご利用中の定期おトク便の変更・停止</Link>
                            <Link to="/">メンバーシップおよび購読</Link>
                            <Link to="/">Aにmezonプライム会員情報</Link>
                            <Link to="/">Aにmezonビジネス (法人購買・請求書払い・法人割引)</Link>
                            <Link to="/">コンテンツと端末の管理</Link>
                            <Link to="/">お客様のAにmezon Drive</Link>
                            <Link to="/">ウォッチリスト</Link>
                            <Link to="/">ビデオの購入とレンタル</Link>
                            <Link to="/">マンガ本棚</Link>
                            <Link to="/">ゲーム&PCソフトダウンロードライブラリ</Link>
                            <Link to="/">アプリライブラリとデバイスの管理</Link>
                        </li> */}
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
                        {acctOptionsEN}
                    </ul>
                </div>
            )
        } else {
            if (Boolean(this.props.currentUser.id)) {
                return (
                    <div id="account-dropdown" onClick={() => this.props.navLiClicked(true)} onMouseOver={this.handleMouseOver} onMouseLeave={() => this.props.navDropdown(false)}>
                        <span id={acctLang} onClick={this.handleClick}>
                            <p>{displayMessage}さん</p>
                            <h4>アカウント&リスト ▾</h4>
                        </span>
                        <ul id="account-dropdown-ul" className={ulClass}>
                            {authSection}
                            {acctOptionsJP}
                        </ul>
                    </div>
                )
            } else {
                    return (
                        <div id="account-dropdown" onClick={() => this.props.navLiClicked(true)} onMouseOver={this.handleMouseOver} onMouseLeave={() => this.props.navDropdown(false)}>
                            <span id={acctLang} onClick={this.handleClick}>
                                <p>こんにちは、ログイン</p>
                                <h4>アカウント&リスト ▾</h4>
                            </span>
                            <ul id="account-dropdown-ul" className={ulClass}>
                                {authSection}
                                {acctOptionsJP}
                            </ul>
                        </div>
                    )

            }
        }
    }
}

export default AccountDropdown;