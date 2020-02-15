import React from 'react';
import ReviewItem from './review_item_container';

const Reviews = ({reviews, refPos}) => {
    const reviewLis = reviews.map( (review) => {
        return (
            <li key={review.id}>
                <ReviewItem review={review} refPos={refPos}/>
            </li>
        );
    });

    return (
        <section id="cust-reviews">
            <h3>{`${reviews.length} customer reviews`}</h3>
            <ul>{reviewLis}</ul>
        </section>
    )
}

export default Reviews;