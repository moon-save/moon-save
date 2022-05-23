import { Text } from '@mantine/core';
import React from 'react';
import type { Transaction } from '../TransactionsPage.component';

type TransactionListItemProps = Transaction;

export const TransactionListItem: React.FC<TransactionListItemProps> = ({ transactionType, transactionAmount, transactionDate, totalBankAmount }) => (
  <>
    <Text>
      {/* TODO: Date format string */}
      {transactionType} {transactionAmount} {totalBankAmount}
    </Text>
  </>
);
TransactionListItem.displayName = 'TransactionListItem';
