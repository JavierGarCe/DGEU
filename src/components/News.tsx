import React from 'react';
import '../assets/scss/main.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faCalendar } from '@fortawesome/free-solid-svg-icons';
import Modal from '../containers/Modal';


interface iNewsProps {
    title: string;
    subtitle: string;
    author: string;
    body: string;
    date: string;
    imageUrl: string;
    collapsed: boolean;
    onShowClick: (collaped: boolean) => any;
}


class News extends React.Component<iNewsProps> {

    public render() {

        const onShowClick = () => {
            this.props.onShowClick(true);
        }

        return (
            <div className="card" id="newsCard">
                <img className="card-img-top" width={50} height={300} src={this.props.imageUrl} />
                <div className="card-body">
                    <h5 className="card-title">{this.props.title}</h5>
                    <p className="card-text">{this.props.subtitle}</p>
                </div>
                <div className="card-footer">
                    <small className="text-muted" id="bottomPart">
                        <div >
                            <FontAwesomeIcon icon={faUser} />
                            {
                                '  ' + this.props.author
                            }
                        </div>
                        <div>
                            <FontAwesomeIcon icon={faCalendar} />
                            {
                                '  ' + this.props.date
                            }
                        </div>

                    </small>
                </div>

                <button type="button" className="btn btn-primary" data-toggle="modal" data-target=".bd-example-modal-sm" onClick={onShowClick} >Ver noticia</button>

                <Modal text={this.props.body} />

            </div>
        );
    }
}

export default News;