import { connect } from "react-redux";
import AccountDropdown from "./account_dropdown";
import { withRouter } from "react-router-dom";


const mapStateTopProps = (state) => ({
    currentUser: state.session.currentUser
});

const mapDispatchToProps = (dispatch) => ({

});

export default withRouter(connect(mapStateTopProps,mapDispatchToProps)(AccountDropdown));