export const fetchReviews = (anime_title) => (
    $.ajax({
        method: "GET",
        url: `/api/anime/${anime_title}/reviews`
    })
); // I dont this this route is ever uses / this ajax request ever made

export const fetchReview = (reviewId) => (
    $.ajax({
        method: "GET",
        url: `/api/reviews/${reviewId}`
    })
);

export const createReview = (review) => (
    $.ajax({
        method: "POST",
        url: "/api/reviews",
        data: {
            review: {
                title: review.title,
                body: review.body,
                rating: review.rating,
                anime_id: review.animeId
            }
        }
    })
);

export const updateReview = (review) => (
    $.ajax({
        method: "PATCH",
        url: `/api/reviews/${review.id}`,
        data: {
            review: {
                title: review.title,
                body: review.body,
                rating: review.rating,
                anime_id: review.animeId
            }
        }
    })
);
    
export const deleteReview = (review) => (
    $.ajax({
        method: "DELETE",
        url: `/api/reviews/${review.id}`,
        data: { review }
    })
);

export const fetchUserReviews = (username) => (
    $.ajax({
        method: "GET",
        url: `/api/user/${username}/reviews`
    })
);