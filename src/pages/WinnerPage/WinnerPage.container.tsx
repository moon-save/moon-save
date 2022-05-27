import React from 'react';
import { WinnerPage } from './WinnerPage.component';
import { useWinnerPageState } from './useWinnerPageState';

export const WinnerPageContainer = React.memo(() => {
  const state = useWinnerPageState();

  // TODO: add dummy data
  const winnersList = [
    {
      winnerId: 12,
      winnerAddress: '0xb794f5ea0ba39494ce839613fffba74279579268',
      winnerAmount: 25,
      winnerDate: new Date('December 17, 1995'),
      totalBankAmount: 50,
    },
    {
      winnerId: 11,
      winnerAddress: 'deposit' as const,
      winnerAmount: 1,
      winnerDate: new Date('December 17, 1995'),
      totalBankAmount: 25,
    },
    {
      winnerId: 10,
      winnerAddress: 'deposit' as const,
      winnerAmount: 1,
      winnerDate: new Date('December 17, 1995'),
      totalBankAmount: 24,
    },
  ];

  return <WinnerPage {...state} />;
});
WinnerPageContainer.displayName = 'WinnerPageContainer';
