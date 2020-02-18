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
            .then(() => {
                if (this.props.refPos.current !== null) {
                    this.props.refPos.current.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start',
                    });
                }
                if (this.props.match.path === "/profile"){
                    this.props.fetchProfile(this.props.history.location.search.slice(1));
                }
            });
    }

    render(){

        const options = (
            <ul id="review-options">
                <section id="review-options-section">
                    <img src={window.ellipsis}/>
                    <span>
                        <li key="edit1"><a onClick={this.handleEdit}>Edit Review</a></li>
                        <li key="delete1"><a onClick={this.handleDelete}>Delete Review</a></li>
                    </span>
                </section>
            </ul>
        )

        const review = this.props.review;

        let stars = [];
        for (let i = 1; i < 6; i++) {
            let starStatus = window.starUnclicked;

            if (review.rating >= i) {
                starStatus = window.starClicked;
            }

            let star = <img id="star" src={starStatus} key={i}/>;

            stars.push(star);
        }

        const reviewTimestamp = new Date(review.updated_at).toDateString();
        
        const pageLink = (this.props.match.path === "/anime") ? (
            <Link to={`/profile?${review.author.split(" ").join("-")}`}>
                <img src={window.profilePic}/>
                {review.author}
            </Link>
        ) : (
            <Link to={`/anime?${review.anime.split(" ").join("-")}`}>
                <img id="small-anime" src={window.animePH}/>
                {review.anime}
            </Link>
        )

        return (
            <div>
                {(this.props.review.author === this.props.currentUser || this.props.history.location.search.slice(1) === this.props.currentUser) ? options : null}
                <section className="review-item">
                    {pageLink}
                    <span>
                        {stars}
                        {(this.props.history.location.pathname === "/profile") ? <br/> : null}
                        <h3>{review.title}</h3>
                    </span>
                    <h4>Reviewed on: {reviewTimestamp}</h4>
                    <p>{review.body}</p>
                </section>
            </div>
        )
    }
}

export default ReviewItem;