import React, { Component } from 'react';

class SearchBar extends Component{
    constructor(props){
        super(props);
        this.state = {
            searchTerm: ""
        };
        this.handleInput = this.handleInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount(){
        // this.props.fetchGenres();
    }

    handleSubmit(e){
        e.preventDefault();
        //format search params
    }

    handleInput(field){
        return (e) => {
            (e.target.value === "") ? this.props.startSearch(false) : this.props.startSearch(true);
            this.setState({
                [field]: e.target.value
            });
        };
    }

    render(){
        let partialMatches = this.props.titles.filter( (obj) => (
            obj.title.toUpperCase().slice(0,this.state.searchTerm.length) === this.state.searchTerm.toUpperCase()
        )).slice(0,11).map(({title}) => (
            <li className="partial-match" key={`${title}1`}>{title}</li>
        ));

        const ulShow = (partialMatches.length > 0 && this.state.searchTerm !== "") ? "show-partial-matches" : "hide-partial-matches";
        
        if(this.state.searchTerm === "") partialMatches = null;

        if (this.props.genres.length === 0) {
            return (
                <div className="searchbar">
                    <form className="searchbar" onSubmit={this.handleSubmit}>
                        
                        <select id="genre-select">
                            <option value="All" defaultValue="selected">All ▾</option>
                            <option value="Action Adventure">A/A - Action/Adventure</option>
                            <option value="Comedy">Cm - Comedy</option>
                        </select>
                        
                        <div>
                            <input type="text" onChange={this.handleInput("searchTerm")} value={this.state.searchTerm} />
                            <button><img id="search-icon" src={window.magnifyingGlass} alt="Search" /></button>
                        </div>            
                    </form>
                    <ul className={ulShow}>
                        {partialMatches}
                    </ul>
                </div>
        )}

        const genreOptions = this.props.genres.map((genre) => (
            <option value={genre}>{genre}</option>
        ))

        return (
            <div>
                <form className="searchbar" onSubmit={this.handleSubmit}>
                    <select id="genre-select">
                        <option value="All" defaultValue="selected">All  ▾</option>
                        {genreOptions}
                    </select>
                    <div>
                        <input type="text" onChange={this.handleInput("searchTerm")} value={this.state.searchTerm}/>
                        <button><img id="search-icon" src={window.magnifyingGlass} alt="Search" /></button>
                    </div>
                </form>
                <ul className={ulShow}>
                    {partialMatches}
                </ul>
            </div>
        )
    }
}

export default SearchBar;