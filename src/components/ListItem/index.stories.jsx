import React from 'react';

import ListItem from '.';

export default {
  title: 'Components/ListItem',
  component: ListItem,
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

const Template = (args) => <ListItem {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  id: 'https://en.wikipedia.org/wiki/Testament',
  label: 'Test data for demo'
};
