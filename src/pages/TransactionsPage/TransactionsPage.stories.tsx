import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { TransactionsPage } from './TransactionsPage.component';

export default {
  title: 'pages/TransactionsPage',
  component: TransactionsPage,
  parameters: {
    // More on Story layout: https://storybook.js.org/docs/react/configure/story-layout
    layout: 'fullscreen',
  },
  args: {
    myETHBalance: 3.3722,
    balanceDelta: 523.23,
    transactionsList: [
      {
        transactionId: 0,
        transactionType: 'deposit',
        transactionAmount: 1,
        transactionDate: new Date('December 17, 1995'),
        totalBankAmount: 10,
      },
    ],
  },
} as ComponentMeta<typeof TransactionsPage>;

const Template: ComponentStory<typeof TransactionsPage> = (args) => <TransactionsPage {...args} />;

export const Default = Template.bind({});
