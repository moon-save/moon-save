import { useBalanceState } from '../../hooks/useBalanceState';

export const useWinnerPageState = () => {
  const state = useBalanceState();

  return {
    ...state,
    showOddsToWin: true,
  };
};
