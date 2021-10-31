import React from 'react';
import '../assets/scss/main.scss';
import Dropdown from './Dropdown';
import { faBars } from '@fortawesome/free-solid-svg-icons';

interface iHeaderProps {
  collapsed: boolean;
}

interface iHeaderState {
  collapsed: boolean;
}

class Header extends React.Component<iHeaderProps, iHeaderState> {

  constructor(props: iHeaderProps) {
    super(props);
    this.state = { collapsed: true }
  }

  public toggleHeader = () => {
    this.setState({
      collapsed: !!!this.state.collapsed
    })
  }

  public render() {
    return (
      <div className="row">
        <nav className="navbar navbar-light bg-light">
          <a className="navbar-brand" href="#">
            <img src="https://www.seg-social.es/wps/contenthandler/wss/!ut/p/digest!WHWfHqZ5Ujcl-nn1gtCB9Q/war/POINThemeStatic/themes/Portal8.5/css/img/logo-institucional.png" height={30} className="d-inline-block align-top" alt="" />
            <img src="https://www.seg-social.es/wps/contenthandler/wss/!ut/p/digest!WHWfHqZ5Ujcl-nn1gtCB9Q/war/POINThemeStatic/themes/Portal8.5/css/img/logo.png" height={40} className="d-inline-block align-top" alt="" />
          </a>

          <Dropdown options={['Consultas', 'Sugerencias', 'Idioma']} title={'Options'} collapsed={true} icon={faBars} />

        </nav>
      </div>
    );
  }
}

export default Header;