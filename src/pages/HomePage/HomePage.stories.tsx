import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { HomePage } from './HomePage.component';

export default {
  title: 'pages/HomePage',
  component: HomePage,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    myETHBalance: "3.3722",
    myETHBalanceInUSD: "$3000",
    balanceDelta: 523.23,
    myOddsToWin: "0.6712",
    showOddsToWin: true,
  },
} as ComponentMeta<typeof HomePage>;

const Template: ComponentStory<typeof HomePage> = (args) => <HomePage {...args} />;

export const Default = Template.bind({});
