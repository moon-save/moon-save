import React from 'react';
import { Box, Button, Text } from '@mantine/core';
import { BalanceDisplay, BalanceDisplayProps } from '../../components/BalanceDisplay/BalanceDisplay';

export type HomePageProps = BalanceDisplayProps;

export const HomePage: React.FC<HomePageProps> = (props) => {
  return (
    <Box sx={{ width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4rem', justifyContent: 'center' }}>
        <Text sx={{ fontSize: '4rem' }}>Balance</Text>
        <BalanceDisplay {...props} />
        <Box sx={{ display: 'flex', gap: '1rem' }}>
          <Button>Deposit</Button>
          <Button>Withdraw</Button>
        </Box>
      </Box>
      <Box>
        
      </Box>
    </Box>
  );
}
HomePage.displayName = 'HomePage';
