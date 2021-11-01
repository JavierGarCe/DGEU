import React from 'react';
import '../assets/scss/main.scss';


interface iServiceProps {
  title: string;
  description: string;
  imageUrl: string;
  type: string;
}


class News extends React.Component<iServiceProps> {

  constructor(props: iServiceProps) {
    super(props);
  }

  public render() {
    return (
      <div className="card" id="serviceEnvelope">
        <img className="img-thumbnail" src={this.props.imageUrl} />
        <div className="card-body">
          <h5 className="card-title">{this.props.title}</h5>
          <p className="card-text">{this.props.description}</p>
        </div>
      </div>
    );
  }
}

export default News;