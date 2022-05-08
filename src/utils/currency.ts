const MOCK_ETH_PRICE = 2562.89;

export const ethToUsd = (ethValue: number): string => `$${(ethValue * MOCK_ETH_PRICE).toFixed(2)} USD`;

export const usdToEth = (usdValue: number): string => `${(usdValue / MOCK_ETH_PRICE).toFixed(4)} ETH`;
