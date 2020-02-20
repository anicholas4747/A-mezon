import { connect } from "react-redux";
import Cart from "./cart";
import { fetchCart, deleteCartItem } from "../../actions/cart_actions";
import { navLiClicked, navDropdown, searchDropdownHide } from "../../actions/ui_actions";

const mSTP = (state) => ({
    shouldGreyOut: Boolean(state.ui.navDropdown),
    currentUser: state.session.currentUser,
    cart: state.session.cart
});

const mDTP = (dispatch) => ({
    fetchCart: (cartId) => dispatch(fetchCart(cartId)),
    deleteCartItem: (purchaseId) => dispatch(deleteCartItem(purchaseId)),
    navLiClicked: (bool) => dispatch(navLiClicked(bool)),
    navDropdown: (bool) => dispatch(navDropdown(bool)),
    searchDropdownHide: (bool) => dispatch(searchDropdownHide(bool))
});

export default connect(mSTP,mDTP)(Cart);