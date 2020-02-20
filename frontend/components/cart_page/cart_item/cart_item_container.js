import { deleteCartItem, updateCartItem } from "../../../actions/cart_actions";
import { connect } from "react-redux";
import CartItem from "./cart_item";
import { withRouter } from "react-router-dom";

const mDTP = (dispatch) => ({
    updateCartItem: (purchaseForm) => dispatch(updateCartItem(purchaseForm)),
    deleteCartItem: (purchaseId) => dispatch(deleteCartItem(purchaseId))
});

export default withRouter(connect(null,mDTP)(CartItem));