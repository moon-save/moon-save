import React from 'react';
import { Box, Button, Text } from '@mantine/core';
import { BalanceDisplay } from '../../components/BalanceDisplay/BalanceDisplay';

export const HomePage: React.FC = () => (
  <Box sx={{ width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4rem', justifyContent: 'center' }}>
      <Text sx={{ fontSize: '4rem' }}>Balance</Text>
      <BalanceDisplay myETHBalance={3.3722} balanceDelta={523.23} myOddsToWin={0.6712} showOddsToWin={true} />
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
