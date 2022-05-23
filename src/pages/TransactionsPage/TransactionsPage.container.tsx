import React from 'react';
import { TransactionsPage } from './TransactionsPage.component';

// const transactionsList = [
//   {
//     transactionType: 'deposit' as const,
//     transactionAmount: 1,
//     transactionDate: new Date('December 17, 1995'),
//     totalBankAmount: 10,
//   },
// ];

export const TransactionsPageContainer = React.memo(() => {
  const transactionsList = [
    {
      transactionId: 12,
      transactionType: 'deposit' as const,
      transactionAmount: 1,
      transactionDate: new Date('December 17, 1995'),
      totalBankAmount: 10,
    },
  ];

  return <TransactionsPage transactionsList={transactionsList}/>;
});

TransactionsPageContainer.displayName = 'TransactionsPageContainer';
