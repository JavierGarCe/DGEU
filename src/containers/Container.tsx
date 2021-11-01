import { connect } from "react-redux";
import Container from "../components/Container";
import IGlobalState from "../state/globalState";
import { Dispatch } from "redux";

interface OwnProps {
    services: string[][];
    title: string;
}

const mapStateToProps = (state: IGlobalState, ownProps: OwnProps) => {
    return({services: ownProps.services, title: ownProps.title, type: state.servicesType, searchTerm: state.serviceSearch})
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onSearch: (searchParam: string) => {
        dispatch({type: 'SEARCH', payload: searchParam})    
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Container);