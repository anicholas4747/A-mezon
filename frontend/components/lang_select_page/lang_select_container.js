import { connect } from "react-redux";
import LangSelect from "./lang_select";
import { receiveLanguage } from "../../actions/lang_actions";
import { navLiClicked, navDropdown, searchDropdownHide } from "../../actions/ui_actions";


const mSTP = state => ({
    shouldGreyOut: Boolean(state.ui.navDropdown),
    language: state.ui.language
});

const mDTP = dispatch => ({
    navLiClicked: (bool) => dispatch(navLiClicked(bool)),
    navDropdown: (bool) => dispatch(navDropdown(bool)),
    searchDropdownHide: (bool) => dispatch(searchDropdownHide(bool)),
    changeLang: (lang) => dispatch(receiveLanguage(lang))
});

export default connect(mSTP,mDTP)(LangSelect);