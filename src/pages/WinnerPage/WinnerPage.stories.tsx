import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { WinnerPage } from './WinnerPage.component';

export default {
  title: 'pages/WinnerPage',
  component: WinnerPage,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    myETHBalance: 3.3722,
    balanceDelta: 523.23,
    myOddsToWin: 0.6712,
    showOddsToWin: true,
  },
} as ComponentMeta<typeof WinnerPage>;

const Template: ComponentStory<typeof WinnerPage> = (args) => <WinnerPage {...args} />;

export const Default = Template.bind({});
