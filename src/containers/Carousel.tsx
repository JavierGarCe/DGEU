import { connect } from "react-redux";
import Carousel from "../components/Carousel";
import IGlobalState from "../state/globalState";
import { Dispatch } from "redux";

const mapStateToProps = (state: IGlobalState) => {
    return({index: state.carouselIndex})
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onRotateClick: (rotateLeft: boolean) => {
        dispatch({type: 'ROTATE', payload: rotateLeft})    
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Carousel);