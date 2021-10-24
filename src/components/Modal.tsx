import React from 'react';
import '../assets/scss/main.scss';
import Button from './Button';

interface IModalProps {
    text: string;
    isOpen: boolean;
}

interface IModalState {
    isOpen: boolean;
}

class Modal extends React.Component<IModalProps, IModalState> {

    constructor(props: IModalProps) {
        super(props);
        this.state = { isOpen: this.props.isOpen }
    }

    static defaultProps = {
        primary: false,
        size: 'medium',
    }

    public openModal = () => {
        this.setState({
            isOpen: true
        })
    }

    public closeModal = () => {
        this.setState({
            isOpen: false
        })
    }

    public render() {
        return (
            <article className={`modal ${this.state.isOpen && "is-open"}`}>
                <div className='container'>
                    <button className='modal-close' onClick={this.closeModal}>X</button>
                    <h3>
                        {this.props.text}
                    </h3>
                </div>
            </article>
        );
    }
}

export default Modal;