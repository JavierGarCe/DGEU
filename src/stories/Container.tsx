import React from 'react';
import '../assets/scss/main.scss';
import Button from './Button';
import { faFilter } from '@fortawesome/free-solid-svg-icons';
import Dropdown from './Dropdown';
import Service from './Service';

interface iContainerProps {
  services: string[][];
  title: string;
}


class News extends React.Component<iContainerProps> {

  constructor(props: iContainerProps) {
    super(props);
  }

  public render() {
    return (
        <div className="container-fluid" id="containerEnvelope">
        <div className="row">
          <div className="col-11">
            <h1>{this.props.title}</h1>
          </div>
          <div className="col">
            <Dropdown options={['Option1', 'Option1']} title={''} collapsed={true} icon={faFilter} />
          </div>
        </div>
        <div className="row">
            {this.props.services.map((s, i)=>(
                <div className="col">
                    <Service title={s[0]} description={s[1]} imageUrl={s[2]} />
              </div>
            ))}
        </div>
      </div>
    );
  }
}

const css = `#containerEnvelope{background-color: #f7f7f7; padding: 10px;}`;
document.head.appendChild(document.createElement("style")).textContent = css;

export default News;