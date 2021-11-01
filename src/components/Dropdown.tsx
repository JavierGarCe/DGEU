import React from 'react';
import '../assets/scss/main.scss';
import Button from '../containers/Button';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


interface IDropdownProps {
  options: string[];
  title: string;
  collapsed: boolean;
  icon: IconDefinition;
  isGlobal: boolean; 
}

interface iDropdownState {
  collapsed: boolean;
}

class Dropdown extends React.Component<IDropdownProps, iDropdownState> {

  constructor(props: IDropdownProps) {
    super(props);
    this.state = { collapsed: this.props.collapsed }
  }

  public toggleSelect = () => {
    this.setState({
      collapsed: !!!this.state.collapsed
    })
  }

  public render() {

    return (
      <div id='menu' className="btn-group">
        <div onClick={this.toggleSelect} className='dropdown-toggle' data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
          <button
            type="button"
            onClick={this.toggleSelect}
            className={['storybook-button', `storybook-button--medium`].join(' ')}
          >
            {this.props.icon != undefined ? <FontAwesomeIcon icon={this.props.icon} /> : null}
            {' Opciones'}
          </button>
        </div>
        <div>
          {this.state.collapsed ? null : this.props.options.map((optionName, i) => (
            <div className="dropdown-item" id="textRight">{optionName}</div>
          ))}
        </div>
      </div>
    );
  }
}

const css = `#textRight{text-align: right;}`;
document.head.appendChild(document.createElement("style")).textContent = css;

export default Dropdown;