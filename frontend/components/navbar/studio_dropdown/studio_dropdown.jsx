import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class StudioDropdown extends Component{
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.handleMouseOver = this.handleMouseOver.bind(this);
        this.handleSearchAll = this.handleSearchAll.bind(this);
    }

    handleSearchAll(e) {
        e.preventDefault();
        this.props.searchAnime({ page: "1" })
            .then(() => {
                this.props.history.push("/s?all&page=1");
                if (this.props.refPos.current !== null) {
                    this.props.refPos.current.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                }
            });
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
        this.props.searchDropdownHide(true);
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
                        <a onClick={this.handleSearchAll} id="search-by-studio">Search by Studio ▾</a>
                        <ul className={ulClass}>{studios}</ul>
                    </span>
                    <div id="nav-bump">.</div>
                </div>
            )
            } else {
                return (
                    <div className="search-by-studio">
                        <span id="search-by-studio-span" onMouseOver={this.handleMouseOver} onMouseLeave={() => this.props.navDropdown(false)}>
                            <a onClick={this.handleSearchAll} id="search-by-studio">スタジオで探して ▾</a>
                            <ul className={ulClass}>{studios}</ul>
                        </span>
                        <div id="nav-bump">.</div>
                    </div>
                )
            }
    }
}

export default StudioDropdown;