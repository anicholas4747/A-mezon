import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Reviews from './reviews/reviews';

class AnimeShow  extends Component{
    constructor(props){
        super(props);
        this.handleStudioClick = this.handleStudioClick.bind(this);
        this.handleModalOff = this.handleModalOff.bind(this);
        this.handleAddToCart = this.handleAddToCart.bind(this);
        this.handleQuantity = this.handleQuantity.bind(this);
        this.handleGoToCart = this.handleGoToCart.bind(this);
        this.handleBuyNow = this.handleBuyNow.bind(this);
        this.toggleMedia = this.toggleMedia.bind(this);
        this.handleContinueShopping = this.handleContinueShopping.bind(this);
        this.state = {
            quantity: 1,
            added: false,
            bought: false,
            imageClicked: "IMG"
        };
    }

    handleModalOff(e) {
        e.preventDefault();
        this.props.navLiClicked(true);
        this.props.navDropdown(false);
        this.props.searchDropdownHide(true);
    }

    handleContinueShopping(e) {
        e.preventDefault();
        this.props.history.push("/");
    }

    toggleMedia(e){
        e.preventDefault();
        this.setState({
            imageClicked: e.target.textContent
        });
    }

    pickMedia(){
        const image = (typeof this.props.anime.imageURL === "string") ? <img src={this.props.anime.imageURL} /> : <img id="ph" src={window.animePHC} />
        switch (this.state.imageClicked) {
            case ("IMG"):
                return (image);
            case ("VID1"):
                return (
                    <span>
                        <div id="video">Loading...</div>
                        <iframe width="375" height="315" src="https://www.youtube.com/embed/IXaLo1huGZ0" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </span>
                );
            case ("VID2"):
                return (
                    <span>
                        <div id="video">Loading...</div>
                        <iframe width="375" height="315" src="https://www.youtube.com/embed/rnQBF2CIygg" frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                    </span>
                );
        }
    }

    handleBuyNow(e){
        this.setState({
            bought: true,
            added: false
        });
    }

    handleGoToCart(e){
        e.preventDefault();
        this.props.history.push("/cart");
    }

    handleQuantity(e){
        e.preventDefault();
        this.setState({
            quantity: e.target.value
        });
    }

