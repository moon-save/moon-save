import { useEtherBalance, useEthers } from '@usedapp/core';
import { formatEther } from '@ethersproject/units';
import { ethToUsd } from '../utils/currency';

export const useBalanceState = () => {
  const { account } = useEthers();
  const etherBalance = useEtherBalance(account);
  const etherBalanceString = etherBalance ? `${formatEther(etherBalance)} ETH` : 'Balance unavailable';
  const etherBalanceInUSD = etherBalance ? ethToUsd(etherBalance.toNumber()) : 'Balance unavailable';

  return {
    myETHBalance: etherBalanceString,
    myETHBalanceInUSD: etherBalanceInUSD,
    balanceDelta: 0,
    myOddsToWin: '0',
  };
};
