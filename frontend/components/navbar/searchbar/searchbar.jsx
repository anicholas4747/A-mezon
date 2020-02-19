import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchTerm: "",
            genre: ""
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleAnimeClick = this.handleAnimeClick.bind(this);
        this.handleGenreChange = this.handleGenreChange.bind(this);
    }

    componentDidMount(){
        if(this.props.genres.length === 0) {
            this.props.fetchGenres();
        }
        if (this.props.history.location.pathname === "/" || this.props.history.location.pathname === "/cart"){
            this.setState({searchTerm: ""});
        }
    }

    handleGenreChange(e){
        e.preventDefault();
        this.setState({genre: e.target.value});
    }

    handleAnimeClick(title){
        return (e) => {
            e.preventDefault();
            this.props.navLiClicked(true);
            this.props.navDropdown(false);
            this.props.searchDropdownHide(true);
            this.props.fetchOneAnime(title)
                .then(() => (this.props.history.push(`/anime?${title.split(" ").join("-")}`)));
        };
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.navLiClicked(true);
        this.props.navDropdown(false);
        this.props.searchDropdownHide(true);
        //format search params
        const searchParams = {
            title: this.state.searchTerm,
            genres: [this.state.genre],
            page: 1
        };

        let searchQuery = "";
        if (searchParams.title !== null && searchParams.title !== "") {
            searchQuery = searchQuery.concat("title=", searchParams.title.split(" ").join("-"));
        }
        if (searchParams.genres[0] !== "" && searchParams.title !== "") {
            searchParams.genres.forEach((g) => {
                searchQuery = searchQuery.concat("&genres=", g);
            });
        } else if (searchParams.genres[0] !== "" && searchParams.title === "") {
            searchParams.genres.forEach((g) => {
                searchQuery = searchQuery.concat("genres=", g);
            });
        }
        if (typeof searchParams.page === "number") {
            searchQuery = searchQuery.concat("&page=", searchParams.page);
        }


        if(this.state.searchTerm === "" & this.state.genre === ""){
            this.props.history.push("/");
        } else {
            this.props.searchAnime(searchParams)
                .then(() => this.props.history.push(`/s?${searchQuery}`));
        }
    }

    handleInput(field){
        return (e) => {
            this.props.navLiClicked(false);
            this.props.searchDropdownHide(false);
            (e.target.value === "") ? this.props.startSearch(false) : this.props.startSearch(true);
            this.setState({
                [field]: e.target.value
            });
        };
    }

    render(){
        let partialMatches = [];
        
        if (this.state.genre === "") {
            partialMatches = this.props.titles.filter((obj) => (
                (obj.title.toUpperCase().slice(0, this.state.searchTerm.length) === this.state.searchTerm.toUpperCase())
            )).slice(0, 11).map(({ title }) => (
                <li className="partial-match" key={`${title}1`} onClick={this.handleAnimeClick(title)}>
                    {title}
                </li>
            ));
        } else {
            partialMatches = this.props.titles.filter( (obj) => (
                (obj.title.toUpperCase().slice(0,this.state.searchTerm.length) === this.state.searchTerm.toUpperCase()
                    && obj.genre.toUpperCase().includes(this.state.genre.toUpperCase()))
            )).slice(0,11).map(({title}) => (
                <li className="partial-match" key={`${title}1`} onClick={this.handleAnimeClick(title)}>
                    {title}
                </li>
            ));
        }

        const ulShow = (partialMatches.length > 0 && this.state.searchTerm !== "") ? "show-partial-matches" : "hide-partial-matches";
        
        if(this.state.searchTerm === "") partialMatches = null;

        const ulId = (this.props.searchDropdownHidden) ? "SEARCH-HIDDEN" : null;

        const selectSize = {"width": `${(12 * this.state.genre.length) + 8}px`}

        if (this.props.genres.length === 0) {
            return (
                <div className="searchbar">
                    <form className="searchbar" onSubmit={this.handleSubmit}>
                        
                        <select id="genre-select" style={selectSize}>
                            <option value="All" defaultValue="selected">All ▾</option>
                        </select>
                        
                        <div>
                            <input type="text" onChange={this.handleInput("searchTerm")} value={this.state.searchTerm} />
                            <button><img id="search-icon" src={window.magnifyingGlass} alt="Search" /></button>
                        </div>            
                    </form>
                    <ul className={ulShow} id={ulId}>
                        {partialMatches}
                    </ul>
                </div>
            )
        }

        const genreOptions = this.props.genres.map((genre) => (
            <option value={genre} key={`1${genre}`}>{genre}</option>
        ))

        return (
            <div className="searchbar">
                <form className="searchbar" onSubmit={this.handleSubmit}>
                    <select id="genre-select" style={selectSize} onChange={this.handleGenreChange} value={this.state.genre}>
                        <option value="" defaultValue="selected">All  ▾</option>
                        {genreOptions}
                    </select>
                    <div>
                        <input type="text" onChange={this.handleInput("searchTerm")} value={this.state.searchTerm}/>
                        <button><img id="search-icon" src={window.magnifyingGlass} alt="Search" /></button>
                    </div>
                </form>
                <ul className={ulShow} id={ulId}>
                    {partialMatches}
                </ul>
            </div>
        )
    }
}

export default withRouter(SearchBar);