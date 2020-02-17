import React, { Component } from 'react';

class SearchResults extends Component{
    constructor(props){
        super(props);

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
            //display relevant anime based on search term
            const searchTerms = {};
            this.props.history.location.search.slice(1).split("&").forEach((term) => {
                let kv = term.slice("=");
                searchTerms[kv[0]] = kv[1];
            });
            // implement search by title, genre, studio, and release year
            this.props.searchAnime(searchTerms.title, 1);
        }

    }

    render(){
        if(this.props.results.length === 0) return <h1>Loading...</h1>;

        const modalToggle = ((this.props.shouldGreyOut) ? "modal-on" : "modal-off");
        
        return(

            <div className="search-results">
                <div className={modalToggle}>.</div>
                <h1>Search Results Page</h1>
            </div>
        )
    }
}

export default SearchResults;