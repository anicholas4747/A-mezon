import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Reviews from './reviews/reviews';

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

        const qtyOptions = [];
        for(let i = 1; i <= 10; i++){
            qtyOptions.push(<option key={i} value={i}>Qty: {i}</option>)
        }

        return (
            <div>
                <div className={modalToggle}>.</div>
                
                <section id="product-top-line">
                    <section className="media">
                        <button>IMG</button>
                        <button>VID</button>
                        <img src={window.animePH}/>
                    </section>
                    <span className="details">
                        <h3>{title}</h3>
                        <h4>by<a onClick={this.handleStudioClick}>{studioName}</a></h4>
                        <span id="pricing"><h6>Price:</h6><h5 id="amount">${price.toFixed(2)}</h5><h4>& FREE Shipping</h4></span>
                        <h4>Release Year: <Link to={`/s?year=${release_year}`}>{release_year}</Link></h4>
                        <h4>Genre: <Link to={`/s?genre=${genre}`}>{genre}</Link></h4>
                    </span>
                    <span className="purchase-actions">
                        <h5 id="purchase-amount">${price.toFixed(2)}</h5>
                        <h4>& FREE Shipping</h4>
                        <br/>
                        <select id="qty">
                            {qtyOptions}
                        </select>
                        <br/>
                        <div><h5 id="calc-price">${price.toFixed(2)}</h5><h4 id="calc-price">+ FREE Shipping</h4></div>
                        <button id="add-to-cart">
                            <img src={window.addToCart}/>
                            <p>Add to Cart</p>   
                        </button>
                        <button id="buy-now">
                            <img src={window.buyNow}/>
                            <p>Buy Now</p>
                        </button>
                    </span>
                </section>

                <section id="description">
                    <h3>Product description</h3>
                    <p>{description}</p>
                </section>
                <section id="review-prod">
                    <h3>Review this product</h3>
                    <p>Share your thoughts with other customers</p>
                    {reviewButton}
                </section>
                <Reviews reviews={this.props.reviews} />
            </div>
        )
    }
}

export default AnimeShow;