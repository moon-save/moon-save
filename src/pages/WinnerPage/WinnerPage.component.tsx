import React from 'react';
import { Box, Button, Center, NumberInput, ScrollArea, Text } from '@mantine/core';
import { BalanceDisplay, BalanceDisplayProps } from '../../components/BalanceDisplay/BalanceDisplay';
import { WinnerListItem } from './WinnerListItem/WinnerListItem';
import { Winner } from './Winner.types';

export type WinnerPageProps = {
  winnersList: Winner[] | undefined;
};


export const WinnerPage: React.FC<WinnerPageProps> = ({winnersList, ...props}) => (
  <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gridTemplateColumns: '1fr 1fr' }}>
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
      <Text sx={{ fontSize: '4rem' }}>Winners</Text>
    </Box>
    <Text><br></br></Text>
    {winnersList ? (
        winnersList.length === 0 ? (
          <Center sx={{ height: '100%' }}>
            <Text>No transactions found</Text>
          </Center>
        ) : (
          <ScrollArea sx={{ width: '100%', height: '100%', gap: '4rem' }}>
            {winnersList.map((winner) => (
              <WinnerListItem key={winner.winnerAddress} {...winner} />
            ))}
          </ScrollArea>
        )
      ) : (
        <Text>Error: Account not found</Text>
      )}
  </Box>
);
WinnerPage.displayName = 'WinnerPage';
