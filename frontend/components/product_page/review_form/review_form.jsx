import React, { Component } from 'react';

class ReviewForm extends Component{
    constructor(props){
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleStarClicked = this.handleStarClicked.bind(this);
        this.state = {
            reviewInfo: this.props.review,
            errors: {
                title: "",
                body: "",
                rating: ""
            }
        };
    }

    handleStarClicked(num){
        return (e) => {
            this.setState({
                reviewInfo: {
                    id: this.state.reviewInfo.id,
                    title: this.state.reviewInfo.title,
                    body: this.state.reviewInfo.body,
                    rating: e.target.value
                }
            });
        };
    }

    handleInput(field) {
        return (e) => {
            if(field === "title"){
                this.setState({
                    reviewInfo: {
                        id: this.state.reviewInfo.id,
                        title: e.target.value,
                        body: this.state.reviewInfo.body,
                        rating: this.state.reviewInfo.rating
                    }
                });
            } else if (field === "body"){
                this.setState({
                    reviewInfo: {
                        id: this.state.reviewInfo.id,
                        title: this.state.reviewInfo.title,
                        body: e.target.value,
                        rating: this.state.reviewInfo.rating
                    }
                });
            }
        };
    }

    handleSubmit(e){
        e.preventDefault();
        const reviewForm = {
            title: this.state.reviewInfo.title,
            body: this.state.reviewInfo.body,
            rating: this.state.reviewInfo.rating,
            animeId: this.props.anime.id
        };

        if (this.props.formType === "Edit Review") reviewForm.id = this.props.review.id;

        let errs = 0;
        let tErrors = "";
        let bErrors = "";
        let rErrors = "";

        if (this.state.reviewInfo.title === "") {
            errs++;
            tErrors = <h4 className="no-entry">! Please enter your headline.</h4>
        }
        if (this.state.reviewInfo.body === "") {
            errs++;
            bErrors = <h4 className="no-entry">! Please enter your review.</h4>
        }
        if (this.state.reviewInfo.rating === 0) {
            errs++;
            rErrors = <h4 className="no-entry">! Please select a star rating</h4>
        }

        this.setState({
            errors: {
                title: tErrors,
                body: bErrors,
                rating: rErrors
            }
        })

        if (errs === 0) {
            this.props.action(reviewForm)
                .then(this.props.history.push(`/anime?${this.props.anime.title.split(" ").join("-")}`));
        }
    }

    componentDidMount(){
        if (this.props.refPos.current !== null) {
            this.props.refPos.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        };
        if(this.props.review.title === undefined){
            // edit form data
            this.props.fetchReview(this.props.history.location.search.slice(1))
                .then(() => this.props.fetchOneAnime(this.props.review.anime) 
                    .then(() => this.setState({ reviewInfo: this.props.review })));
        } else if(this.props.anime.title === undefined){
            // new form data
            this.props.fetchOneAnime(this.props.history.location.search.slice(1))
                .then(() => this.setState({ reviewInfo: this.props.review }));
        }
    }

    render(){
        if (Boolean(this.props.review) === false) {
            return <div>Loading...</div>;
        }


        let stars = [];
        for (let i = 1; i < 6; i++){
            let starStatus = window.starUnclicked;
            
            if(this.state.reviewInfo.rating >= i){
                starStatus = window.starClicked
            }

            let star = (
                <label onClick={this.handleStarClicked(i)} key={i}>
                    <input type="radio" value={i} />
                    <img src={starStatus} />
                </label>
            );

            stars.push(star);
        }

        const modalToggle = ((this.props.shouldGreyOut) ? "modal-on" : "modal-off");

        return (
            <div className="review-form">
                <div className={modalToggle}>.</div>
                <div id="review-form">
                    <h2>{this.props.formType}</h2>
                    <span>
                        <img src={window.animePH} />
                        <p>{this.props.anime.title}</p>
                    </span>
                    <form onSubmit={this.handleSubmit}>
                        <h3>Overall rating</h3>
                        <section>
                            {stars}
                            {(this.state.reviewInfo.rating === 0) ? this.state.errors.rating : null}
                        </section>
                        <h3>Add a headline</h3>
                        {/* getting weird error on page refresh, it IS controlled, i'm not changing it from uncontrolled to controlled */}
                        <input type="text" onChange={this.handleInput("title")} value={this.state.reviewInfo.title} placeholder="What's most important to know?"/>
                        {(this.state.reviewInfo.title === "") ? this.state.errors.title : null}
                        <h3>Write your review</h3>
                        <textarea onChange={this.handleInput("body")} value={this.state.reviewInfo.body} placeholder="What did you like or dislike? Remember, no spoilers!"></textarea>
                        {(this.state.reviewInfo.body === "") ? this.state.errors.body : null}
                        <div><button>Submit</button></div>
                    </form>
                </div>
            </div>
        )
    }
}

export default ReviewForm;