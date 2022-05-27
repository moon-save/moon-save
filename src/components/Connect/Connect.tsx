import React from 'react';
import { useEthers } from '@usedapp/core';

export const Connect = React.memo(() => {
  const { activateBrowserWallet, deactivate, account } = useEthers();

  return account ? (
    <button onClick={deactivate}> Disconnect </button>
  ) : (
    <button onClick={activateBrowserWallet}> Connect </button>
  );
});
