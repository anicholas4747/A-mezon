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
        this.beginSearch = this.beginSearch.bind(this);

        this.handleAnimeClick = this.handleAnimeClick.bind(this);
        this.handleStudioClick = this.handleStudioClick.bind(this);
        this.handleGenreClick = this.handleGenreClick.bind(this);
        this.handleYearClick = this.handleYearClick.bind(this);

        this.handlePrevious = this.handlePrevious.bind(this);
        this.handleNext = this.handleNext.bind(this);
        this.handleFirst = this.handleFirst.bind(this);
        this.handleLast = this.handleLast.bind(this);

        this.handleModalOff = this.handleModalOff.bind(this);
        this.scrollToTop = this.scrollToTop.bind(this);
    }

    handleModalOff(e){
        e.preventDefault();
        this.props.navLiClicked(true);
        this.props.navDropdown(false);
        this.props.searchDropdownHide(true);
    }

    scrollToTop(){
        if (this.props.refPos.current !== null) {
            this.props.refPos.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    }

    beginSearch(){
        if (this.props.history.location.search.includes("=")) {
            //display relevant anime based on search term
            this.searchTerms = {
                title: "",
                genres: [],
                years: [],
                studios: []
            };

            this.props.history.location.search.slice(1).split("&").forEach((term) => {
                let kv = term.split("=");
                if (kv[0] === "years" || kv[0] === "genres" || kv[0] === "studios") {
                    this.searchTerms[kv[0]].push(kv[1]);
                } else {
                    this.searchTerms[kv[0]] = kv[1];
                }
            });
            this.searchTerms.page = 1; // always get full results since render handles which anime to display
            // implement search by title, genre, studio, and release year
            this.props.searchAnime(this.searchTerms);
        }
        this.scrollToTop();
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

                // reset filter values 
                // aka CLEAR THEM IF GENRE CLICK, RESTRICTS SEARCH IF THERE ARE 2+ GENRES ON AN ANIME
                const newFilters = [{ genres: searchGenre }];
                this.props.preloadFilters(newFilters);
                this.props.history.push(`/s?genres=${searchGenre.split(" ").join("%20")}&page=1`);
                this.scrollToTop();
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

                // set filter values
                // aka SET TO THE ONE YEAR THAT WAS CLICKED
                const newFilters = [{years: searchYear}];
                this.props.preloadFilters(newFilters);
                this.props.history.push(`/s?years=${searchYear.split(" ").join("%20")}&page=1`);
                this.scrollToTop();
            });
    }

    handleFirst(e){
        e.preventDefault();
        let pathParts = this.props.history.location.search.split("page=");
        let newPage = (1).toString();
        let newPath = pathParts[0].concat("page=", newPage);
    
        this.props.history.push(`/s${newPath}`);
        this.beginSearch();
    }

    handleLast(e){
        e.preventDefault();
        let pathParts = this.props.history.location.search.split("page=");
        let newPageNum = (this.props.results.length % 10 > 0) ? (parseInt(this.props.results.length / 10) + 1) : (parseInt(this.props.results.length / 10));
        let newPage = (newPageNum).toString();
        let newPath = pathParts[0].concat("page=", newPage);
    
        this.props.history.push(`/s${newPath}`);
        this.beginSearch();
    }

    handlePrevious(e){
        e.preventDefault();
        let pathParts = this.props.history.location.search.split("page=");
        let newPage = (parseInt(pathParts[1]) - 1).toString();
        let newPath = pathParts[0].concat("page=", newPage);
    
        this.props.history.push(`/s${newPath}`);
        this.beginSearch();
    }

    handleNext(e){
        e.preventDefault();
        let pathParts = this.props.history.location.search.split("page=");
        let newPage = (parseInt(pathParts[1]) + 1).toString();
        let newPath = pathParts[0].concat("page=", newPage);
        
        this.props.history.push(`/s${newPath}`);
        this.beginSearch();
    }

    componentDidMount(){
        this.props.navDropdown(false);
        this.props.fetchYears();
        this.scrollToTop();
        this.beginSearch();
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

        if (this.props.history.location.search.includes("all") && !this.searchTerms.title.includes("all")) {
            this.searchTerms.title = "";
        }

        let fullSearch = "";
        if (this.searchTerms.title !== "") fullSearch = fullSearch.concat(` for "${this.searchTerms.title.split("-").join(" ")}"`);
        if (this.searchTerms.genres.length > 0) fullSearch = fullSearch.concat(` in these genres: ${this.searchTerms.genres.join(", ").split("%20").join(", ")}`);
        if (this.searchTerms.years.length > 0) fullSearch = fullSearch.concat(` in these years: ${this.searchTerms.years.join(", ").split("%20").join(", ")}`);
        if (this.searchTerms.studios.length > 0) fullSearch = fullSearch.concat(` by these studios: ${this.searchTerms.studios.join(", ").split("%20").join(", ").split("-").join(" ")}`);


        let resStart = 0;
        let curPage = parseInt(this.props.history.location.search.split("page=")[1]);
        if (curPage > 1) {
            resStart += ((curPage - 1) * 10);
        }
        let total = this.props.results.length;
        let resEnd = Math.min(total, (resStart + 10));

        let pageChange = null;

        let nonEmpty = total !== 0;
        let firstPage = this.searchTerms.page === "1";
        let moreToSee = total > resEnd;

        if (nonEmpty && moreToSee && !firstPage) {
            pageChange = (
            <div id="page-change">
                <a id="first-last" onClick={this.handleFirst}>← First</a>
                <a onClick={this.handlePrevious}>← Previous</a>
                <button onClick={this.handleNext}>Next →</button>
                <button id="first-last" onClick={this.handleLast}>Last →</button>
            </div>
            )
        } else if (nonEmpty && moreToSee && firstPage) {
            pageChange = (
                <div id="page-change">
                    <button onClick={this.handleNext}>Next →</button>
                    <button onClick={this.handleLast}>Last →</button>
                </div>
            )
        } else if (nonEmpty && !moreToSee && !firstPage) {
            pageChange = (
                <div id="page-change">
                    <a onClick={this.handleFirst}>← First</a>
                    <a onClick={this.handlePrevious}>← Previous</a>
                </div>
            )
        };
        
        if (total === 0) {
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
            const results = this.props.results.slice(resStart, resStart + 10).map((anime) => {
                const image = (typeof anime.imageURL === "string") ? <img onClick={() => this.props.history.push(`/anime?${anime.title.split(" ").join("-")}`)} src={anime.imageURL} /> : <img onClick={() => this.props.history.push(`/anime?${anime.title.split(" ").join("-")}`)} id="ph"  src={window.animePHC} />

                let stars = [];
                for (let i = 1; i < 6; i++) {
                    let starStatus = window.starUnclicked;

                    if (parseInt(anime.rating) >= i) {
                        starStatus = window.starClicked;
                    }

                    let star = <img 
                        style={{
                            "height": "18px", 
                            "width": "18px",
                            "border": "none",
                            "margin": "0" }} 
                        id="star" 
                        src={starStatus} 
                        key={i} />;

                    stars.push(star);
                }

                const titleLang = (this.props.language === "EN") ? anime.title : anime.titleJP

                return (
                    <li key={`${anime.title}uwu${anime.price}`}>
                        {image}
                        <span>
                            <h3 onClick={this.handleAnimeClick}>{titleLang}</h3>
                            <h4>by <a onClick={this.handleStudioClick}>{anime.studio}</a></h4>
                            <h4>{stars}   {anime.rating}</h4>
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
                    <div className={modalToggle} onClick={this.handleModalOff}>.</div>
                    <span>Displaying {resStart+1}-{resEnd} of {total} result(s) <p id="search-term">{fullSearch}</p></span>
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