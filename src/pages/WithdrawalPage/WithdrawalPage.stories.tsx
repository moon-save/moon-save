import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { WithdrawalPage } from './WithdrawalPage.component';

export default {
  title: 'pages/DepositPage',
  component: WithdrawalPage,
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
} as ComponentMeta<typeof WithdrawalPage>;

const Template: ComponentStory<typeof WithdrawalPage> = (args) => <WithdrawalPage {...args} />;

export const Default = Template.bind({});
