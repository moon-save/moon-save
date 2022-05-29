import { useEthers } from '@usedapp/core';
import { useBalanceState } from '../../hooks/useBalanceState';
import { useGetWinAmount, useGetWinners } from '../../modules/contract/contract';
import { Winner } from './Winner.types';
import { formatEther } from '@ethersproject/units';
import { ethToUsd } from '../../utils/currency';

const formatWinners = (address: string, winAmount: number): Winner => ({
  winnerAddress: address,
  winnerAmount: Number(formatEther(winAmount)),
  winnerDate: new Date('May 28, 2022'),
  totalBankAmount: ethToUsd(Number(formatEther(winAmount))),
});

export const useWinnerPageState = () => {
  const winners = useGetWinners();

  const _winAmount = useGetWinAmount();
  const winAmount = _winAmount ? _winAmount : 0;
  
  const winnersList = [
    {
      winnerId: 12,
      winnerAddress: '0xb794f5ea0ba39494ce839613fffba74279579268',
      winnerAmount: 25,
      winnerDate: new Date('December 17, 1995'),
      totalBankAmount: "50",
    },
    {
      winnerId: 11,
      winnerAddress: '0xb794f5ea0ba39494ce839613fffba74279579268',
      winnerAmount: 1,
      winnerDate: new Date('December 17, 1995'),
      totalBankAmount: "25",
    },
    {
      winnerId: 10,
      winnerAddress: '0xb794f5ea0ba39494ce839613fffba74279579268',
      winnerAmount: 1,
      winnerDate: new Date('December 17, 1995'),
      totalBankAmount: "24",
    },
  ];

  const formattedWinners = winners ? winners.map((winner) => formatWinners(winner, winAmount)) : [];

  return {
    winnersList: formattedWinners,
  };
};
