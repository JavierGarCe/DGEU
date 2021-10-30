import React from 'react';
import '../assets/scss/main.scss';
import Button from './Button';

interface IModalProps {
    text: string;
    isOpen: boolean;
    onModalClick: (modalOpen: boolean) => any;
}

class Modal extends React.Component<IModalProps> {

    public render() {

        const handleModal = () => {
            this.props.onModalClick(false);
        }

        return (
            <article className={`modal ${this.props.isOpen && "is-open"}`}>
                <div className='container'>
                    <button className='modal-close' onClick={handleModal}>X</button>
                    <h3>
                        {this.props.text}
                    </h3>
                </div>
            </article>
        );
    }
}

export default Modal;