import React from 'react';
import { Box, NumberInputHandlers, ScrollArea, Text } from '@mantine/core';
import { TransactionListItem } from './TransactionListItem/TransactionListItem';
import { BalanceDisplay } from '../../components/BalanceDisplay/BalanceDisplay';

export interface Transaction {
  transactionId: number;
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
  // <Box>
  //   <Text>Graph here</Text>
  // </Box>
  <Box>
    <Text>HISTORY</Text>
    <BalanceDisplay myETHBalance={3.3722} balanceDelta={523.23} myOddsToWin={0.6712} showOddsToWin={false} />
    <ScrollArea>
      {transactionsList.map((transaction) => (
        <TransactionListItem key={transaction.transactionId} {...transaction} />
      ))}
    </ScrollArea>
  </Box>
  );
};
TransactionsPage.displayName = 'TransactionsPage';
