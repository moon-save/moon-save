import React from 'react';
import { Box, Divider, Text } from '@mantine/core';
import { Transaction, TransactionType } from '../transactions.types';

type TransactionListItemProps = Transaction;

const transactionTypeToName: Record<TransactionType, string> = {
  deposit: 'Deposit',
  interest: 'Interest Payout',
  withdrawal: 'Withdrawal',
  moonSave: 'MoonSave Payout🎉',
};

export const TransactionListItem: React.FC<TransactionListItemProps> = ({
  transactionType,
  transactionAmount,
  transactionDate,
  totalBankAmount,
}) => (
  <>
    <Box sx={{ width: '100%', justifyContent: 'space-between', display: 'flex', paddingBlock: '0.5rem' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Text align="left" weight="bold">
          {transactionTypeToName[transactionType]}
        </Text>
        <Text size="xs" color="gray">
          {transactionDate.toDateString()}
        </Text>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
        <Text align="right" weight="bold" color={transactionType === 'withdrawal' ? 'red' : 'green'}>
          {transactionType === 'withdrawal' ? '-' : '+'}
          {transactionAmount} ETH
        </Text>
        <Text size="xs" color="gray">
          ${totalBankAmount} USD
        </Text>
      </Box>
    </Box>
    <Divider />
  </>
);
TransactionListItem.displayName = 'TransactionListItem';
