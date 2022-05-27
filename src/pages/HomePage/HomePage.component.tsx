import React from 'react';
import { Box, Button, Text } from '@mantine/core';
import { BalanceDisplay, BalanceDisplayProps } from '../../components/BalanceDisplay/BalanceDisplay';
import savingsContractAbi from "../../abi/SavingsLottery.json";
import { savingsContractAddress } from "../../contracts";
import { utils } from 'ethers';
import { Contract } from '@ethersproject/contracts';
import { useContractFunction } from '@usedapp/core';

const savingsContractInterface = new utils.Interface(savingsContractAbi)
const contract = new Contract(savingsContractAddress, savingsContractInterface)

export function getLotteryID() {
  const { state, send } = useContractFunction(contract, 'getLotteryID', { transactionName: 'GetLotteryID' });
  return { state, send };
}

// send()

export type HomePageProps = BalanceDisplayProps;

export const HomePage: React.FC<HomePageProps> = (props) => (
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
      <Text>Graph here</Text>
    </Box>
  </Box>
);
HomePage.displayName = 'HomePage';
