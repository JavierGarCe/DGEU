import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Container from './Container';

export default {
  title: 'Example/Container',
  component: Container,
} as ComponentMeta<typeof Container>;

const Template: ComponentStory<typeof Container> = (args) => <Container {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  title: 'Titulo',
  services: [['Test Service', 'This is a test service', 'https://i2.wp.com/revista.seg-social.es/wp-content/uploads/2021/10/1a-EDICION-8M6H0859-copia.jpg?resize=620%2C264&ssl=1'],
  ['Test Service', 'This is a test service', 'https://i2.wp.com/revista.seg-social.es/wp-content/uploads/2021/10/1a-EDICION-8M6H0859-copia.jpg?resize=620%2C264&ssl=1'],
  ['Test Service', 'This is a test service', 'https://i2.wp.com/revista.seg-social.es/wp-content/uploads/2021/10/1a-EDICION-8M6H0859-copia.jpg?resize=620%2C264&ssl=1'],
  ['Test Service', 'This is a test service', 'https://i2.wp.com/revista.seg-social.es/wp-content/uploads/2021/10/1a-EDICION-8M6H0859-copia.jpg?resize=620%2C264&ssl=1'],
  ['Test Service', 'This is a test service', 'https://i2.wp.com/revista.seg-social.es/wp-content/uploads/2021/10/1a-EDICION-8M6H0859-copia.jpg?resize=620%2C264&ssl=1'],
  ['Test Service', 'This is a test service', 'https://i2.wp.com/revista.seg-social.es/wp-content/uploads/2021/10/1a-EDICION-8M6H0859-copia.jpg?resize=620%2C264&ssl=1'],
  ['Test Service', 'This is a test service', 'https://i2.wp.com/revista.seg-social.es/wp-content/uploads/2021/10/1a-EDICION-8M6H0859-copia.jpg?resize=620%2C264&ssl=1'],
  ['Test Service', 'This is a test service', 'https://i2.wp.com/revista.seg-social.es/wp-content/uploads/2021/10/1a-EDICION-8M6H0859-copia.jpg?resize=620%2C264&ssl=1'],
  ['Test Service', 'This is a test service', 'https://i2.wp.com/revista.seg-social.es/wp-content/uploads/2021/10/1a-EDICION-8M6H0859-copia.jpg?resize=620%2C264&ssl=1'],
  ['Test Service', 'This is a test service', 'https://i2.wp.com/revista.seg-social.es/wp-content/uploads/2021/10/1a-EDICION-8M6H0859-copia.jpg?resize=620%2C264&ssl=1'],
  ['Test Service', 'This is a test service', 'https://i2.wp.com/revista.seg-social.es/wp-content/uploads/2021/10/1a-EDICION-8M6H0859-copia.jpg?resize=620%2C264&ssl=1'],
  ['Test Service', 'This is a test service', 'https://i2.wp.com/revista.seg-social.es/wp-content/uploads/2021/10/1a-EDICION-8M6H0859-copia.jpg?resize=620%2C264&ssl=1'],
  ['Test Service', 'This is a test service', 'https://i2.wp.com/revista.seg-social.es/wp-content/uploads/2021/10/1a-EDICION-8M6H0859-copia.jpg?resize=620%2C264&ssl=1'],
  ['Test Service', 'This is a test service', 'https://i2.wp.com/revista.seg-social.es/wp-content/uploads/2021/10/1a-EDICION-8M6H0859-copia.jpg?resize=620%2C264&ssl=1'],]
};


