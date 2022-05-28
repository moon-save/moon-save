import { utils } from 'ethers';
import { Contract } from '@ethersproject/contracts';
import { useCall, useContractFunction } from '@usedapp/core';
import { savingsContractAbi } from '../abi/abi';

export const SAVINGS_CONTRACT_ADDRESS = '0xDD476f0Bfe00aa3dEF3086Ae31d297cC087aAc7e';

export const savingsContractInterface = new utils.Interface(savingsContractAbi);
const contract = new Contract(SAVINGS_CONTRACT_ADDRESS, savingsContractInterface);

export const useGetLotteryID = (): Number | undefined => {
  const { value, error } = useCall(SAVINGS_CONTRACT_ADDRESS && {
    contract: contract,
    method: 'getLotteryID',
    args: []
  }) ?? {}

  if(error) {
    console.error(error.message)
    return undefined
  }
  return value?.[0]
};

export const useDepositSavings = () => {
  const { state, send } = useContractFunction(contract, 'depositSavings', { transactionName: 'DepositSavings' });
  return { state, send };
};

export const useGetLotteryWinners = () => {
  const { state, send } = useContractFunction(contract, 'getLotteryWinners', { transactionName: 'GetLotteryWinners' });
  return { state, send };
};
