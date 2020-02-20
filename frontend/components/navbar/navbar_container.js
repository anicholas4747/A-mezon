import { connect } from "react-redux";
import NavBar from "./navbar";
import { fetchAnimeTitles, fetchOneAnime, searchAnime } from "../../actions/anime_actions";
import { navDropdown, navLiClicked, searchDropdownHide } from "../../actions/ui_actions";
import { fetchProfile } from "../../actions/profile_actions";
import { fetchCart } from "../../actions/cart_actions";


const mapStateToProps = (state) => ({
    isLoggedIn: Boolean(state.session.currentUser.id),
    currentUser: state.session.currentUser,
    anime: state.entities.anime,
    language: state.ui.language,
    liClicked: Boolean(state.ui.navLiClicked),
    cart: state.session.cart
});

const mapDispatchToProps = (dispatch) => ({
    fetchAnimeTitles: () => dispatch(fetchAnimeTitles()),
    fetchOneAnime: (animeTitle) => dispatch(fetchOneAnime(animeTitle)),
    navDropdown: (bool) => dispatch(navDropdown(bool)),
    navLiClicked: (bool) => dispatch(navLiClicked(bool)),
    searchDropdownHide: (bool) => dispatch(searchDropdownHide(bool)),
    fetchProfile: (username) => dispatch(fetchProfile(username)),
    fetchCart: (cartId) => dispatch(fetchCart(cartId)),
    searchAnime: (searchParams) => dispatch(searchAnime(searchParams))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);