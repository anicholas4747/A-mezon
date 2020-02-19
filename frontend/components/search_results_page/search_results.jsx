import React, { Component } from 'react';
import FilterOptions from './filter_options/filter_options_container';

class SearchResults extends Component{
    constructor(props){
        super(props);
        this.searchTerms = {
            title: "",
            genres: [],
            years: [],
            studios: []
        };
        this.handleAnimeClick = this.handleAnimeClick.bind(this);
        this.handleStudioClick = this.handleStudioClick.bind(this);
        this.handleGenreClick = this.handleGenreClick.bind(this);
        this.handleYearClick = this.handleYearClick.bind(this);
        this.handleModalOff = this.handleModalOff.bind(this);
    }

    handleModalOff(e){
        e.preventDefault();
        this.props.navLiClicked(true);
        this.props.navDropdown(false);
        this.props.searchDropdownHide(true);
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
        const searchGenre = e.target.text;
        this.props.searchAnime({ genres: [searchGenre] })
            .then(() => {
                this.searchTerms = {
                    title: "",
                    genres: [searchGenre],
                    years: [],
                    studios: [],
                    page: 1
                };
                this.props.history.push(`/s?genres=${searchGenre.split(" ").join("%20")}&page=1`);
                if (this.props.refPos.current !== null) {
                    this.props.refPos.current.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                }
            });
    }

    handleYearClick(e){
        e.preventDefault();
        const searchYear = e.target.text;
        this.props.searchAnime({ years: [searchYear] })
            .then(() => {
                this.searchTerms = {
                    title: "",
                    genres: [],
                    years: [searchYear],
                    studios: [],
                    page: 1
                };
                this.props.history.push(`/s?years=${searchYear.split(" ").join("%20")}&page=1`);
                if (this.props.refPos.current !== null) {
                    this.props.refPos.current.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                }
            });
    }

    componentDidMount(){
        this.props.navDropdown(false);
        this.props.fetchYears();
        if (this.props.refPos.current !== null) {
            this.props.refPos.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
        
        if (this.props.history.location.search.includes("=")) {
            //display relevant anime based on search term
            this.searchTerms = {
                title: "",
                genres: [],
                years: [],
                studios: [],
                page: 1
            };

            this.props.history.location.search.slice(1).split("&").forEach((term) => {
                let kv = term.split("=");
                if (kv[0] === "years" || kv[0] === "genres" || kv[0] === "studios"){
                    this.searchTerms[kv[0]].push(kv[1]);
                } else {
                    this.searchTerms[kv[0]] = kv[1];
                }
            });
            // implement search by title, genre, studio, and release year
            this.props.searchAnime(this.searchTerms);
        }

    }

    render(){
        const modalToggle = ((this.props.shouldGreyOut) ? "modal-on" : "modal-off");

        this.searchTerms = {
            title: "",
            genres: [],
            years: [],
            studios: [],
            page: 1
        };

        this.props.history.location.search.slice(1).split("&").forEach((term) => {
            let kv = term.split("=");
            if (kv[0] === "years" || kv[0] === "genres" || kv[0] === "studios") {
                this.searchTerms[kv[0]].push(kv[1]);
            } else {
                this.searchTerms[kv[0]] = kv[1];
            }
        });

        if (this.props.history.location.search.includes("all")) {
            this.searchTerms.title = "";
        }

        let fullSearch = "";
        if (this.searchTerms.title !== "") fullSearch = fullSearch.concat(` for "${this.searchTerms.title}"`);
        if (this.searchTerms.genres.length > 0) fullSearch = fullSearch.concat(` in these genres: ${this.searchTerms.genres.join(", ").split("%20").join(", ")}`);
        if (this.searchTerms.years.length > 0) fullSearch = fullSearch.concat(` in these years: ${this.searchTerms.years.join(", ").split("%20").join(", ")}`);
        if (this.searchTerms.studios.length > 0) fullSearch = fullSearch.concat(` by these studios: ${this.searchTerms.studios.join(", ").split("%20").join(", ")}`);

        let pageChange = null;
        
        if (this.props.results.length !== 0 && this.props.results.length > 10 && this.searchTerms.page !== "1") {
            pageChange = (
            <div id="page-change">
                <a>← Previous</a>
                <button>Next →</button>
            </div>
            )
        } else if (this.props.results.length !== 0 && this.props.results.length > 10 && this.searchTerms.page === "1") {
            pageChange = (
                <div id="page-change">
                    <button>Next →</button>
                </div>
            )
        } else if (this.props.results.length !== 0 && this.props.results.length < 10 && this.searchTerms.page !== "1") {
            pageChange = (
                <div id="page-change">
                    <a>← Previous</a>
                </div>
            )
        };
        
        if(this.props.results.length === 0) {
            return (
                <div className="search-results">
                    <div className={modalToggle} onClick={this.handleModalOff}>.</div>
                    <span>No results to display <p id="search-term">{fullSearch}</p></span>
                    <FilterOptions />
                    <ul id="results-ul">
                        {pageChange}
                        <h1>Sorry,  no results to display . . .</h1>
                        {pageChange}
                    </ul>
                </div>
            )
        } else {
            // clicking on the price, title, or img take you to the show page
            const results = this.props.results.slice(0,11).map((anime) => {
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

            const total = this.props.results.length + ((parseInt(this.searchTerms.page) - 1) * 10);
            const numShownStart = (((parseInt(this.searchTerms.page) - 1) * 10) + 1);
            const numShownEnd = (total > (numShownStart + 10)) ? (numShownStart + 10) : total;

            return (
                <div className="search-results">
                    <div className={modalToggle} onClick={this.handleModalOff}>.</div>
                    <span>Displaying {numShownStart}-{numShownEnd} of {total} result(s) <p id="search-term">{fullSearch}</p></span>
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