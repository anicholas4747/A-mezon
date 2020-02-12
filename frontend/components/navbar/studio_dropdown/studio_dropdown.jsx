import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class StudioDropdown extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        const studioName = e.target.innerText.split(" ").join("-");
        this.props.fetchStudio(studioName)
            .then(() => this.props.history.push(`/studio?${studioName}`));
    }

    componentDidMount(){
        this.props.fetchStudios();
    }

    render(){
        let studios = null;
        if (this.props.studios.all.length > 0) {
            studios = this.props.studios.all.map((studio) => {
                return (
                    <li key={studio.id}>
                        <a onClick={this.handleClick}>{studio.name}</a>
                    </li>
                )
            });
        }
        
        return (
            <div>
                <span id="search-by-studio-span">
                    <Link to="/s" id="search-by-studio">Search by Studio ▾</Link>
                    <ul id="search-by-studio-ul">{studios}</ul>
                </span>
                <div id="nav-bump">.</div>
            </div>
        )
    }
}

export default StudioDropdown;