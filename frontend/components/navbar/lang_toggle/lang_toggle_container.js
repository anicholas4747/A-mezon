import { navDropdown, navLiClicked, searchDropdownHide } from "../../../actions/ui_actions";
import { connect } from "react-redux";
import LangToggle from "./lang_toggle";

const mapStateToProps = (state) => ({
    language: state.ui.language,
    liClicked: Boolean(state.ui.navLiClicked)
});

const mapDispatchToProps = (dispatch) => ({
    navDropdown: (bool) => dispatch(navDropdown(bool)),
    navLiClicked: (bool) => dispatch(navLiClicked(bool)),
    searchDropdownHide: (bool) => dispatch(searchDropdownHide(bool))
});

export default connect(mapStateToProps,mapDispatchToProps)(LangToggle);