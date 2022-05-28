import React from 'react';
import { Box, Button, Text } from '@mantine/core';
import { BalanceDisplay, BalanceDisplayProps } from '../../components/BalanceDisplay/BalanceDisplay';
import { useGetLotteryID } from '../../modules/contract/contract';
import { useTransactions } from '@usedapp/core';

export type HomePageProps = BalanceDisplayProps;



export const HomePage: React.FC<HomePageProps> = (props) => {
  // useTransactions
  function onDepositClicked() {
    var lotteryID = useGetLotteryID();
    console.log(lotteryID);
  }
  const onWithdrawClicked = () => {
  }

  return (
    <Box sx={{ width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: '4rem', justifyContent: 'center' }}>
        <Text sx={{ fontSize: '4rem' }}>Balance</Text>
        <BalanceDisplay {...props} />
        <Box sx={{ display: 'flex', gap: '1rem' }}>
          <Button onClick={onDepositClicked}>Deposit</Button>
          <Button onClick={onWithdrawClicked}>Withdraw</Button>
        </Box>
      </Box>
      <Box>
        <Text>Graph here</Text>
      </Box>
    </Box>
  );
}
HomePage.displayName = 'HomePage';
