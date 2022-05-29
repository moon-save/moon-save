import { utils } from 'ethers';
import { Contract } from '@ethersproject/contracts';
import { useCall, useContractFunction } from '@usedapp/core';
import { savingsContractAbi } from '../abi/abi';
import { BigNumber } from '@ethersproject/bignumber'

export const SAVINGS_CONTRACT_ADDRESS = '0x0459bBA8E113feE2816D3c4D03827d8E3e508E6A';

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

export const useGetWinners = (): any[] | undefined => {
  const { value, error } = useCall(SAVINGS_CONTRACT_ADDRESS && {
    contract: contract,
    method: 'getWinners',
    args: []
  }) ?? {}

  if(error) {
    console.error(error.message)
    return undefined
  }
  console.log(value?.[0])
  console.log(typeof(value?.[0]))

  return value?.[0]
};

export const useGetWinAmount = (): number | undefined => {
  const { value, error } = useCall(SAVINGS_CONTRACT_ADDRESS && {
    contract: contract,
    method: 'getWinAmount',
    args: []
  }) ?? {}

  if(error) {
    console.error(error.message)
    return undefined
  }

  return value?.[0]
};

export const useGetInterestPrizePool = (): BigNumber | undefined => {
  const { value, error } = useCall(SAVINGS_CONTRACT_ADDRESS && {
    contract: contract,
    method: 'getInterestPool',
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
