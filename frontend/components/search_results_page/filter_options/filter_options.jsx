import React, { Component } from 'react';

class FilterOptions extends Component{
    constructor(props){
        super(props);
        this.handleFilterClick = this.handleFilterClick.bind(this);
        this.state = {
            genres: [],
            studios: [],
            years: []
        };
    }

    handleFilterClick(e) {
        e.preventDefault();
        const stateKey = e.target.parentElement.dataset.field;
        // toggle
        if(this.state[stateKey].includes(e.target.parentElement.dataset.value)){
            // take it out
            this.state[stateKey].splice(this.state[stateKey].findIndex((val) => val === e.target.parentElement.dataset.value),1)
            this.setState({
                [stateKey]: this.state[stateKey]
            });
        } else {
            // put it in
            this.setState({
                [stateKey]: this.state[stateKey].concat(e.target.parentElement.dataset.value)
            });
        }
    }

    componentDidMount(){

    }

    render(){

        const genreOptions = this.props.genres.map((g) => {
            if (this.state.genres.includes(g)){
                return (
                    <label data-field="genres" data-value={g}>
                        <img onClick={this.handleFilterClick} src={window.checkedCB} />
                        <h5 onClick={this.handleFilterClick}>{g}</h5>
                    </label>
                )
            } else {
                return (
                    <label data-field="genres" data-value={g}>
                        <img onClick={this.handleFilterClick} src={window.uncheckedCB} />
                        <h5 onClick={this.handleFilterClick}>{g}</h5>
                    </label>
                )
            }
        })

        const studioOptions = this.props.studios.map((studio) => {
            if (this.state.studios.includes(studio.name)){
                return (
                    <label data-field="studios" data-value={studio.name}>
                        <img onClick={this.handleFilterClick} src={window.checkedCB} />
                        <h5 onClick={this.handleFilterClick}>{studio.name}</h5>
                    </label>
                )
            } else {
                return (
                    <label data-field="studios" data-value={studio.name}>
                        <img onClick={this.handleFilterClick} src={window.uncheckedCB} />
                        <h5 onClick={this.handleFilterClick}>{studio.name}</h5>
                    </label>
                )
            }
        })

        const yearOptions = this.props.years.map((year) => {
            if (this.state.years.includes(`${year}`)){
                return (
                    <label data-field="years" data-value={year}>
                        <img onClick={this.handleFilterClick} src={window.checkedCB} />
                        <h5 onClick={this.handleFilterClick}>{year}</h5>
                    </label>
                )
            } else {
                return (
                    <label data-field="years" data-value={year}>
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

export default FilterOptions;