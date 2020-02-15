import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class LangToggle extends  Component{
    constructor(props){
        super(props);
        this.handleMouseOver = this.handleMouseOver.bind(this);
    }

    handleMouseOver() {
        this.props.navDropdown(true);
        this.props.navLiClicked(false);
    }

    render(){

        const lang = this.props.language || "EN";

        const enStatus = (this.props.language === "EN") ? <img src={window.clickedRB} /> : <img src={window.uncheckedRB} id="unchecked-radio" />;
        const jpStatus = (this.props.language === "JP") ? <img src={window.clickedRB} /> : <img src={window.uncheckedRB} id="unchecked-radio" />;

        return (
            <div className="lang-toggle-div" onMouseOver={this.handleMouseOver} onMouseLeave={() => this.props.navDropdown(false)}>
                <Link to="/language-select" id="language-toggle">
                    {lang}
                    <div>
                        <img src={window.globe} alt="" />
                        {"▾"}
                    </div>
                </Link>
                <ul id="lang-toggle-ul">
                    <li>{enStatus}<a>Englsih - EN</a></li>
                    <li>{jpStatus}<a>日本語 - JP</a></li>
                </ul>
            </div>
        )
    }
}

export default LangToggle;