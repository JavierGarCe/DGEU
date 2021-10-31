import { connect } from "react-redux";
import Button from "../components/Button";
import IGlobalState from "../state/globalState";
import { Dispatch } from "redux";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";

interface ComponentOwnProps {
  backgroundColor: string;
  icon: IconDefinition;
  size: 'small' | 'medium' | 'large';
  label: string;
}

const mapStateToProps = (state: IGlobalState, ownProps: ComponentOwnProps) => {
    return({backgroundColor: ownProps.backgroundColor, icon: ownProps.icon, size: ownProps.size, label: ownProps.label, collapsed: state.showModal})
}

const mapDispatchToProps = (dispatch: Dispatch) => ({
    onPressButton: (content: string) => {
        dispatch({type: 'CONTENT', payload: content})    
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(Button);