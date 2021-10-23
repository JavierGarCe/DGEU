import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';

import Dropdown from './Dropdown';

export default {
  title: 'Example/Dropdown',
  component: Dropdown,
} as ComponentMeta<typeof Dropdown>;

const Template: ComponentStory<typeof Dropdown> = (args) => <Dropdown {...args} />;

export const Collapsed = Template.bind({});
Collapsed.args = {
  options: ['Option 1', 'Option 2', '...', 'Option N'],
  title: 'Dropdown',
  collapsed: true
};

export const Expanded = Template.bind({});
Expanded.args = {
  options: ['Option 1', 'Option 2', '...', 'Option N'],
  title: 'Dropdown',
  collapsed: false
};
