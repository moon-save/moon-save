import { Config, Rinkeby } from '@usedapp/core';
import { getDefaultProvider } from 'ethers';

export const DAppConfig: Config = {
  readOnlyChainId: Rinkeby.chainId,
  readOnlyUrls: {
    [Rinkeby.chainId]: 'https://rinkeby.infura.io/v3/be5997692c5749798bf8b0ce07398956',
  },
};
