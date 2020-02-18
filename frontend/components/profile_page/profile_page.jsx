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
        const emailShow = (this.props.user.username === this.props.currentUser.username) ? <h3>Email: {email}</h3> : null;
        const editProfileButton = (this.props.user.username === this.props.currentUser.username) ? <button onClick={this.handleProfClick}>Edit your profile</button> : null;
        const langButton = (this.props.user.username === this.props.currentUser.username) ? <button onClick={this.handleLangClick} id="change-lang-settings">Change language settings</button> : null;

        return (
            <div className="profile-page">
                <div className={modalToggle}>.</div>

                <section id="profile-info">
                    <img src={window.profilePic}/>
                    <div>
                        <h2>{username}</h2>
                        {emailShow}
                        <h4>Aにmezon Member since: {new Date(created_at).toDateString()}</h4>
                    </div>
                        {langButton}
                        {editProfileButton}
                </section>
                <Reviews match={this.props.match} reviews={reviews} refPos={this.props.refPos} />
                
            </div>
        )
    }
}

export default ProfilePage;