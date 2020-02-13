import { connect } from "react-redux";
import NotFoundPage from "./not_found";

const mSTP = (state) => ({
    shouldGreyOut: Boolean(state.ui.navDropdown)
});

export default connect(mSTP)(NotFoundPage);