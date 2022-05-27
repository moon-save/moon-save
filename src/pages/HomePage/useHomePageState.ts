import { useBalanceState } from '../../hooks/useBalanceState';

export const useHomePageState = () => {
  const state = useBalanceState();

  return {
    ...state,
    showOddsToWin: true,
  };
};
