import React, { Component } from 'react';
import CartItem from './cart_item/cart_item_container';
import { Link } from 'react-router-dom';

class Cart extends Component{
    constructor(props){
        super(props);
        this.handleGoToCheckout = this.handleGoToCheckout.bind(this);
        this.handleModalOff = this.handleModalOff.bind(this);
    }

    handleModalOff(e) {
        e.preventDefault();
        this.props.navLiClicked(true);
        this.props.navDropdown(false);
        this.props.searchDropdownHide(true);
    }

    handleGoToCheckout(e){
        e.preventDefault();
        this.props.history.push('/checkout');
    }

    componentDidMount(){
        if (this.props.refPos.current !== null) {
            this.props.refPos.current.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
        this.props.fetchCart(this.props.currentUser.cartId);
    }

    render(){
        const modalToggle = ((this.props.shouldGreyOut) ? "modal-on" : "modal-off");

        let totalCartQty = 0;
        this.props.cart.forEach(item => {
            totalCartQty = totalCartQty + item.quantity;
        });

        if (totalCartQty === 0){
            return (
                <div className="cart-page">
                    <div className={modalToggle} onClick={this.handleModalOff}>.</div>
                    <h1>Your Shopping Cart is empty.</h1>
                    <p id="empty-cart">Your Shopping Cart lives to serve. Give it purpose — fill it with<Link to="/s?all&page=1">anime</Link>!</p>
                    {(!Boolean(this.props.currentUser.id)) ? <p id="empty-cart">If you already have an account,<Link to="signin?verify_email">Sign In</Link> to see your Cart.</p> : null}
                    <p id="empty-cart-last">Continue shopping on the<Link to="/">Aにmezon.com homepage</Link>.</p>
                </div>
            )
        } else {
            // no duplicates in cart
            const mappingCartObj = {};
            this.props.cart.forEach((item)=>{
                if (mappingCartObj[item.title] === undefined) {
                    mappingCartObj[item.title] = {
                        id: item.id,
                        quantity: item.quantity,
                        anime_id: item.anime_id,
                        title: item.title,
                        price: item.price,
                        studioName: item.studioName
                    };
                } else {
                    mappingCartObj[item.title] = {
                        id: item.id,
                        quantity: (item.quantity + mappingCartObj[item.title].quantity),
                        anime_id: item.anime_id,
                        title: item.title,
                        price: item.price,
                        studioName: item.studioName
                    };
                }
            });

            const mappingCart = Object.values(mappingCartObj);

            const cartItems = mappingCart.map((item) => {
                return (
                    <CartItem item={item} key={Date.now() + Math.random()}/>
                )
            });

            let subTotal = 0;
            mappingCart.forEach((item) => {
                subTotal = subTotal + (item.quantity * item.price);
            });
            subTotal = subTotal.toFixed(2).toString();
            if (subTotal.length > 6) {
                let newSubTotal = "";
                let j = 1;
                for (let i = (subTotal.length - 1); i >= 0 ; i--){
                    if([6,9,12,15].includes(j)){
                        newSubTotal = ",".concat(subTotal[i],newSubTotal);
                    } else {
                        newSubTotal = subTotal[i].concat(newSubTotal);
                    }
                    j++;
                }
                subTotal = newSubTotal;
            }

            const subTotalLine = (totalCartQty === 1) ? (
                <span id="subtotal" key={Date.now() + Math.random()}>
                    <h3 id="subtotal-is">Subtotal: ({totalCartQty} item):</h3>
                    <h3 className="cart-price">${subTotal}</h3>
                </span>
            ) : (
                    <span id="subtotal" key={Date.now() + Math.random()}>
                        <h3 id="subtotal-is">Subtotal ({totalCartQty} items):</h3>
                        <h3 className="cart-price">${subTotal}</h3>
                    </span>
            );

            return (
                <div className="cart-page">
                    <div className={modalToggle} onClick={this.handleModalOff}>.</div>
                    <section id="main-cart">
                        <h1>Shopping Cart</h1>
                        <p>Price</p>
                        <ul id="cart-items">
                            {cartItems}
                            {subTotalLine}
                        </ul>
                    </section>
                    <span id="cart-page-checkout-box">
                        <div id="checkout-box-top-line">
                            <img src={window.greenCheck}/>
                            <p id="stock">Your order qualifies for FREE Shipping.</p>
                        </div>
                        <div id="sub">{subTotalLine}</div>
                        <button onClick={this.handleGoToCheckout}>Proceed to checkout</button>
                    </span>
                </div>
            )
        }

    }
}

export default Cart;