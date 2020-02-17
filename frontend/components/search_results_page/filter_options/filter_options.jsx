import React, { Component } from 'react';

class FilterOptions extends Component{
    constructor(props){
        super(props);
        this.handleFilterClick = this.handleFilterClick.bind(this);
    }

    handleFilterClick(e) {
        e.preventDefault();

    }

    render(){

        return (
            <aside id="filter-bar">
                <div>
                    <h4>Filter by Genre</h4>
                    <label>
                        <img src={window.checkedCB}/>
                        <h5>X</h5>
                    </label>
                    <label>
                        <img src={window.uncheckedCB}/>
                        <h5>Y</h5>
                    </label>
                    <label>
                        <img src={window.uncheckedCB}/>
                        <h5>Z</h5>
                    </label>
                </div>
                <div>
                    <h4>Filter by Studio</h4>
                    <label>
                        <img src={window.uncheckedCB} />
                        <h5>X</h5>
                    </label>
                    <label>
                        <img src={window.checkedCB} />
                        <h5>Y</h5>
                    </label>
                    <label>
                        <img src={window.uncheckedCB} />
                        <h5>Z</h5>
                    </label>
                </div>
                <div>
                    <h4>Filter by Release Year</h4>
                    <label>
                        <img src={window.uncheckedCB} />
                        <h5>2015</h5>
                    </label>
                    <label>
                        <img src={window.uncheckedCB} />
                        <h5>2016</h5>
                    </label>
                    <label>
                        <img src={window.checkedCB} />
                        <h5>2017</h5>
                    </label>
                </div>
            </aside>
        )
    }
}

export default FilterOptions;