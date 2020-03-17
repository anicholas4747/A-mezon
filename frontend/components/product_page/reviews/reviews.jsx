import React from 'react';
import ReviewItem from './review_item_container';

const Reviews = ({ match, reviews, reviewCountMatch, refPos}) => {
    const reviewLis = reviews.map( (review) => {
        return (
            <li key={review.id}>
                <ReviewItem review={review} refPos={refPos}/>
            </li>
        );
    });
    
    let starNum = "";
    if (reviews[0] && !reviewCountMatch) starNum = `(${reviews[0].rating}-star)`;

    const reviewsHeading = (match.path === "/anime") ? (
        <h3>{`${reviews.length} customer review(s) ${starNum}`}</h3>
    ) : (
        <h3>{`${reviews.length} anime review(s)`}</h3>
    )

    return (
        <section id="cust-reviews">
            {reviewsHeading}
            <ul>{reviewLis}</ul>
        </section>
    )
}

export default Reviews;