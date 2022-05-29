import React from 'react';
import { WinnerPage } from './WinnerPage.component';
import { useWinnerPageState } from './useWinnerPageState';

export const WinnerPageContainer = React.memo(() => {
  const state = useWinnerPageState();

  return <WinnerPage {...state} />;
});
WinnerPageContainer.displayName = 'WinnerPageContainer';
