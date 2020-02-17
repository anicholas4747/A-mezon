import React, { Component } from 'react';
import Reviews from '../product_page/reviews/reviews';

class ProfilePage extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        this.props.history.push("/profile/edit-profile");
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
        const editProfileButton = (this.props.user.username === this.props.currentUser.username) ? <button onClick={this.handleClick}>Edit your profile</button> : null;

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
                        {editProfileButton}
                </section>
                <Reviews match={this.props.match} reviews={reviews} refPos={this.props.refPos} />
                
            </div>
        )
    }
}

export default ProfilePage;