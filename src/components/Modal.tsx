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
                    <p className='bodyText'>
                        {this.props.text}
                    </p>
                </div>
            </article>
        );
    }
}

const css = `.bodyText{text-align: justify; padding: 30px;}`;
document.head.appendChild(document.createElement("style")).textContent = css;

export default Modal;