import React from 'react';
import '../assets/scss/main.scss';
import Button from "../stories/Button"
import News from "../stories/News";
import Modal from "../stories/Modal";
import Carousel from '../stories/Carousel';
// interface IMainProps { // propiedades se establecen al crear el componente y no cambian
// }

// interface iMainState { //estado si
// }

class Main extends React.Component {
    public render () {
        return (
            <div className='main'>
                {/* <Button pressed={false} text={'Button 1'} />
                <Button pressed={false} text={'Button 2'} />
                <Button pressed={false} text={'Button 3'} />
                <Button pressed={false} text={'Button 4'} /> */}
                <Button label={'Inicio'} pressed={false} />
                <Button label={'Conocenos'} pressed={false} />
                <Button label={'Trabajadores'} pressed={false} />
                <Button label={'Pensionistas'} pressed={false} />
                <Button label={'Empresarios'} pressed={false} />
                <News title={'undefined'} subtitle={'undefined'} author={'undefined'} body={'undefined'} date={'undefined'} imageUrl={'undefined'} collapsed={true} />
                <Modal text={'test'} isOpen={false}/>
                <Carousel/>
            </div>
            );
    }
}

export default Main;