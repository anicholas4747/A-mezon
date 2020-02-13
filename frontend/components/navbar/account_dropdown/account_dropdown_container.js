import { connect } from "react-redux";
import AccountDropdown from "./account_dropdown";
import { withRouter } from "react-router-dom";
import { navDropdown, navLiClicked } from "../../../actions/ui_actions";
import { logout } from "../../../actions/session_actions";


const mapStateTopProps = (state) => ({
    currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    navDropdown: (bool) => dispatch(navDropdown(bool)),
    navLiClicked: () => dispatch(navLiClicked())
});


export default withRouter(connect(mapStateTopProps,mapDispatchToProps)(AccountDropdown));