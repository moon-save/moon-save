import React, { useState } from 'react';
import { utils } from 'ethers';
import { Box, Button, Loader, NumberInput, Text } from '@mantine/core';
import { BalanceDisplay, BalanceDisplayProps } from '../../components/BalanceDisplay/BalanceDisplay';
import { useDepositSavings } from '../../modules/contract/contract';

export type DepositPageProps = BalanceDisplayProps;

export const DepositPage: React.FC<DepositPageProps> = (props) => {
  const {state, send} = useDepositSavings()

  const [depositAmount, setAmount] = useState<number>(0)
  const handleInputChanged = (num: number | undefined) => {
    setAmount(Number(num))
  }

  const handleSubmitDeposit= () => {
    console.log("deposit clicked")
    const amountInWei = utils.parseEther(depositAmount.toString())
    return send({value: amountInWei})
  }

  const isMining = state.status === "Mining"

  return (
    <Box sx={{ width: '100%', display: 'grid' }}>
      <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <BalanceDisplay {...props} />
      </Box>
      <Box>
        <Text sx={{ fontSize: '4rem' }}>Deposit</Text>
        <NumberInput onChange={handleInputChanged} precision={4} defaultValue={0} hideControls />
        <Text><br></br></Text>
        <Button onClick={handleSubmitDeposit} disabled={isMining}>
          {isMining? <Loader /> : "Submit" }
        </Button>
      </Box>
    </Box>
  );
}
DepositPage.displayName = 'DepositPage';
