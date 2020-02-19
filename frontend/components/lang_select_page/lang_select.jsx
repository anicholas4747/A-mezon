import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LangSelect extends Component{
    constructor(props){
        super(props);
        this.state = {
            clicked: this.props.language
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleOptionClick = this.handleOptionClick.bind(this);
        this.handleModalOff = this.handleModalOff.bind(this);
    }

    handleModalOff(e) {
        e.preventDefault();
        this.props.navLiClicked(true);
        this.props.navDropdown(false);
        this.props.searchDropdownHide(true);
    }

    handleOptionClick(e){
        e.preventDefault();

        this.setState({
            clicked: e.target.dataset.lang
        });
    }

    handleSubmit(e){
        e.preventDefault();
        this.props.changeLang(this.state.clicked);
        this.props.history.push("/");
    }

    componentDidMount() {
        if (this.props.refPos.current !== null) {
            this.props.refPos.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    }

    render(){

        let langOptions = <div></div>

        if(this.state.clicked === "EN"){
            langOptions = (
                <section>
                    <span onClick={this.handleOptionClick} data-lang="EN"><img id="ckd" src={window.clickedRB} data-lang="EN" /><h3 data-lang="EN">English - EN</h3></span>
                    <div onClick={this.handleOptionClick} data-lang="JP"><img id="not-ckd" src={window.uncheckedRB} data-lang="JP" /><h3 data-lang="JP">日本語 - JP [Beta]</h3></div>
                </section>
            )
        } else {
            langOptions = (
                <section>
                    <span onClick={this.handleOptionClick} data-lang="EN"><img id="not-ckd" src={window.uncheckedRB} data-lang="EN" /><h3 data-lang="EN">English - EN</h3></span>
                    <div onClick={this.handleOptionClick} data-lang="JP"><img id="ckd" src={window.clickedRB} data-lang="JP" /><h3 data-lang="JP">日本語 - JP [Beta]</h3></div>
                </section>
            )

        }

        const modalToggle = ((this.props.shouldGreyOut) ? "modal-on" : "modal-off");
        
        return (
            <div>
                <div className={modalToggle} onClick={this.handleModalOff}>.</div>
                <div id="language-settings">
                    <h2>Language Settings</h2>
                    <p>Select the language you prefer for browsing, shopping, and communications.</p>
                    {langOptions}
                    <Link to="/" id="cancel">Cancel</Link>
                    <button onClick={this.handleSubmit}>Save Changes</button>
                </div>
            </div>
        )
    }
}

export default LangSelect;