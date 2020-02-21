import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = (props) => {
    // do a giphy api request to get a PG anime gif to display
    const modalToggle = ((props.shouldGreyOut) ? "modal-on" : "modal-off");

    
    if (props.refPos.current !== null) {
        props.refPos.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start',
        });
    };
    

    return (
        <div className="fof">
            <div className={modalToggle}>.</div>
            <Link to="/" id="fof">
                <h1 id="fof">Sorry</h1>
                <h2 id="fof">we couldn't find that page</h2>
                <h3 id="fof">here are some dancing waifus instead ^-^</h3>
                <img id="fof" src={window.animePH}/>
            </Link>
        </div>
    );
};

export default NotFoundPage;