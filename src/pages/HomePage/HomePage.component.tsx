import React from 'react';
import { Box, Button, Text } from '@mantine/core';
import { BalanceDisplayContainer } from '../../components/BalanceDisplay/BalanceDisplayContainer';

export const HomePage: React.FC = () => (
  <Box sx={{ width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4rem', justifyContent: 'center' }}>
      <Text sx={{ fontSize: '4rem' }}>Balance</Text>
      <BalanceDisplayContainer />
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
