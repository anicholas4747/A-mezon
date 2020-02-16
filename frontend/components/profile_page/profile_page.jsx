import React, { Component } from 'react';

class ProfilePage extends Component{
    constructor(props){
        super(props);

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
        if(this.props.user.id === null) return <div>Loading...</div>

        const modalToggle = ((this.props.shouldGreyOut) ? "modal-on" : "modal-off");


        return(
            <div className="outermost">
                <div className={modalToggle}>.</div>

                <h1>Profile Page</h1>
            </div>
        )
    }
}

export default ProfilePage;