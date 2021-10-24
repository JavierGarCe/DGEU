import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Carousel from '../components/Carousel';

export default {
  title: 'Example/Carousel',
  component: Carousel,
} as ComponentMeta<typeof Carousel>;

const Template: ComponentStory<typeof Carousel> = (args) => <Carousel {...args} />;

export const Normal = Template.bind({});
Normal.args = {

};

