import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class AnimeShow  extends Component{
    constructor(props){
        super(props);
        this.handleStudioClick = this.handleStudioClick.bind(this);
    }

    handleStudioClick(e) {
        e.preventDefault();
        const studioName = e.target.innerText.split(" ").join("-");
        this.props.fetchStudio(studioName)
            .then(() => this.props.history.push(`/studio?${studioName}`));
    }

    componentDidMount(){
        this.props.fetchOneAnime(this.props.history.location.search.slice(1));
    }

    render(){
        if(this.props.anime.title === undefined) return <div></div>;

        const modalToggle = ((this.props.shouldGreyOut) ? "modal-on" : "modal-off");
        const {title, description, genre, release_year, price} = this.props.anime;
        const studioName = this.props.studio.name;

        const reviewButton = (this.props.isLoggedIn) ? (
            <Link className="create-review" to={`/review/create-review?${title.split(" ").join("-")}`}>Write a customer review</Link>
        ) : (
            <Link className="create-review" to={"/signin?verify_email"}>Write a customer review</Link>
        )

        return (
            <div>
                <div className={modalToggle}>.</div>
                <h1>Anime Show Page</h1>
                <section>
                    <img src={window.animePH}/>
                </section>
                <span>
                    <a onClick={this.handleStudioClick}>{studioName}</a>
                    <h3>{title}</h3>
                    <h4>Release Year: <Link to={`/s?year=${release_year}`}>{release_year}</Link></h4>
                    <h4>Genre: <Link to={`/s?genre=${genre}`}>{genre}</Link></h4>
                    <h5>Price: ${price.toFixed(2)}</h5>
                </span>
                <section>
                    <h3>Product description</h3>
                    <p>{description}</p>
                </section>
                <section>
                    <h3>Review this product</h3>
                    <p>Share your thoughts with other customers</p>
                    {reviewButton}
                </section>
            </div>
        )
    }
}

export default AnimeShow;