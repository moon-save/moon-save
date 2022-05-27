import { useBalanceState } from '../../hooks/useBalanceState';

export const useWithdrawalPageState = () => {
  const state = useBalanceState();

  return {
    ...state,
    showOddsToWin: true,
  };
};
