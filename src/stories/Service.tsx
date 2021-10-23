import React from 'react';
import '../assets/scss/main.scss';
import Button from './Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { faUser, faCalendar } from '@fortawesome/free-solid-svg-icons';


interface iServiceProps {
  title: string;
  description: string;
  imageUrl: string;
}


class News extends React.Component<iServiceProps> {

  constructor(props: iServiceProps) {
    super(props);
  }

  public render() {
    return (
      <div className="card" id="serviceEnvelope">
        <img className="card-img-top" src={this.props.imageUrl} />
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.description}</p>
        </div>
      </div>
    );
  }
}

const css = `#serviceEnvelope{width: 18rem; padding: 10px;}`;
const css2 = `#bottomPart{display: flex; justify-content: space-between;}`;
document.head.appendChild(document.createElement("style")).textContent = css;
document.head.appendChild(document.createElement("style")).textContent = css2;

export default News;