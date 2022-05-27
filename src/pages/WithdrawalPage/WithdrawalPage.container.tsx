import React from 'react';
import { WithdrawalPage } from './WithdrawalPage.component';
import { useWithdrawalPageState } from './useWithdrawalPageState';

export const WithdrawalPageContainer = React.memo(() => {
  const state = useWithdrawalPageState();
  return <WithdrawalPage {...state} />;
});
WithdrawalPageContainer.displayName = 'WithdrawalPageContainer';
