import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import News from './News';

export default {
  title: 'Example/News',
  component: News,
} as ComponentMeta<typeof News>;

const Template: ComponentStory<typeof News> = (args) => <News {...args} />;

export const Collapsed = Template.bind({});
Collapsed.args = {
  title: 'Test New',
  subtitle: 'This is a test new',
  author: 'Author',
  body: 'body',
  date: '14/10/2021',
  imageUrl: 'https://i2.wp.com/revista.seg-social.es/wp-content/uploads/2021/10/1a-EDICION-8M6H0859-copia.jpg?resize=620%2C264&ssl=1',
  collapsed: true
};

export const Expanded = Template.bind({});
Expanded.args = {
  title: 'Test New',
  subtitle: 'This is a test new',
  author: 'Author',
  body: "Lorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.",
  date: '14/10/2021',
  imageUrl: 'https://i2.wp.com/revista.seg-social.es/wp-content/uploads/2021/10/1a-EDICION-8M6H0859-copia.jpg?resize=620%2C264&ssl=1',
  collapsed: false
};