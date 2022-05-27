import React from 'react';
import { Box, Button, NumberInput, Text } from '@mantine/core';
import { BalanceDisplay, BalanceDisplayProps } from '../../components/BalanceDisplay/BalanceDisplay';

export type WithdrawalPageProps = BalanceDisplayProps;

export const WithdrawalPage: React.FC<WithdrawalPageProps> = (props) => (
  <Box sx={{ width: '100%', display: 'grid' }}>
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <BalanceDisplay {...props} />
    </Box>
    <Box>
      <Text sx={{ fontSize: '4rem' }}>Withdrawal</Text>
      <NumberInput precision={4} defaultValue={0} hideControls />
      <Text><br></br></Text>
      <Button>Submit</Button>
    </Box>
  </Box>
);
WithdrawalPage.displayName = 'WithdrawalPage';
