import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Container from '../components/Container';

export default {
  title: 'Example/Container',
  component: Container,
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => <Container {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  title: 'Titulo',
  services: [
  ['Adminstracion', 'Acceso a la Web de Administración. Punto de acceso general.', 'https://www.seg-social.es/wps/wcm/connect/wss/d552f5c4-83fa-4a9b-a1da-8127342f149e/footer-slider-7-grey.gif?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_2G50H38209D640QTQ57OVB2000-d552f5c4-83fa-4a9b-a1da-8127342f149e-mfvMYuR'],
  ['Reutilización de Información', 'Acceso a Reutilización de Información Pública.', 'https://www.seg-social.es/wps/wcm/connect/wss/1d1a1fac-945e-4c57-bc7d-b3cf1ea54acb/footer-slider-5-grey.gif?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_2G50H38209D640QTQ57OVB2000-1d1a1fac-945e-4c57-bc7d-b3cf1ea54acb-mfvMYuR'],
  ['Transparencia', 'Acceso al Portal de la Transparencia.', 'https://www.seg-social.es/wps/wcm/connect/wss/0938361e-621c-439a-a765-da745674099c/footer-slider-10_GREY.gif?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_2G50H38209D640QTQ57OVB2000-0938361e-621c-439a-a765-da745674099c-mW7SKn8'],
  ['Protección de datos', 'Acceso a la Seguridad Social - Protección de datos.', 'https://www.seg-social.es/wps/wcm/connect/wss/ea1d04db-3b5a-46dd-b383-06d20cd0b6aa/PDatosB.png?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_2G50H38209D640QTQ57OVB2000-ea1d04db-3b5a-46dd-b383-06d20cd0b6aa-mSdlJGF'],
  ['Lucha contra el Fraude', 'Acceso al Observatorio Lucha contra el Fraude a la Seguridad Social', 'https://www.seg-social.es/wps/wcm/connect/wss/badbf526-ee0d-48e6-b031-55ece861af41/Observatorio_BN.jpg?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_2G50H38209D640QTQ57OVB2000-badbf526-ee0d-48e6-b031-55ece861af41-nOU1xsD'],
  ['Cl@ve', 'Identidad Electrónica para las Administraciones.', 'https://www.seg-social.es/wps/wcm/connect/wss/0d9d2f6c-c133-4319-afc9-127e6af26f18/footer-slider-1-grey.gif?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_2G50H38209D640QTQ57OVB2000-0d9d2f6c-c133-4319-afc9-127e6af26f18-mSdlArq'],
  ['Seguridad Social Móvil', 'Acceso a toda la información por este medio.', 'https://www.seg-social.es/wps/wcm/connect/wss/6ec48f32-207a-46cb-a704-7f7a5719bf26/footer-slider-4-grey.gif?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_2G50H38209D640QTQ57OVB2000-6ec48f32-207a-46cb-a704-7f7a5719bf26-mfvMYuR'],
  ['Tarjeta Social', 'Acceso a Tarjeta Social Digital', 'https://www.seg-social.es/wps/wcm/connect/wss/e2847aec-6afd-4798-bb80-3d03fdc64c7f/TSU_Web_black.gif?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_2G50H38209D640QTQ57OVB2000-e2847aec-6afd-4798-bb80-3d03fdc64c7f-nh44gt3'],
  ['EUGO', 'Portal dirigido a empresarios y emprendedores.', 'https://www.seg-social.es/wps/wcm/connect/wss/dce9bc48-1fdf-4488-88bb-69be4bda7efa/footer-slider-3-grey.gif?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_2G50H38209D640QTQ57OVB2000-dce9bc48-1fdf-4488-88bb-69be4bda7efa-mfvMYuR'],
  ['BOE', 'Boletín Oficial del Estado.', 'https://www.seg-social.es/wps/wcm/connect/wss/6c6ef3d8-1e58-43d8-bce7-4eabdc0ba55a/footer-slider-6-grey.gif?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_2G50H38209D640QTQ57OVB2000-6c6ef3d8-1e58-43d8-bce7-4eabdc0ba55a-mfvMYuR'],
  ['Administración Electrónica', 'Desarrolle su actividad a través de las TIC.', 'https://www.seg-social.es/wps/wcm/connect/wss/4bb06d43-7345-4a9d-b94d-600dfdb690be/footer-slider-0-grey.gif?MOD=AJPERES&CACHEID=ROOTWORKSPACE.Z18_2G50H38209D640QTQ57OVB2000-4bb06d43-7345-4a9d-b94d-600dfdb690be-mfvMYuR'],
  ]
};


