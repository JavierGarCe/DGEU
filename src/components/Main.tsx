import React from 'react';
import '../assets/scss/main.scss';
import Button from "./Button"
import News from "./News";
import Modal from "./Modal";
import Carousel from './Carousel';
import Container from './Container';

class Main extends React.Component {
    public render() {
        return (
            <div className='main'>
                <Button label={'Inicio'} pressed={false} />
                <Button label={'Conocenos'} pressed={false} />
                <Button label={'Trabajadores'} pressed={false} />
                <Button label={'Pensionistas'} pressed={false} />
                <Button label={'Empresarios'} pressed={false} />
                <Container services={[['']]} title={'Titulo'} />
            </div>
        );
    }
}

export default Main;