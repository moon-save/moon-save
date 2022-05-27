import React from 'react';
import { Box, Divider, NumberInputHandlers, ScrollArea, Space, Text } from '@mantine/core';
import { Transaction, TransactionListItem } from './TransactionListItem/TransactionListItem';
import { BalanceDisplay } from '../../components/BalanceDisplay/BalanceDisplay';

interface TransactionsPageProps {
  transactionsList: Transaction[];
}

export const TransactionsPage: React.FC<TransactionsPageProps> = ({ transactionsList }) => {
  return (
  <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gridTemplateColumns: '1fr 1fr'}}>
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
      <Text sx={{ fontSize: '4rem' }}>History</Text>
      <BalanceDisplay myETHBalance={3.3722} balanceDelta={523.23} myOddsToWin={0.6712} showOddsToWin={false} />
    </Box>
    <Text><br></br></Text>
      <ScrollArea sx={{width: '100%', gap: '4rem'}}>
        {transactionsList.map((transaction) => (
          <TransactionListItem key={transaction.transactionId} {...transaction} />
        ))}
      </ScrollArea>
  </Box>
  );
};
TransactionsPage.displayName = 'TransactionsPage';
