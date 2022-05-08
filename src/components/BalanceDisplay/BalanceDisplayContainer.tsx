import React from 'react';
import { BalanceDisplay } from './BalanceDisplay';

export const BalanceDisplayContainer = React.memo(() => {
  const componentArgs = {
    myETHBalance: 3.3722,
    balanceDelta: 523.23,
    myOddsToWin: 0.6712,
  };
  return <BalanceDisplay {...componentArgs} />;
});
BalanceDisplayContainer.displayName = 'BalanceDisplayContainer';
