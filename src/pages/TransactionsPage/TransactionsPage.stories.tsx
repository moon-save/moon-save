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
    transactionsList: [
      {
        transactionType: 'deposit',
        transactionAmount: 1,
      },
      {
        transactionType: 'deposit',
        transactionAmount: 1,
      },
      {
        transactionType: 'deposit',
        transactionAmount: 1,
      },
      {
        transactionType: 'deposit',
        transactionAmount: 1,
      },
      {
        transactionType: 'deposit',
        transactionAmount: 1,
      },
      {
        transactionType: 'deposit',
        transactionAmount: 1,
      },
      {
        transactionType: 'deposit',
        transactionAmount: 1,
      },
      {
        transactionType: 'deposit',
        transactionAmount: 1,
      },
      {
        transactionType: 'deposit',
        transactionAmount: 1,
      },
      {
        transactionType: 'deposit',
        transactionAmount: 1,
      },
      {
        transactionType: 'deposit',
        transactionAmount: 1,
      },
      {
        transactionType: 'deposit',
        transactionAmount: 1,
      },
      {
        transactionType: 'deposit',
        transactionAmount: 1,
      },
      {
        transactionType: 'deposit',
        transactionAmount: 1,
      },
      {
        transactionType: 'deposit',
        transactionAmount: 1,
      },
      {
        transactionType: 'deposit',
        transactionAmount: 1,
      },
      {
        transactionType: 'deposit',
        transactionAmount: 1,
      },
      {
        transactionType: 'deposit',
        transactionAmount: 1,
      },
      {
        transactionType: 'deposit',
        transactionAmount: 1,
      },
      {
        transactionType: 'deposit',
        transactionAmount: 1,
      },
      {
        transactionType: 'deposit',
        transactionAmount: 1,
      },
      {
        transactionType: 'deposit',
        transactionAmount: 1,
      },
      {
        transactionType: 'deposit',
        transactionAmount: 1,
      },
      {
        transactionType: 'deposit',
        transactionAmount: 1,
      },
      {
        transactionType: 'deposit',
        transactionAmount: 1,
      },
      {
        transactionType: 'deposit',
        transactionAmount: 1,
      },
      {
        transactionType: 'deposit',
        transactionAmount: 1,
      },
      {
        transactionType: 'deposit',
        transactionAmount: 1,
      },
      {
        transactionType: 'deposit',
        transactionAmount: 1,
      },
      {
        transactionType: 'deposit',
        transactionAmount: 1,
      },
      {
        transactionType: 'deposit',
        transactionAmount: 1,
      },
      {
        transactionType: 'deposit',
        transactionAmount: 1,
      },
      {
        transactionType: 'deposit',
        transactionAmount: 1,
      },
      {
        transactionType: 'deposit',
        transactionAmount: 1,
      },
      {
        transactionType: 'deposit',
        transactionAmount: 1,
      },
      {
        transactionType: 'deposit',
        transactionAmount: 1,
      },
      {
        transactionType: 'deposit',
        transactionAmount: 1,
      },
      {
        transactionType: 'deposit',
        transactionAmount: 1,
      },
      {
        transactionType: 'deposit',
        transactionAmount: 1,
      },
      {
        transactionType: 'deposit',
        transactionAmount: 1,
      },
      {
        transactionType: 'deposit',
        transactionAmount: 1,
      },
      {
        transactionType: 'deposit',
        transactionAmount: 1,
      },
      {
        transactionType: 'deposit',
        transactionAmount: 1,
      },
      {
        transactionType: 'deposit',
        transactionAmount: 1,
      },
      {
        transactionType: 'deposit',
        transactionAmount: 1,
      },
      {
        transactionType: 'deposit',
        transactionAmount: 1,
      },
      {
        transactionType: 'deposit',
        transactionAmount: 1,
      },
      {
        transactionType: 'deposit',
        transactionAmount: 1,
      },
    ],
  },
} as ComponentMeta<typeof TransactionsPage>;

const Template: ComponentStory<typeof TransactionsPage> = (args) => <TransactionsPage {...args} />;

export const Default = Template.bind({});
