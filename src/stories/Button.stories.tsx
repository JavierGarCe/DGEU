import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../components/Button';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Pressed = Template.bind({});
Pressed.args = {
  pressed: true,
  label: 'Button',
};

export const Unpressed = Template.bind({});
Unpressed.args = {
  pressed: false,
  label: 'Button',
};

export const WithIcon = Template.bind({});
WithIcon.args = {
  size: 'small',
  label: 'Button',
  icon: faStroopwafel
};

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
};
