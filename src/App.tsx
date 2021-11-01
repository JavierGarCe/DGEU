import React from 'react';
import './assets/scss/main.scss';
import Header from './components/Header';
import Carousel from './containers/Carousel';
import { Action, createStore } from 'redux';
import { Provider } from 'react-redux';
import IGlobalState, { initialState } from './state/globalState';
import { ICustomAction, IContentAction, IButtonAction } from './actions/customActions';
import Main from './containers/Main';
import Container from './containers/Container';

const reducer = (state: IGlobalState = initialState, action: Action) => {
  switch (action.type) {
    case 'ROTATE':
      const rotateAction = action as ICustomAction;
      if (rotateAction.payload) {
        // rotate left
        const expectedIndex = state.carouselIndex - 1;
        return { ...state, carouselIndex: expectedIndex < 0 ? 5 : expectedIndex }
      } else {
        // rotate right
        const expectedIndex = state.carouselIndex + 1;
        return { ...state, carouselIndex: expectedIndex > 5 ? 0 : expectedIndex }
      }

    case 'MODAL':
      const modalAction = action as ICustomAction;
      if (modalAction.payload) {
        // Opened
        return { ...state, showModal: true }
      } else {
        //Closed
        return { ...state, showModal: false }
      }

    case 'BUTTON':
      const buttonAction = action as IButtonAction;
      console.log(buttonAction.payload)
      console.log(buttonAction.context)
      if (buttonAction.context == 'main') {
        return { ...state, mainContent: buttonAction.payload }
      } else {
        return { ...state, servicesType: buttonAction.payload }
      }

  }
  return state;
}

