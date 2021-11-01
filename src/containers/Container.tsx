import { connect } from "react-redux";
import Container from "../components/Container";
import IGlobalState from "../state/globalState";
import { Dispatch } from "redux";

interface OwnProps {
    services: string[][];
    title: string;
}

const mapStateToProps = (state: IGlobalState, ownProps: OwnProps) => {
    return({services: ownProps.services, title: ownProps.title, type: state.servicesType})
}

// const mapDispatchToProps = (dispatch: Dispatch) => ({
//     onRotateClick: (rotateLeft: boolean) => {
//         dispatch({type: 'ROTATE', payload: rotateLeft})    
//     }
// })

export default connect(mapStateToProps)(Container);