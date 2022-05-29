import { StoredTransaction, useEthers, useTransactions } from '@usedapp/core';
import { useBalanceState } from '../../hooks/useBalanceState';
import { SAVINGS_CONTRACT_ADDRESS } from '../../modules/contract/contract';
import { Transaction } from './transactions.types';
import { formatEther } from '@ethersproject/units';
import { ethToUsd } from '../../utils/currency';

const getTransactionType = (transaction: StoredTransaction, myAddress: string) => {
  const {
    transaction: { from },
  } = transaction;
  if (from === myAddress) {
    return 'deposit';
  }
  // TODO determine withdrawal vs moonsave
  if (from === SAVINGS_CONTRACT_ADDRESS) {
    return 'withdrawal';
  }
  return 'moonSave';
};

const formatTransaction = (transaction: StoredTransaction, myAddress: string): Transaction => ({
  transactionId: transaction.transaction.hash,
  transactionType: getTransactionType(transaction, myAddress),
  transactionAmount: Number(formatEther(transaction.transaction.value)),
  transactionDate: new Date(transaction.submittedAt),
  totalBankAmount: ethToUsd(Number(formatEther(transaction.transaction.value))),
});

export const useTransactionsPageState = () => {
  const { account } = useEthers();
  const { transactions } = useTransactions();
  const balanceState = useBalanceState();

  const formattedTransactions = account
    ? transactions.map((transaction) => formatTransaction(transaction, account))
    : undefined;

  return {
    transactionsList: formattedTransactions,
    ...balanceState,
    showOddsToWin: false,
  };
};
