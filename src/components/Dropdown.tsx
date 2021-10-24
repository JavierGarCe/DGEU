import React from 'react';
import '../assets/scss/main.scss';
import Button from './Button';
import { IconDefinition } from '@fortawesome/free-solid-svg-icons';


interface IDropdownProps {
  options: String[];
  title: String;
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
          <Button pressed={false} label={this.props.title} icon={this.props.icon} />
        </div>
        <div>
          {this.state.collapsed ? null : this.props.options.map((optionName, i) => (
            <a className="dropdown-item" href="#">{optionName}</a>
          ))}
        </div>
      </div>
    );
  }
}

export default Dropdown;