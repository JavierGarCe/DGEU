import { connect } from "react-redux";
import Main from "../components/Main";
import IGlobalState from "../state/globalState";

const mapStateToProps = (state: IGlobalState) => {
    return({content: state.mainContent})
}

export default connect(mapStateToProps)(Main);