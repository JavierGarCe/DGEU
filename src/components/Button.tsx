import React from 'react';
import '../assets/scss/main.scss';

import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

interface IButtonProps {
  backgroundColor: string;
  icon?: IconDefinition;
  size: 'small' | 'medium' | 'large';
  label: string;
  context: string;
  onPressButton: (content: string, contextType:string) => any; 
}

class Button extends React.Component<IButtonProps> {

  public render() {
    const { size, backgroundColor, label, ...props } = this.props;

    const handleButton = () => {
      this.props.onPressButton(this.props.label, this.props.context);
    }

    return (
      <button
        type="button"
        onClick={handleButton}
        className={['storybook-button', `storybook-button--${size}`].join(' ')}
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