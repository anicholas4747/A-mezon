import React, { Component } from 'react';
import FilterOptions from './filter_options/filter_options_container';

class SearchResults extends Component{
    constructor(props){
        super(props);
        this.searchTerms = {};
        this.handleAnimeClick = this.handleAnimeClick.bind(this);
        this.handleStudioClick = this.handleStudioClick.bind(this);
        this.handleGenreClick = this.handleGenreClick.bind(this);
        this.handleYearClick = this.handleYearClick.bind(this);
    }

    handleAnimeClick(e){
        e.preventDefault();
        this.props.history.push(`/anime?${e.target.textContent.split(" ").join("-")}`);
    }

    handleStudioClick(e){
        e.preventDefault();
        this.props.history.push(`/studio?${e.target.textContent.split(" ").join("-")}`);
    }

    handleGenreClick(e){
        e.preventDefault();

    }

    handleYearClick(e){
        e.preventDefault();

    }

    componentDidMount(){
        this.props.navDropdown(false);
        if (this.props.refPos.current !== null) {
            this.props.refPos.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
        
        if(this.props.history.location.search.length === 0){
            //display all anime (limit 10)
            this.props.searchAllAnime(1);
        } else if (this.props.history.location.search.includes("=")) {
            debugger
            //display relevant anime based on search term
            this.props.history.location.search.slice(1).split("&").forEach((term) => {
                let kv = term.split("=");
                this.searchTerms[kv[0]] = kv[1];
            });
            debugger
            // implement search by title, genre, studio, and release year
            this.props.searchAnime(this.searchTerms);
        }

    }

    render(){
        const modalToggle = ((this.props.shouldGreyOut) ? "modal-on" : "modal-off");

        let pageChange = null;
        
        if (this.props.results.length !== 0 && this.searchTerms.page !== 1) {
            pageChange = (
            <div id="page-change">
                <a>← Previous</a>
                <button>Next →</button>
            </div>
            )
        } else if (this.props.results.length !== 0 && this.searchTerms.page === 1) {
            pageChange = (
                <div id="page-change">
                    <button>Next →</button>
                </div>
            )
        };

        if(this.props.results.length === 0) {
            return (
                <div className="search-results">
                    <div className={modalToggle}>.</div>
                    <span>Displaying X-Y of Z results for <p id="search-term">"searchTerm"</p></span>
                    <FilterOptions />
                    <ul id="results-ul">
                        {pageChange}
                        <h1>No results to display</h1>
                        {pageChange}
                    </ul>
                </div>
            )
        } else {
            // clicking on the price, title, or img take you to the show page
            const results = this.props.results.map((anime) => {
                return (
                    <li key={`${anime.title}uwu${anime.price}`}>
                        <img onClick={() => this.props.history.push(`/anime?${anime.title.split(" ").join("-")}`)} src={window.animePH} />
                        <span>
                            <h3 onClick={this.handleAnimeClick}>{anime.title}</h3>
                            <h4>by <a onClick={this.handleStudioClick}>{anime.studio}</a></h4>
                            <h5 onClick={() => this.props.history.push(`/anime?${anime.title.split(" ").join("-")}`)}>${anime.price.toFixed(2)}</h5>
                            <h4>Genre: <a onClick={this.handleGenreClick}>{anime.genre}</a></h4>
                            <h4>Release Year: <a onClick={this.handleYearClick}>{anime.release_year}</a></h4>
                            <p>FREE Shipping by Aにmezon</p>
                        </span>
                    </li>
                )
            });

            return (
                <div className="search-results">
                    <div className={modalToggle}>.</div>
                    <span>Displaying X-Y of Z results for <p id="search-term">"searchTerm"</p></span>
                    <FilterOptions />
                    <ul id="results-ul">
                        {pageChange}
                        {results}
                        {pageChange}
                    </ul>
                </div>
            )
        }
    }
}

export default SearchResults;