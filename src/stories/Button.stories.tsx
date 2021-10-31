import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Button from '../containers/Button';
import { faStroopwafel } from '@fortawesome/free-solid-svg-icons';

export default {
  title: 'Example/Button',
  component: Button,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Large = Template.bind({});
Large.args = {
  size: 'large',
  label: 'Button',
  icon: faStroopwafel,
  backgroundColor: '#e6ede7'
};

export const Small = Template.bind({});
Small.args = {
  size: 'small',
  label: 'Button',
  icon: faStroopwafel,
  backgroundColor: '#e6ede7'
};
