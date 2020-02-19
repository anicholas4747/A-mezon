import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Reviews from './reviews/reviews';

class AnimeShow  extends Component{
    constructor(props){
        super(props);
        this.handleStudioClick = this.handleStudioClick.bind(this);
        this.ref = React.createRef();
        this.handleModalOff = this.handleModalOff.bind(this);
    }

    handleModalOff(e) {
        e.preventDefault();
        this.props.navLiClicked(true);
        this.props.navDropdown(false);
        this.props.searchDropdownHide(true);
    }

    handleStudioClick(e) {
        e.preventDefault();
        const studioName = e.target.innerText.split(" ").join("-");
        this.props.fetchStudio(studioName)
            .then(() => this.props.history.push(`/studio?${studioName}`));
    }

    componentDidMount(){
        if (this.props.refPos.current !== null) {
            this.props.refPos.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
        this.props.fetchOneAnime(this.props.history.location.search.slice(1));
    }

    render(){
        if (this.props.anime.title === undefined) return <div ref={this.ref}></div>;

        const modalToggle = ((this.props.shouldGreyOut) ? "modal-on" : "modal-off");
        const {title, description, genre, release_year, price} = this.props.anime;
        const studioName = this.props.studio.name;

        const descriptionLis = description.split(".").map((sent,idx) => {
            if(sent !== "" && idx < 4) return <li key={`${idx}${sent[0]}`}>{sent}</li>
        });

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
            <div className="outermost">
                <div className={modalToggle} onClick={this.handleModalOff}>.</div>
                
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
                        <h4>Release Year: <Link to={`/s?years=${release_year}&page=1`}>{release_year}</Link></h4>
                        <h4>Genre: <Link to={`/s?genres=${genre}&page=1`}>{genre}</Link></h4>
                        <ul id="description-ul">{descriptionLis}</ul>
                    </span>
                    <span className="purchase-actions">
                        <h5 id="purchase-amount">${price.toFixed(2)}</h5>
                        <h4>& FREE Shipping</h4>
                        <br/>
                        <p id="stock">In Stock.</p>
                        <select id="qty">
                            {qtyOptions}
                        </select>
                        <br/>
                        <div><h5 id="calc-price">${price.toFixed(2)}</h5><h4 id="calc-price">+ FREE Shipping</h4></div>
                        <button id="add-to-cart">
                            <img src={window.addToCart}/>
                            <p>Add to Cart</p>   
                        </button>
                        <div id="button-sep">.</div>
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
                <h2>Customer reviews</h2>
                <section id="review-prod">
                    <h3>Review this product</h3>
                    <p>Share your thoughts with other customers</p>
                    {reviewButton}
                </section>
                <Reviews match={this.props.match} reviews={this.props.reviews} refPos={this.props.refPos}/>
            </div>
        )
    }
}

export default AnimeShow;