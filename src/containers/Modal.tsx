import { connect } from "react-redux";
import Modal from "../components/Modal";
import IGlobalState from "../state/globalState";
import { Dispatch } from "redux";

interface ComponentOwnProps {
    text: string;
}

const mapStateToProps = (state: IGlobalState, ownProps: ComponentOwnProps) => {
    return({isOpen: state.showModal, text: ownProps.text})
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onModalClick: (modalOpen: boolean) => {
        dispatch({type: 'MODAL', payload: modalOpen})    
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Modal);