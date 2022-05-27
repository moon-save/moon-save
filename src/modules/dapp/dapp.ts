import { Mainnet, Config } from '@usedapp/core';
import { getDefaultProvider } from 'ethers';

// TODO: Placeholder value
export const STAKING_CONTRACT = '0x00000000219ab540356cBB839Cbe05303d7705Fa';

export const DAppConfig: Config = {
  readOnlyChainId: Mainnet.chainId,
  readOnlyUrls: {
    [Mainnet.chainId]: getDefaultProvider('mainnet'),
  },
};
