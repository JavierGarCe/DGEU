import { connect } from "react-redux";
import News from "../components/News";
import IGlobalState from "../state/globalState";
import { Dispatch } from "redux";

interface ComponentOwnProps {
    title: string;
    subtitle: string;
    author: string;
    body: string;
    date: string;
    imageUrl: string;
}

const mapStateToProps = (state: IGlobalState, ownProps: ComponentOwnProps) => {
    return({title: ownProps.title, subtitle: ownProps.subtitle, author: ownProps.author, body: ownProps.body, date: ownProps.date, imageUrl: ownProps.imageUrl, collapsed: state.showModal})
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onShowClick: (collapsed: boolean) => {
        dispatch({type: 'MODAL', payload: collapsed})    
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(News);