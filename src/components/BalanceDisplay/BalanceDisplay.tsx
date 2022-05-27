import React from 'react';
import { Box, Text } from '@mantine/core';
import { ETHLogo } from '../icons/ETHLogo';

export interface BalanceDisplayProps {
  myETHBalance: string;
  myETHBalanceInUSD: string;
  balanceDelta: number;
  myOddsToWin: string;
  showOddsToWin: boolean;
}

export const BalanceDisplay: React.FC<BalanceDisplayProps> = ({
  myETHBalance,
  myETHBalanceInUSD,
  balanceDelta,
  myOddsToWin,
  showOddsToWin,
}) => (
  <Box sx={{ display: 'flex', flexDirection: 'column' }}>
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Text weight="bold" sx={{ fontSize: '4rem', lineHeight: '4rem' }} lineClamp={1}>
        {myETHBalance}
      </Text>
      <ETHLogo />
    </Box>
    <Box sx={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
      <Text weight="bold" color="dimmed" sx={{ fontSize: '2.25rem', lineHeight: '2.25rem' }}>
        {myETHBalanceInUSD}
      </Text>
      <Text
        weight="bold"
        color={balanceDelta > 0 ? 'green' : balanceDelta < 0 ? 'red' : 'gray'}
        sx={{ fontSize: '2.25rem', lineHeight: '2.25rem' }}
      >
        {balanceDelta > 0 ? '+' : balanceDelta < 0 ? '-' : ''}
        {balanceDelta}%
      </Text>
    </Box>
    {showOddsToWin && <Text size="xl">{myOddsToWin}% Odds to Win</Text>}
  </Box>
);
BalanceDisplay.displayName = 'BalanceDisplay';
