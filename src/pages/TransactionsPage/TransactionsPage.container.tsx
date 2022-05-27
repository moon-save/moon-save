import React from 'react';
import { TransactionsPage } from './TransactionsPage.component';
import { useTransactionsPageState } from './useTransactionsPageState';

export const TransactionsPageContainer = React.memo(() => {
  const state = useTransactionsPageState();
  const transactionsList = [
    {
      transactionId: 12,
      transactionType: 'moonSave' as const,
      transactionAmount: 25,
      transactionDate: new Date('December 17, 1995'),
      totalBankAmount: 50,
    },
    {
      transactionId: 11,
      transactionType: 'deposit' as const,
      transactionAmount: 1,
      transactionDate: new Date('December 17, 1995'),
      totalBankAmount: 25,
    },
    {
      transactionId: 10,
      transactionType: 'deposit' as const,
      transactionAmount: 1,
      transactionDate: new Date('December 17, 1995'),
      totalBankAmount: 24,
    },
    {
      transactionId: 9,
      transactionType: 'withdrawal' as const,
      transactionAmount: 1,
      transactionDate: new Date('December 17, 1995'),
      totalBankAmount: 23,
    },
    {
      transactionId: 8,
      transactionType: 'deposit' as const,
      transactionAmount: 1,
      transactionDate: new Date('December 17, 1995'),
      totalBankAmount: 24,
    },
    {
      transactionId: 7,
      transactionType: 'deposit' as const,
      transactionAmount: 10,
      transactionDate: new Date('December 17, 1995'),
      totalBankAmount: 23,
    },
    {
      transactionId: 6,
      transactionType: 'deposit' as const,
      transactionAmount: 1,
      transactionDate: new Date('December 17, 1995'),
      totalBankAmount: 13,
    },
    {
      transactionId: 5,
      transactionType: 'deposit' as const,
      transactionAmount: 1,
      transactionDate: new Date('December 17, 1995'),
      totalBankAmount: 12,
    },
    {
      transactionId: 4,
      transactionType: 'deposit' as const,
      transactionAmount: 1,
      transactionDate: new Date('December 17, 1995'),
      totalBankAmount: 11,
    },
    {
      transactionId: 3,
      transactionType: 'deposit' as const,
      transactionAmount: 1,
      transactionDate: new Date('December 17, 1995'),
      totalBankAmount: 10,
    },
    {
      transactionId: 2,
      transactionType: 'withdrawal' as const,
      transactionAmount: 1,
      transactionDate: new Date('December 17, 1995'),
      totalBankAmount: 9,
    },
    {
      transactionId: 1,
      transactionType: 'deposit' as const,
      transactionAmount: 1,
      transactionDate: new Date('December 17, 1995'),
      totalBankAmount: 10,
    },
  ];

  return <TransactionsPage {...state} />;
});

TransactionsPageContainer.displayName = 'TransactionsPageContainer';
