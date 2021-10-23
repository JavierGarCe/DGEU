import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from './Button';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Example/Button',
  component: Button,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Pressed = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
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
