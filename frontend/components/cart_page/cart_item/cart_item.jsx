import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class CartItem extends Component{
    constructor(props){
        super(props);
        this.state = {
            quantity: this.props.item.quantity
        };
        this.handleQuantity = this.handleQuantity.bind(this);
        this.handleDeleteItem = this.handleDeleteItem.bind(this);
    }

    handleQuantity(e){
        e.preventDefault();
        const newQty = e.target.value;
        if (e.target.value === "0"){
            this.props.deleteCartItem(this.props.item.id);
        } else {
            const purchaseForm = {
                id: this.props.item.id,
                anime_id: this.props.item.anime_id,
                quantity: parseInt(newQty)
            };
            this.props.updateCartItem(purchaseForm);
        }
    }

    handleDeleteItem(e){
        e.preventDefault();
        this.props.deleteCartItem(this.props.item.id);
    }

    render(){
        const { item } = this.props;

        const qtyOptions = [];
        const qtys = (item.quantity < 20) ? 20 : item.quantity;
        
        for (let i = 1; i <= qtys; i++) {
            qtyOptions.push(<option key={`${item.title}-${i}${Date.now() + Math.random()}`} value={i}>Qty: {i}</option>)
        }

        const subTotal = item.price * item.quantity;

        return (
            <li id="cart-item" key={`${item.title}${item.quantity}${Date.now()+ Math.random()}`}>
                <img onClick={() => this.props.history.push(`/anime?${item.title.split(" ").join("-")}`)} src={window.animePH}/>
                <span id="cart-item-details">
                    <div id="cart-item-title-line">
                        <Link to={`/anime?${item.title.split(" ").join("-")}`}>
                            {item.title}
                        </Link>
                        <p>by <Link to={`/studio?${item.studioName.split(" ").join("-")}`}>{item.studioName}</Link></p>
                    </div>
                    <p id="stock">In Stock</p>
                    <p id="eligible">Eligible for FREE Shipping</p>
                    <div id="cart-item-bottom-line">
                        <select id="qty" onChange={this.handleQuantity} defaultValue={this.state.quantity}>
                            <option value="0" key={`0for${item.title}-${0}${Date.now() + Math.random()}`}>0 (Delete)</option>
                            {qtyOptions}
                        </select>
                        <a onClick={this.handleDeleteItem}>Delete</a>
                    </div>
                </span>
                <h3 className="cart-price">${subTotal.toFixed(2)}</h3>
            </li>
        )
    }
}

export default CartItem;