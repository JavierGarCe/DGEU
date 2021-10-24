import React from 'react';
import '../assets/scss/main.scss';

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IButtonProps {
  pressed: boolean;
  backgroundColor?: string;
  icon?: IconDefinition;
  size?: 'small' | 'medium' | 'large';
  label: String;
}

interface iButtonState {
  pressed: boolean;
}

class Button extends React.Component<IButtonProps, iButtonState> {

  constructor(props: IButtonProps) {
    super(props);
    this.state = { pressed: this.props.pressed }
  }

  static defaultProps = {
    primary: false,
    size: 'medium',
  }

  public toggleButton = () => {
    this.setState({
      pressed: !!!this.state.pressed
    })
  }

  public render() {
    const { pressed, size, backgroundColor, label, ...props } = this.props;
    const mode = this.state.pressed ? 'storybook-button--primary' : 'storybook-button--secondary';
    return (
      <button
        type="button"
        onClick={this.toggleButton}
        className={['storybook-button', `storybook-button--${size}`, mode].join(' ')}
        style={{ backgroundColor }}
        {...props}
      >
        {this.props.icon != undefined ? <FontAwesomeIcon icon={this.props.icon} /> : null}
        {' ' + label}

      </button>
    );
  }
}

export default Button;