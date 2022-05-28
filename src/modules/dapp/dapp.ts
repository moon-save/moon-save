import { Config, Rinkeby } from '@usedapp/core';
import { getDefaultProvider } from 'ethers';

export const DAppConfig: Config = {
  readOnlyChainId: Rinkeby.chainId,
  readOnlyUrls: {
    [Rinkeby.chainId]: getDefaultProvider('rinkeby'),
  },
};
