import React from 'react';
import { ScrollArea, Text } from '@mantine/core';
import { TransactionListItem } from './TransactionListItem/TransactionListItem';

export interface Transaction {
  transactionType: 'deposit' | 'interest' | 'withdrawal';
  transactionAmount: number;
}
interface TransactionsPageProps {
  transactionsList: Transaction[];
}

export const TransactionsPage: React.FC<TransactionsPageProps> = ({ transactionsList }) => {
  return (
    <ScrollArea>
      {transactionsList.map((transaction) => (
        <TransactionListItem {...transaction} />
      ))}
    </ScrollArea>
  );
};
TransactionsPage.displayName = 'TransactionsPage';
