import { utils } from 'ethers';
import { Contract } from '@ethersproject/contracts';
import { useContractFunction } from '@usedapp/core';
import { savingsContractAbi } from '../abi/abi';

export const SAVINGS_CONTRACT_ADDRESS = '0xA3E929C15027c01C2FFA3E6D141820991D950579';

export const savingsContractInterface = new utils.Interface(savingsContractAbi);
const contract = new Contract(SAVINGS_CONTRACT_ADDRESS, savingsContractInterface);

export const useGetLotteryID = () => {
  const { state, send } = useContractFunction(contract, 'getLotteryID', { transactionName: 'GetLotteryID' });
  return { state, send };
};

export const useDepositSavings = () => {
  const { state, send } = useContractFunction(contract, 'depositSavings', { transactionName: 'DepositSavings' });
  return { state, send };
};

export const useGetLotteryWinners = () => {
  const { state, send } = useContractFunction(contract, 'getLotteryWinners', { transactionName: 'GetLotteryWinners' });
  return { state, send };
};