    handleAddToCart(e){
        e.preventDefault();
        const purchaseForm = {
            anime_id: this.props.anime.id,
            quantity: this.state.quantity
        };

        if(this.props.isLoggedIn) {
            this.props.addToCart(purchaseForm)
                .then(() => {
                    this.setState({
                        added: true,
                        bought: false
                    });
                });
        } else {
            this.props.history.push("/signin?verify_email");
        }
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

    componentDidUpdate(prevProps){
        if(prevProps.anime.id !== this.props.anime.id){
            this.setState({
                quantity: 1,
                added: false
            });
        }
    }

    render(){
        if (this.props.anime.title === undefined) return <h1>Loading...</h1>;

        const successAdd = (this.state.added) ? "added-to-cart SHOW" : "added-to-cart";
        const modalToggle = ((this.props.shouldGreyOut) ? "modal-on" : "modal-off");
        const {title, titleJP, description, genre, release_year, price} = this.props.anime;
        const studioName = this.props.studio.name;

        let descriptionLis = null;
        if (typeof description === "string") {
            descriptionLis = description.split(".").map((sent,idx) => {
                if(sent !== "" && idx < 4) return <li key={`${idx}${sent[0]}`}>{sent}</li>
            });
        }

        const reviewButton = (this.props.isLoggedIn) ? (
            <Link className="create-review" to={`/review/create-review?${title.split(" ").join("-")}`}>Write a customer review</Link>
        ) : (
            <Link className="create-review" to={"/signin?verify_email"}>Write a customer review</Link>
        )

        const qtyOptions = [];
        for(let i = 1; i <= 20; i++){
            qtyOptions.push(<option key={i} value={i}>Qty: {i}</option>)
        }

        const checkedOut = (this.state.bought) ? "added-to-cart SHOW CONFIRM" : "added-to-cart";

        let media = this.pickMedia();


        let stars = [];
        for (let i = 1; i < 6; i++) {
            let starStatus = window.starUnclicked;

            if (parseInt(this.props.anime.rating) >= i) {
                starStatus = window.starClicked;
            }

            let star = <img style={{ "height": "18px" }} id="star" src={starStatus} key={i} />;

            stars.push(star);
        }

        const numRevs = this.props.reviews.length;
        let num5s = 0;
        let num4s = 0;
        let num3s = 0;
        let num2s = 0;
        let num1s = 0;

        this.props.reviews.forEach((rev)=>{
            if(rev.rating === 5){
                num5s = num5s + 1
            } else if (rev.rating === 4) {
                num4s = num4s + 1
            } else if (rev.rating === 3) {
                num3s = num3s + 1
            } else if (rev.rating === 2) {
                num2s = num2s + 1
            } else if (rev.rating === 1) {
                num1s = num1s + 1
            }
        })

        const titleLang = (this.props.language === "EN") ? title : titleJP

        return (
            <div className="outermost">
                <div className={modalToggle} onClick={this.handleModalOff}>.</div>
                
                <section id="product-top-line">
                    <section className="media">
                        <button onClick={this.toggleMedia}>IMG</button>
                        <button onClick={this.toggleMedia}>VID1</button>
                        <button onClick={this.toggleMedia}>VID2</button>
                        {media}
                    </section>
                    <span className="details">
                        <h3>{titleLang}</h3>
                        <h4>by<a onClick={this.handleStudioClick}>{studioName}</a></h4>
                        {stars}   {this.props.anime.rating}
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
                        <select id="qty" onChange={this.handleQuantity}>
                            {qtyOptions}
                        </select>
                        <br/>
                        <div><h5 id="calc-price">${(price * this.state.quantity).toFixed(2)}</h5><h4 id="calc-price">+ FREE Shipping</h4></div>
                        <button id="add-to-cart" onClick={this.handleAddToCart}>
                            <img src={window.addToCart}/>
                            <p>Add to Cart</p>   
                        </button>
                        <div id="button-sep">.</div>
                        <button id="buy-now" onClick={this.handleBuyNow}>
                            <img src={window.buyNow}/>
                            <p>Buy Now</p>
                        </button>
                    </span>
                    <span className={successAdd}>
                        <img src={window.greenCheck} />
                        <p id="stock"> Added to your Cart</p>
                        <button onClick={this.handleGoToCart}>Continue to Cart</button>
                    </span>
                    <span className={checkedOut}>
                        <img src={window.greenCheck} />
                        <p id="stock"> Your order is on the way!</p>
                        <button onClick={this.handleContinueShopping}>Continue Shopping</button>
                    </span>
                </section>

                <section id="description">
                    <h3>Product description</h3>
                    <p>{description}</p>
                </section>
                <span id="review-left">
                    <h2>Customer reviews</h2>
                    <section id="review-prod-progress">
                        <h3>{stars}   {this.props.anime.rating} out of 5</h3>
                        <p>{numRevs} customer ratings</p>
                        {/* <img id="prog" src={window.starBar}/> */}
                        <label>5 star
                            <progress id="file" max="100" value={(num5s/numRevs)*100}></progress>
                                {`${(num5s/numRevs)*100}%`}
                        </label><br/>
                        <label>4 star
                            <progress id="file" max="100" value={(num4s/numRevs)*100}></progress>
                                {`${(num4s/numRevs)*100}%`}
                        </label><br/>
                        <label>3 star
                            <progress id="file" max="100" value={(num3s/numRevs)*100}></progress>
                                {`${(num3s/numRevs)*100}%`}
                        </label><br/>
                        <label>2 star
                            <progress id="file" max="100" value={(num2s/numRevs)*100}></progress>
                                {`${(num2s/numRevs)*100}%`}
                        </label><br/>
                        <label>1 star
                            <progress id="file" max="100" value={(num1s/numRevs)*100}></progress>
                                {`${(num1s/numRevs)*100}%`}
                        </label><br/>
                    </section>
                    <section id="review-prod">
                        <h3>Review this product</h3>
                        <p>Share your thoughts with other customers</p>
                        {reviewButton}
                    </section>
                </span>
                <Reviews match={this.props.match} reviews={this.props.reviews} refPos={this.props.refPos}/>
            </div>
        )
    }
}

export default AnimeShow;