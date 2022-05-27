import React from 'react';
import { Box, Button, Center, NumberInput, ScrollArea, Text } from '@mantine/core';
import { BalanceDisplay, BalanceDisplayProps } from '../../components/BalanceDisplay/BalanceDisplay';

export type WinnerPageProps = BalanceDisplayProps;

export const WinnerPage: React.FC<WinnerPageProps> = (props) => (
  <Box sx={{ width: '100%', display: 'flex', flexDirection: 'column', gridTemplateColumns: '1fr 1fr' }}>
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'flex-start' }}>
      <Text sx={{ fontSize: '4rem' }}>Winners</Text>
    </Box>
    <Text><br></br></Text>
    
  </Box>
);
WinnerPage.displayName = 'WinnerPage';
