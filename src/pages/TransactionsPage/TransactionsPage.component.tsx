import React from 'react';
import { Box, Center, ScrollArea, Text } from '@mantine/core';
import { BalanceDisplay, BalanceDisplayProps } from '../../components/BalanceDisplay/BalanceDisplay';
import { Transaction } from './transactions.types';
import { TransactionListItem } from './TransactionListItem/TransactionListItem';

type TransactionsPageProps = {
  transactionsList: Transaction[] | undefined;
} & BalanceDisplayProps;

export const TransactionsPage: React.FC<TransactionsPageProps> = ({ transactionsList, ...balanceDisplayProps }) => {
  return (
    <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gridTemplateColumns: '1fr 1fr' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
        <Text sx={{ fontSize: '4rem' }}>History</Text>
        <BalanceDisplay {...balanceDisplayProps} />
      </Box>
      <Text>
        <br></br>
      </Text>
      {transactionsList ? (
        transactionsList.length === 0 ? (
          <Center sx={{ height: '100%' }}>
            <Text>No transactions found</Text>
          </Center>
        ) : (
          <ScrollArea sx={{ width: '100%', height: '100%', gap: '4rem' }}>
            {transactionsList.map((transaction) => (
              <TransactionListItem key={transaction.transactionId} {...transaction} />
            ))}
          </ScrollArea>
        )
      ) : (
        <Text>Error: Account not found</Text>
      )}
    </Box>
  );
};
TransactionsPage.displayName = 'TransactionsPage';
