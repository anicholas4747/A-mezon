import React from 'react';
import { Link } from 'react-router-dom';

const NotFoundPage = () => {
    // do a giphy api request to get a PG anime gif to display
    return (
        <div>
            <Link to="/">
                <h1>Sorry</h1>
                <h3>we couldn't find that page</h3>
            </Link>
        </div>
    );
};

export default NotFoundPage;