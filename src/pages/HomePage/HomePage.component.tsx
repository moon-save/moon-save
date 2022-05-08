import React from 'react';
import { Box, Button, Text, Title } from '@mantine/core';
import { ethToUsd } from '../../utils/currency';

export interface HomePageProps {
  myETHBalance: number;
  balanceDelta: number;
  myOddsToWin: number;
}

export const HomePage: React.FC<HomePageProps> = ({ myETHBalance, balanceDelta, myOddsToWin }) => (
  <Box sx={{ width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4rem', justifyContent: 'center' }}>
      <Title sx={{ fontSize: '4rem' }}>Balance</Title>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Text size="xl" weight="bold">
          {myETHBalance} ETH
        </Text>
        <Text weight="bold">{ethToUsd(myETHBalance)}</Text>
        <Text>{myOddsToWin}% Odds to Win</Text>
      </Box>
      <Box sx={{ display: 'flex', gap: '1rem' }}>
        <Button>Deposit</Button>
        <Button>Withdraw</Button>
      </Box>
    </Box>
    <Box>
      <Text>Graph here</Text>
    </Box>
  </Box>
);
HomePage.displayName = 'HomePage';
