import { connect } from "react-redux";
import AccountDropdown from "./account_dropdown";
import { withRouter } from "react-router-dom";
import { navDropdown, navLiClicked } from "../../../actions/ui_actions";
import { logout } from "../../../actions/session_actions";


const mapStateToProps = (state) => ({
    currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({
    logout: () => dispatch(logout()),
    navDropdown: (bool) => dispatch(navDropdown(bool)),
    navLiClicked: (bool) => dispatch(navLiClicked(bool))
});


export default withRouter(connect(mapStateToProps,mapDispatchToProps)(AccountDropdown));