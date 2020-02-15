import { navDropdown, navLiClicked } from "../../../actions/ui_actions";
import { connect } from "react-redux";
import LangToggle from "./lang_toggle";

const mapStateToProps = (state) => ({
    language: state.ui.language
});

const mapDispatchToProps = (dispatch) => ({
    navDropdown: (bool) => dispatch(navDropdown(bool)),
    navLiClicked: (bool) => dispatch(navLiClicked(bool))
});

export default connect(mapStateToProps,mapDispatchToProps)(LangToggle);