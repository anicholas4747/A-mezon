import React, { Component } from 'react';
import Reviews from '../product_page/reviews/reviews';

class ProfilePage extends Component{
    constructor(props){
        super(props);
        this.handleProfClick = this.handleProfClick.bind(this);
        this.handleLangClick = this.handleLangClick.bind(this);
    }

    handleProfClick(e){
        e.preventDefault();
        this.props.history.push("/profile/edit-profile?verify_password");
    }

    handleLangClick(e){
        e.preventDefault();
        this.props.history.push("/language-select");
    }

    componentDidMount() {
        if (this.props.refPos.current !== null) {
            this.props.refPos.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
        this.props.fetchProfile(this.props.history.location.search.slice(1));
    }

    render(){
        if(this.props.user.id === null) return <h1>Loading...</h1>

        const modalToggle = ((this.props.shouldGreyOut) ? "modal-on" : "modal-off");
        
        const {username, email, created_at, reviews} = this.props.user;
        const emailShow = (this.props.user.username === this.props.currentUser.username) ? <div><h3>Email</h3> <h3 id="h3-val">{email}</h3></div> : null;
        const editProfileButton = (this.props.user.username === this.props.currentUser.username) ? <button onClick={this.handleProfClick}>Edit your profile</button> : null;
        const langSection = (this.props.user.username === this.props.currentUser.username) ? (
            <span id="profile-lang">
                <h3>Current Language</h3>
                <h3 id="h3-val">{(this.props.lang === "EN") ? "English" : "Japanese"}</h3>
                <br/><br/>
                <button onClick={this.handleLangClick} id="change-lang-settings">Change language preferences</button>
            </span>
        ) : null;

        return (
            <div className="profile-page">
                <div className={modalToggle}>.</div>
                <section id="grey-box">.</section>
                <section id="profile-info">
                    <img src={window.profilePic}/>
                    <div>
                        <h2>{username}</h2>
                    </div>
                </section>
                <section>
                    <section id="user-info">
                        <span id="about">
                            <h2>About</h2>
                            <h3>Aにmezon Member since</h3>
                            <h3 id="h3-val">{new Date(created_at).toDateString()}</h3>
                            {emailShow}
                            <br/><br/>
                            {editProfileButton}
                        </span>
                        {langSection}
                    </section>
                    <span id="revs">
                        <Reviews match={this.props.match} reviews={reviews} refPos={this.props.refPos} />
                    </span>
                </section>
                
            </div>
        )
    }
}

export default ProfilePage;