import { useBalanceState } from '../../hooks/useBalanceState';

export const useDepositPageState = () => {
  const state = useBalanceState();

  return {
    ...state,
    showOddsToWin: true,
  };
};
