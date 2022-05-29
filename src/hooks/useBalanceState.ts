import { useEtherBalance, useEthers } from '@usedapp/core';
import { formatEther } from '@ethersproject/units';
import { ethToUsd } from '../utils/currency';
import { useGetInterestPrizePool } from '../modules/contract/contract';

export const useBalanceState = () => {
  const { account } = useEthers();
  const etherBalance = useEtherBalance(account);
  const _interestPrizePool = useGetInterestPrizePool();

  const etherBalanceString = etherBalance ? `${Number(formatEther(etherBalance)).toFixed(6)} ETH` : 'Balance unavailable';
  const etherBalanceInUSD = etherBalance ? ethToUsd(Number(formatEther(etherBalance))) : 'Balance unavailable';

  const interestPrizePoolText = _interestPrizePool ? ethToUsd(Number(formatEther(_interestPrizePool))) : '$0';

  return {
    myETHBalance: etherBalanceString,
    myETHBalanceInUSD: etherBalanceInUSD,
    balanceDelta: 0,
    myOddsToWin: interestPrizePoolText,
  };
};
