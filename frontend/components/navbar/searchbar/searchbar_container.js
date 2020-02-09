import { connect } from "react-redux";
import SearchBar from "./searchbar";

const mapStateToProps = () => ({
    genres: []
});

const mapDispatchToProps = () => ({

});

export default connect(mapStateToProps,mapDispatchToProps)(SearchBar);