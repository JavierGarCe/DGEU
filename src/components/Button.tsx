import React from 'react';

interface IButtonProps { 
    pressed: boolean;
    text: string;
}

interface iButtonState { 
    pressed: boolean;
}

class Button extends React.Component<IButtonProps, iButtonState> {
    constructor(props: IButtonProps) {
        super(props);
        this.state = {pressed: false}
    }

    public toggleButton = () => {
        this.setState({
            pressed: !!!this.state.pressed
        })
    }

    public render () {
        return (
            <div className={this.state.pressed ? 'btn btn-secondary' : 'btn btn-light'} onClick={this.toggleButton}>
                {this.props.text}
            </div>
            );
    }
}

export default Button;