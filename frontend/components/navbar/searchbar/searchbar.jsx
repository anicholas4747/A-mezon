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
        if (this.props.genres.length === 0) return (
            <form className="searchbar" onSubmit={this.handleSubmit}>
                
                <select id="genre-select">
                    <option value="All" defaultValue="selected">All▾</option>
                    <option value="Action Adventure">A/A - Action/Adventure</option>
                </select>
                
                <div>
                    <input type="text" onChange={this.handleInput("searchTerm")} value={this.state.searchTerm} />
                    <button><img id="search-icon" src={window.magnifyingGlass} alt="Search" /></button>
                </div>            
            </form>
        );

        const genreOptions = this.props.genres.map((genre) => (
            <option value={genre}>{genre}</option>
        ))

        return (
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
        )
    }
}

export default SearchBar;