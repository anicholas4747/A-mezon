import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Footer extends Component {

    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
    }
    
    handleClick(){
        this.props.refPos.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    }


    render(){
        return (
            <div id="footer">
                <p onClick={this.handleClick} id="footer-top">Back to top</p>
                <span id="footer-span">
                    <h3>Akeem Nicholas</h3>
                    <ul>
                        <li><a href="https://www.linkedin.com/in/akeem-nicholas-2983a6192/">LinkedIn</a></li>
                        <li><a href="https://github.com/anicholas4747">GitHub</a></li>
                    </ul>
                </span>
                <Link className="logo" to="/"><img className="logo" src={window.logoWhite} alt="Amezon Logo" /></Link>
            </div>
        )
    }
};

export default Footer;