import React, { Component } from 'react';

class AnimeShow  extends Component{
    constructor(props){
        super(props);
    }

    render(){
        const modalToggle = ((this.props.shouldGreyOut) ? "modal-on" : "modal-off");

        return (
            <div>
                <div className={modalToggle}>.</div>
                <h1>Anime Show Page</h1>
            </div>
        )
    }
}

export default AnimeShow;