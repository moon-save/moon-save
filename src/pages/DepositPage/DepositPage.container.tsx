import React from 'react';
import { DepositPage } from './DepositPage.component';
import { useDepositPageState } from './useDepositPageState';

export const DepositPageContainer = React.memo(() => {
  const state = useDepositPageState();
  return <DepositPage {...state} />;
});
DepositPageContainer.displayName = 'DepositPageContainer';
