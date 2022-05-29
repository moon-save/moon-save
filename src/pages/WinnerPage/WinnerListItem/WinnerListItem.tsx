import React from 'react';
import { Box, Divider, Text } from '@mantine/core';
import { Winner } from '../Winner.types';


type WinnerListItemProps = Winner;

export const WinnerListItem: React.FC<WinnerListItemProps> = ({
  winnerAddress,
  winnerAmount,
  winnerDate,
  totalBankAmount,
}) => (
  <>
    <Box sx={{ width: '100%', justifyContent: 'space-between', display: 'flex', paddingBlock: '0.5rem' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Text align="left" weight="bold">
          {winnerAddress}
        </Text>
        <Text size="xs" color="gray">
          {winnerDate.toDateString()}
        </Text>
      </Box>
      <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end' }}>
        <Text align="right" weight="bold" color="green">
          +{winnerAmount} ETH 🎉
        </Text>
        <Text size="xs" color="gray">
          {totalBankAmount}
        </Text>
      </Box>
    </Box>
    <Divider />
  </>
);
WinnerListItem.displayName = 'WinnerListItem';
