import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Service from './Service';

export default {
  title: 'Example/Service',
  component: Service,
} as ComponentMeta<typeof Service>;

const Template: ComponentStory<typeof Service> = (args) => <Service {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  title: 'Test Service',
  description: 'This is a test service',
  imageUrl: 'https://i2.wp.com/revista.seg-social.es/wp-content/uploads/2021/10/1a-EDICION-8M6H0859-copia.jpg?resize=620%2C264&ssl=1',
};


