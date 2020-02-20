import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';

class FilterOptions extends Component{
    constructor(props){
        super(props);
        this.handleFilterClick = this.handleFilterClick.bind(this);
        this.makeSearch = this.makeSearch.bind(this);
        this.state = {
            genres: [],
            studios: [],
            years: []
        };
    }

    makeSearch() {
        //make search
        const oldSearchParams = this.props.history.location.search.slice(1).split("&").map((el) => {
            return el.split("=");
        }).flat();
        const titleSearchedIdx = oldSearchParams.findIndex((val) => val === "title");
        const titleWasSearched = (titleSearchedIdx === undefined || titleSearchedIdx === -1) ? false : true;

        let searchParams = {
            genres: this.state.genres,
            years: this.state.years,
            studios: this.state.studios,
            page: 1
        };
        if (titleWasSearched) searchParams.title = oldSearchParams[titleSearchedIdx + 1];

        let searchQueryObj = {
            "genres=": this.state.genres.join("%20"),
            "years=": this.state.years.join("%20"),
            "studios=": this.state.studios.join("%20"),
            "page=": 1
        };
        if (titleWasSearched) searchQueryObj["title="] = oldSearchParams[titleSearchedIdx + 1];

        let searchQueryArr = [];

        if (titleWasSearched) {
            searchQueryArr.push(`title=${searchQueryObj["title="]}`);
        }
        if (searchQueryObj["genres="] !== "") {
            searchQueryArr.push(`genres=${searchQueryObj["genres="]}`);
        }
        if (searchQueryObj["years="] !== "") {
            searchQueryArr.push(`years=${searchQueryObj["years="]}`);
        }
        if (searchQueryObj["studios="] !== "") {
            searchQueryArr.push(`studios=${searchQueryObj["studios="]}`);
        }
        if (typeof searchParams.page === "number") {
            searchQueryArr.push(`page=${searchQueryObj["page="]}`);
        }

        const searchQuery = searchQueryArr.join("&").split(" ").join("-");

        this.props.searchAnime(searchParams)
            .then(() => this.props.history.push(`/s?${searchQuery}`));
    }

    handleFilterClick(e) {
        e.preventDefault();
        const stateKey = e.target.parentElement.dataset.field;

        // toggle & actually run search
        let filterValue = e.target.parentElement.dataset.value;
        if(typeof filterValue  === "string") filterValue = filterValue.split("-").join(" ");

        if (this.state[stateKey].includes(filterValue)){
            // take it out
            this.state[stateKey].splice(this.state[stateKey].findIndex((val) => val === filterValue),1);
            this.setState({
                [stateKey]: this.state[stateKey]
            }, this.makeSearch);
        } else {
            // put it in
            this.setState({
                [stateKey]: this.state[stateKey].concat(filterValue)
            }, this.makeSearch);
        }
    }

    componentDidUpdate(prevProps){
        if (prevProps.preloadedFilters !== this.props.preloadedFilters) {
            if (this.props.preloadedFilters.length === 0) {
                this.setState({
                    genres: [],
                    studios: [],
                    years: []
                }, this.makeSearch);
            } else if (this.props.preloadedFilters[0].years) {
                this.setState({
                    genres: [],
                    studios: [],
                    years: [this.props.preloadedFilters[0].years]
                }, this.makeSearch);
            } else {
                this.setState({
                    genres: [this.props.preloadedFilters[0].genres],
                    studios: [],
                    years: []
                }, () => {
                    if (this.state.genres[0].split(" ").length === 1){
                        return this.makeSearch;
                    } else {
                        this.setState({
                            genres: this.state.genres[0].split(" "),
                            studios: [],
                            years: []
                        }, this.makeSearch);
                    }
                });
            }
        }
    }

    render(){

        const genreOptions = this.props.genres.map((g) => {
            if (this.state.genres.includes(g)){
                return (
                    <label data-field="genres" data-value={g} key={g}>
                        <img onClick={this.handleFilterClick} src={window.checkedCB} />
                        <h5 onClick={this.handleFilterClick}>{g}</h5>
                    </label>
                )
            } else {
                return (
                    <label data-field="genres" data-value={g} key={g}>
                        <img onClick={this.handleFilterClick} src={window.uncheckedCB} />
                        <h5 onClick={this.handleFilterClick}>{g}</h5>
                    </label>
                )
            }
        })

        const studioOptions = this.props.studios.map((studio) => {
            if (this.state.studios.includes(studio.name)){
                return (
                    <label data-field="studios" data-value={studio.name.split(" ").join("-")} key={studio.name.split(" ").join("-")}>
                        <img onClick={this.handleFilterClick} src={window.checkedCB} />
                        <h5 onClick={this.handleFilterClick}>{studio.name}</h5>
                    </label>
                )
            } else {
                return (
                    <label data-field="studios" data-value={studio.name.split(" ").join("-")} key={studio.name.split(" ").join("-")}>
                        <img onClick={this.handleFilterClick} src={window.uncheckedCB} />
                        <h5 onClick={this.handleFilterClick}>{studio.name}</h5>
                    </label>
                )
            }
        })

        const yearOptions = this.props.years.map((year) => {
            if (this.state.years.includes(`${year}`)){
                return (
                    <label data-field="years" data-value={year} key={year}>
                        <img onClick={this.handleFilterClick} src={window.checkedCB} />
                        <h5 onClick={this.handleFilterClick}>{year}</h5>
                    </label>
                )
            } else {
                return (
                    <label data-field="years" data-value={year} key={year}>
                        <img onClick={this.handleFilterClick} src={window.uncheckedCB} />
                        <h5 onClick={this.handleFilterClick}>{year}</h5>
                    </label>
                )
            }
        })

        return (
            <aside id="filter-bar">
                <div>
                    <h4>Filter by Genre</h4>
                    {genreOptions}
                </div>
                <div>
                    <h4>Filter by Studio</h4>
                    {studioOptions}
                </div>
                <div>
                    <h4>Filter by Release Year</h4>
                    {yearOptions}
                </div>
            </aside>
        )
    }
}

export default withRouter(FilterOptions);