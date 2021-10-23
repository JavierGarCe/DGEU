import React from 'react';

interface IHreaderProps { // propiedades se establecen al crear el componente y no cambian
    collapsed: boolean;
}

interface iHeaderState { //estado si
    collapsed: boolean;
}

class Header extends React.Component<IHreaderProps, iHeaderState> {
    constructor(props: IHreaderProps) {
        super(props);
        this.setState({
            collapsed: true
        })
    }

    public render () {
        return (<p>Hola Mundo: {this.props.collapsed ? 'collapsed': 'shown'}</p>);
    }
}

export default Header;