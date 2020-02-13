import { connect } from "react-redux";
import NavBar from "./navbar";


const mapStateToProps = (state) => ({
    isLoggedIn: Boolean(state.session.currentUser.id),
    currentUser: state.session.currentUser
});

export default connect(mapStateToProps)(NavBar);