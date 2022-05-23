import React from 'react';
import { Box, NumberInputHandlers, ScrollArea, Text } from '@mantine/core';
import { TransactionListItem } from './TransactionListItem/TransactionListItem';

export interface Transaction {
  transactionType: 'deposit' | 'interest' | 'withdrawal' | 'MoonSave';
  transactionAmount: number;
  transactionDate: Date;
  totalBankAmount: number;
}
interface TransactionsPageProps {
  transactionsList: Transaction[];
}

export const TransactionsPage: React.FC<TransactionsPageProps> = ({ transactionsList }) => {
  return (
  //   <Box sx={{ width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
  //   <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4rem', justifyContent: 'center' }}>
  //     <Text sx={{ fontSize: '4rem' }}>History</Text>
  //     {/* <BalanceDisplayContainer /> */}
  //     {/* <Box sx={{ display: 'flex', gap: '1rem' }}>
  //       <Button>Deposit</Button>
  //       <Button>Withdraw</Button>
  //     </Box> */}
  //   </Box>
  // </Box>
    <ScrollArea>
      {transactionsList.map((transaction) => (
        <TransactionListItem {...transaction} />
      ))}
    </ScrollArea>
  );
};
TransactionsPage.displayName = 'TransactionsPage';
