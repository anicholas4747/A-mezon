export const fetchReviews = (anime_title) => (
    $.ajax({
        method: "GET",
        url: `/anime/${anime_title}/reviews`
    })
);

export const createReview = (review) => (
    $.ajax({
        method: "POST",
        url: "/api/reviews",
        data: { review }
    })
);

export const updateReview = (reviewId) => (
    $.ajax({
        method: "POST",
        url: "/api/reviews",
        data: reviewId
    })
);
    
export const deleteReview = (reviewId) => (
    $.ajax({
        method: "POST",
        url: "/api/reviews",
        data: reviewId
    })
);