import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class StudioDropdown extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
    }

    handleClick(e){
        e.preventDefault();
        const studioName = e.target.innerText.split(" ").join("-");

        this.props.fetchStudio(studioName)
                .then(() => {
                    this.props.navLiClicked(true);
                    this.props.history.push(`/studio?${studioName}`);
                });
    }

    handleMouseOver(){
        this.props.navDropdown(true);
        this.props.navLiClicked(false);
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

        const ulClass = (this.props.liClicked) ? "search-by-studio-ul HIDDEN" : "search-by-studio-ul";
        
        if (this.props.language === "EN") {
            return (
                <div className="search-by-studio">
                    <span id="search-by-studio-span" onMouseOver={this.handleMouseOver} onMouseLeave={() => this.props.navDropdown(false)}>
                        <Link to="/s" id="search-by-studio">Search by Studio ▾</Link>
                        <ul className={ulClass}>{studios}</ul>
                    </span>
                    <div id="nav-bump">.</div>
                </div>
            )
            } else {
                return (
                    <div className="search-by-studio">
                        <span id="search-by-studio-span" onMouseOver={this.handleMouseOver} onMouseLeave={() => this.props.navDropdown(false)}>
                            <Link to="/s" id="search-by-studio">スタジオで探して ▾</Link>
                            <ul className={ulClass}>{studios}</ul>
                        </span>
                        <div id="nav-bump">.</div>
                    </div>
                )
            }
    }
}

export default StudioDropdown;