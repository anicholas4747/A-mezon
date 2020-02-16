import { connect } from "react-redux";
import LangSelect from "./lang_select";
import { receiveLanguage } from "../../actions/lang_actions";


const mSTP = state => ({
    shouldGreyOut: Boolean(state.ui.navDropdown),
    language: state.ui.language
});

const mDTP = dispatch => ({
    changeLang: (lang) => dispatch(receiveLanguage(lang))
});

export default connect(mSTP,mDTP)(LangSelect);