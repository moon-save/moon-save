import React from 'react';
import { Box, Button, NumberInput, Text } from '@mantine/core';
import { BalanceDisplay, BalanceDisplayProps } from '../../components/BalanceDisplay/BalanceDisplay';

export type DepositPageProps = BalanceDisplayProps;

export const DepositPage: React.FC<DepositPageProps> = (props) => (
  <Box sx={{ width: '100%', display: 'grid' }}>
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
      <BalanceDisplay {...props} />
    </Box>
    <Box>
      <Text sx={{ fontSize: '4rem' }}>Deposit</Text>
      <NumberInput precision={4} defaultValue={0} hideControls />
      <Text><br></br></Text>
      <Button>Submit</Button>
    </Box>
  </Box>
);
DepositPage.displayName = 'DepositPage';
