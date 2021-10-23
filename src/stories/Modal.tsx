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
        this.state = {isOpen: this.props.isOpen}
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

const css = `.modal{
    position: fixed;
    z-index: 999;
    top: 0;
    left: 0;
    width: 100%;
    min-height: 100vh;
    background-color: rgba(0,0,0,.75);
    display: none;
    justify-content: center;
    align-content: center;
    }`;

const css2 = `.modal.is-open{
        display: flex;
        }`;

const css3 = `.container{
    position: relative;
    min-width: 320px;
    max-width: 480px;
    min-heigth: 200px;
    min-heigth: 600px;
    overflow-y: auto;
    background-color: #fff;
}`;

const css4 = `.modal-close{
    position: absolute;
    top: 1rem;
    right: 1rem;
}`;

document.head.appendChild(document.createElement("style")).textContent = css;
document.head.appendChild(document.createElement("style")).textContent = css2;
document.head.appendChild(document.createElement("style")).textContent = css3;
document.head.appendChild(document.createElement("style")).textContent = css4;

export default Modal;