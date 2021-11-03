import React from 'react';
import '../assets/scss/main.scss';
import { faFilter, faSearch } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Button from '../containers/Button';
import Service from './Service';
import { faBars } from '@fortawesome/free-solid-svg-icons';

interface iContainerProps {
  services: string[][];
  title: string;
  type: string;
  onSearch: (searchParam: string) => any;
  searchTerm: string;
}




class Container extends React.Component<iContainerProps> {

  public render() {

    const handleSearch = (searchTerm: string) => {
      this.props.onSearch(searchTerm);
    }

    return (
      <div className="container-fluid" id="containerEnvelope">
        <div className="row">
          <div className="col-3" id="mainContent">
            <h1>{this.props.title}</h1>
          </div>
          <div className="col-3">
            <div id="bottomPart" className="form-inline my-2 my-lg-0">
              <input value={this.props.searchTerm} className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" onChange={(e) => {handleSearch(e.target.value)}} />
              <FontAwesomeIcon icon={faSearch} size={'2x'} />
            </div>
          </div>
          <div className="col" >
              <Button label={'Administración'}  backgroundColor={'#006f93'} size={'medium'} context={'services'} />
          </div>
          <div className="col" >
              <Button label={'Ayuda'}  backgroundColor={'#006f93'} size={'medium'} context={'services'} />
          </div>
          <div className="col" >
              <Button label={'Comunicación'}  backgroundColor={'#006f93'} size={'medium'} context={'services'} />
          </div>
          <div className="col" >
             <Button label={'Destacados'}  backgroundColor={'#006f93'} size={'medium'} context={'services'} />
          </div>
          <div className="col" >
              <Button label={'Estadistica'}  backgroundColor={'#006f93'} size={'medium'} context={'services'} />
          </div>
          <div className="col" >
              <Button label={'Sede electrónica'}  backgroundColor={'#006f93'} size={'medium'} context={'services'} />
          </div>
        </div>
        <div className="row" id="containerMargins">
          {this.props.services.map((s, i) => {
            if (s[3] == this.props.type && (this.props.searchTerm == '' || s[0].toLowerCase().includes(this.props.searchTerm.toLowerCase()))) {
              return (
                <div className="col">
                  <Service title={s[0]} description={s[1]} imageUrl={s[2]} type={s[3]} />
                </div>
              )
            }

          })}
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