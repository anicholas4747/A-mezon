import * as CartAPIUtil from '../util/cart_api_util';

export const RECEIVE_CART = "RECEIVE_CART";

export const receiveCart = (cart) => ({
    type: RECEIVE_CART,
    cart
});

export const fetchCart = (cartId) => dispatch => (
    CartAPIUtil.fetchCart(cartId)
        .then((cart) => dispatch(receiveCart(cart)))
); 

export const addToCart = (purchaseForm) => dispatch => (
    CartAPIUtil.addToCart(purchaseForm)
        .then((cart) => dispatch(receiveCart(cart)))
);

export const updateCartItem = (purchaseForm) => dispatch => (
    CartAPIUtil.updateCartItem(purchaseForm)
        .then((cart) => dispatch(receiveCart(cart)))
);

export const deleteCartItem = (purchaseId) => dispatch => (
    CartAPIUtil.deleteCartItem(purchaseId)
        .then((cart) => dispatch(receiveCart(cart)))
);