const store = createStore(reducer, initialState);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header collapsed={true} />
        <Main />
        <Carousel />
        <Container services={[
          ['Adminstración', 'Acceso a la Web de Administración. Punto de acceso general.', 'https://www.seg-social.es/wps/wcm/connect/wss/d552f5c4-83fa-4a9b-a1da-8127342f149e/footer-slider-7-grey.gif?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_2G50H38209D640QTQ57OVB2000-d552f5c4-83fa-4a9b-a1da-8127342f149e-mfvMYuR', 'Administración'],
          ['Reutilización de Información', 'Acceso a Reutilización de Información Pública.', 'https://www.seg-social.es/wps/wcm/connect/wss/1d1a1fac-945e-4c57-bc7d-b3cf1ea54acb/footer-slider-5-grey.gif?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_2G50H38209D640QTQ57OVB2000-1d1a1fac-945e-4c57-bc7d-b3cf1ea54acb-mfvMYuR', 'Administración'],
          ['Transparencia', 'Acceso al Portal de la Transparencia.', 'https://www.seg-social.es/wps/wcm/connect/wss/0938361e-621c-439a-a765-da745674099c/footer-slider-10_GREY.gif?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_2G50H38209D640QTQ57OVB2000-0938361e-621c-439a-a765-da745674099c-mW7SKn8', 'Administracion'],
          ['Protección de datos', 'Acceso a la Seguridad Social - Protección de datos.', 'https://www.seg-social.es/wps/wcm/connect/wss/ea1d04db-3b5a-46dd-b383-06d20cd0b6aa/PDatosB.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_2G50H38209D640QTQ57OVB2000-ea1d04db-3b5a-46dd-b383-06d20cd0b6aa-mSdlJGF', 'Administración'],
          ['Lucha contra el Fraude', 'Acceso al Observatorio Lucha contra el Fraude a la Seguridad Social', 'https://www.seg-social.es/wps/wcm/connect/wss/badbf526-ee0d-48e6-b031-55ece861af41/Observatorio_BN.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_2G50H38209D640QTQ57OVB2000-badbf526-ee0d-48e6-b031-55ece861af41-nOU1xsD', 'Administración'],
          ['Cl@ve', 'Identidad Electrónica para las Administraciones.', 'https://www.seg-social.es/wps/wcm/connect/wss/0d9d2f6c-c133-4319-afc9-127e6af26f18/footer-slider-1-grey.gif?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_2G50H38209D640QTQ57OVB2000-0d9d2f6c-c133-4319-afc9-127e6af26f18-mSdlArq', 'Administración'],
          ['Seguridad Social Móvil', 'Acceso a toda la información por este medio.', 'https://www.seg-social.es/wps/wcm/connect/wss/6ec48f32-207a-46cb-a704-7f7a5719bf26/footer-slider-4-grey.gif?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_2G50H38209D640QTQ57OVB2000-6ec48f32-207a-46cb-a704-7f7a5719bf26-mfvMYuR', 'Administración'],
          ['Tarjeta Social', 'Acceso a Tarjeta Social Digital', 'https://www.seg-social.es/wps/wcm/connect/wss/e2847aec-6afd-4798-bb80-3d03fdc64c7f/TSU_Web_black.gif?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_2G50H38209D640QTQ57OVB2000-e2847aec-6afd-4798-bb80-3d03fdc64c7f-nh44gt3', 'Administración'],
          ['EUGO', 'Portal dirigido a empresarios y emprendedores.', 'https://www.seg-social.es/wps/wcm/connect/wss/dce9bc48-1fdf-4488-88bb-69be4bda7efa/footer-slider-3-grey.gif?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_2G50H38209D640QTQ57OVB2000-dce9bc48-1fdf-4488-88bb-69be4bda7efa-mfvMYuR', 'Administración'],
          ['BOE', 'Boletín Oficial del Estado.', 'https://www.seg-social.es/wps/wcm/connect/wss/6c6ef3d8-1e58-43d8-bce7-4eabdc0ba55a/footer-slider-6-grey.gif?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_2G50H38209D640QTQ57OVB2000-6c6ef3d8-1e58-43d8-bce7-4eabdc0ba55a-mfvMYuR', 'Administración'],
          ['Administración Electrónica', 'Desarrolle su actividad a través de las TIC.', 'https://www.seg-social.es/wps/wcm/connect/wss/4bb06d43-7345-4a9d-b94d-600dfdb690be/footer-slider-0-grey.gif?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_2G50H38209D640QTQ57OVB2000-4bb06d43-7345-4a9d-b94d-600dfdb690be-mfvMYuR', 'Administración'],
          ['Consultas y trámites','Recibe ayuda con tus consultas y trámites.','https://www.seg-social.es/wps/wcm/connect/wss/e1ff90eb-b046-434a-b873-ed60ba6a77f7/Icon_Web_Tramites.gif?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_2G50H38209D640QTQ57OVB2000-e1ff90eb-b046-434a-b873-ed60ba6a77f7-nq5HYqa', 'Ayuda'],
          ['Cita previa','Cita previa para pestaciones y otras gestiones.','https://www.seg-social.es/wps/wcm/connect/wss/c672a4ce-825f-4b1d-b733-847784e55bf7/Icon_Web_Cita.gif?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_2G50H38209D640QTQ57OVB2000-c672a4ce-825f-4b1d-b733-847784e55bf7-nbBHB.x', 'Ayuda'],
          ['Activa','Revista de la Seguridad Social.','https://www.seg-social.es/wps/wcm/connect/wss/358098a6-9079-46d2-954b-5d46c89eb533/activa.gif?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_2G50H38209D640QTQ57OVB2000-358098a6-9079-46d2-954b-5d46c89eb533-myp1cmU', 'Comunicación'],
          ['Gabinete de prensa','Consulta la actualidad en el Gabinete de prensa.','https://www.seg-social.es/wps/wcm/connect/wss/cd8b1f86-9d64-4643-8f2a-568b5bde6912/comunica.gif?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_2G50H38209D640QTQ57OVB2000-cd8b1f86-9d64-4643-8f2a-568b5bde6912-myp1cOs', 'Comunicación'],
          ['Revista Mar','Publicación mensual en formato PDF.','https://www.seg-social.es/wps/wcm/connect/wss/c3ca65b8-c109-4ba7-a12e-c69c1813036e/anchor_2.gif?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_2G50H38209D640QTQ57OVB2000-c3ca65b8-c109-4ba7-a12e-c69c1813036e-myp1bXh', 'Comunicación'],
          ['Ismarina','Publicaciones del Instituto Social de la Marina.','https://www.seg-social.es/wps/wcm/connect/wss/baded3aa-e4a2-405f-9630-ea4adc8331ca/LogoISM.gif?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_2G50H38209D640QTQ57OVB2000-baded3aa-e4a2-405f-9630-ea4adc8331ca-myp1bnk', 'Comunicación'],
          ['Normativa','','https://www.seg-social.es/wps/wcm/connect/wss/d4b0ab8c-ec38-47a6-ad3c-30f0a8d6f989/normativa.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_2G50H38209D640QTQ57OVB2000-d4b0ab8c-ec38-47a6-ad3c-30f0a8d6f989-mfvMYuR', 'Destacados'],
          ['Estadísticas, Presupuestos y Estudios','','https://www.seg-social.es/wps/wcm/connect/wss/3382b25d-bd06-49e1-b65e-af6368ed6ef8/EsPeEs.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_2G50H38209D640QTQ57OVB2000-3382b25d-bd06-49e1-b65e-af6368ed6ef8-mfvMYuR', 'Destacados'],
          ['Información Económico Financiera','','https://www.seg-social.es/wps/wcm/connect/wss/00331727-7c6c-4f06-998a-8535ce3dd941/calculator.gif?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_2G50H38209D640QTQ57OVB2000-00331727-7c6c-4f06-998a-8535ce3dd941-mfvMYuR', 'Destacados'],
          ['Direcciones y teléfonos','Encuentra tu oficina de Seguridad Social más cercana','https://www.seg-social.es/wps/wcm/connect/wss/5b427a49-dfb7-429c-8032-0089d0f8b10a/oficinas.gif?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_2G50H38209D640QTQ57OVB2000-5b427a49-dfb7-429c-8032-0089d0f8b10a-mfvMYuR', 'Destacados'],
          ['Pensiones', '', 'https://www.seg-social.es/wps/wcm/connect/wss/541e8e58-aa1e-4309-989e-73524809940b/estadiss_2021.gif?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_2G50H38209D640QTQ57OVB2000-541e8e58-aa1e-4309-989e-73524809940b-nEK435w', 'Estadistica'],
          ['Afiliación', '', 'https://www.seg-social.es/wps/wcm/connect/wss/5b30d23f-8369-467e-8468-2aa2c5168859/afilia.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_2G50H38209D640QTQ57OVB2000-5b30d23f-8369-467e-8468-2aa2c5168859-mfvMYuR', 'Estadistica'],
          ['Enfermedad profesional', '', 'https://www.seg-social.es/wps/wcm/connect/wss/d8018f74-b4e6-477e-bfef-5b5448eb1009/enf-pro.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_2G50H38209D640QTQ57OVB2000-d8018f74-b4e6-477e-bfef-5b5448eb1009-mfvMYuR', 'Estadistica'],
          ['Prestaciones Seguridad Social', 'Solicitud y trámites de prestaciones de la Seguridad Social', 'https://www.seg-social.es/wps/wcm/connect/wss/5a9d1128-2916-4c07-a7f2-a6b71dd21f6d/INSS_Fp.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_2G50H38209D640QTQ57OVB2000-5a9d1128-2916-4c07-a7f2-a6b71dd21f6d-nEOASQF', 'Sede electrónica'],
          ['Portal de la tesorería', 'Accede a tus datos, obtén informes y realiza trámites online relacionados con la Seguridad Social.', 'https://www.seg-social.es/wps/wcm/connect/wss/d51764e2-6c3d-44b5-9264-ef28e32200f5/Importass_WEB.gif?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_2G50H38209D640QTQ57OVB2000-d51764e2-6c3d-44b5-9264-ef28e32200f5-nzkb6CJ', 'Sede electrónica'],
          ['Sistema RED', 'Sistema de liquidación directa.', 'https://www.seg-social.es/wps/wcm/connect/wss/f848c11e-431b-4801-8d86-29c8eb6399e4/ICO-RED-SLD.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_2G50H38209D640QTQ57OVB2000-f848c11e-431b-4801-8d86-29c8eb6399e4-mfvMYuR', 'Sede electrónica'],
        ]} title={'Servicios disponibles'} />
      </div>
    </Provider>
  );
}

export default App;
