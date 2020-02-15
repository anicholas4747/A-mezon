import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class ReviewItem extends Component{
    constructor(props){
        super(props);
        this.handleEdit = this.handleEdit.bind(this);
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleEdit(e){
        e.preventDefault();
        this.props.fetchReview(this.props.review.id)
            .then(() => this.props.history.push(`/review/edit-review?${this.props.review.id}`));
    }

    handleDelete(e){
        e.preventDefault();
        this.props.deleteReview(this.props.review)
            .then(() => this.props.history.push(`/anime?${this.props.review.anime.split(" ").join("-")}`));
    }

    render(){

        const options = (
            <ul id="review-options">
                <img src={window.ellipsis}/>
                <span>
                    <li key="edit1"><a onClick={this.handleEdit}>Edit Review</a></li>
                    <li key="delete1"><a onClick={this.handleDelete}>Delete Review</a></li>
                </span>
            </ul>
        )

        const review = this.props.review;

        let stars = [];
        for (let i = 1; i < 6; i++) {
            let starStatus = window.starUnclicked;

            if (review.rating >= i) {
                starStatus = window.starClicked;
            }

            let star = <img src={starStatus} key={i}/>;

            stars.push(star);
        }

        const reviewTimestamp = new Date(review.updated_at).toDateString();

        return (
            <div>
                {(this.props.review.author === this.props.currentUser) ? options : null}
                <section className="review-item">
                    <Link to={`/profile?${review.author.split(" ").join("-")}`}>    
                        {review.author}
                    </Link>
                    <span>
                        {stars}
                        <h3>{review.title}</h3>
                    </span>
                    <h4>{reviewTimestamp}</h4>
                    <p>{review.body}</p>
                </section>
            </div>
        )
    }
}

export default ReviewItem;