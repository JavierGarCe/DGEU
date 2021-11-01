import React from 'react';
import '../assets/scss/main.scss';
import Button from './Button';
import { faFilter, faSearch } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Dropdown from './Dropdown';
import Service from './Service';

interface iContainerProps {
  services: string[][];
  title: string;
}

interface iContainerState {
  search: string;
}


class Container extends React.Component<iContainerProps, iContainerState> {

  constructor(props: iContainerProps) {
    super(props);
    this.state = {search: ''}
  }

  public render() {
    return (
      <div className="container-fluid" id="containerEnvelope">
        <div className="row">
          <div className="col-6">
            <h1>{this.props.title}</h1>
          </div>
          <div className="col-2">
            <div id="bottomPart" className="form-inline my-2 my-lg-0">
              <input value={this.state.search} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(e)=>{this.setState({search: e.target.value})}} />
              <FontAwesomeIcon icon={faSearch} size={'2x'}/>
            </div>
          </div>
          <div className="col-1" id="containerDropFather">
          <div id="containerDropFather">
            <Dropdown options={['Option1', 'Option1']} title={''} collapsed={true} icon={faFilter} />
          </div>
          </div>
        </div>
        <div className="row" id="containerMargins">
          {this.props.services.map((s, i) => (
            <div className="col">
              <Service title={s[0]} description={s[1]} imageUrl={s[2]} type={s[3]}/>
            </div>
          ))}
        </div>
      </div>
    );
  }
}

const css = `#containerDropFather{position: absolute;top: 10px; right:10px;}`;
document.head.appendChild(document.createElement("style")).textContent = css;

const css2 = `#containerMargins{margin:50px;}`;
document.head.appendChild(document.createElement("style")).textContent = css2;


export default Container;