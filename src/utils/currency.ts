const MOCK_ETH_PRICE = 2562.89;

export const ethToUsd = (ethValue: number): number => ethValue * MOCK_ETH_PRICE;

export const usdToEth = (usdValue: number): number => usdValue / MOCK_ETH_PRICE;
