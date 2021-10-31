import React from 'react';
import '../assets/scss/main.scss';
import Button from '../containers/Button';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


interface IDropdownProps {
  options: String[];
  title: string;
  collapsed: boolean;
  icon: IconDefinition;
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
        <div id="dropDown">
          {this.state.collapsed ? null : this.props.options.map((optionName, i) => (
            <a className="dropdown-item" href="#">{optionName}</a>
          ))}
        </div>
      </div>
    );
  }
}

const css = `#dropDown{position: relative;}`;
document.head.appendChild(document.createElement("style")).textContent = css;

const css2 = `#menu{position: absolute;top: 10%; right: 10px;}`;
document.head.appendChild(document.createElement("style")).textContent = css2;

export default Dropdown;