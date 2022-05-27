import { StoredTransaction, useEthers, useTransactions } from '@usedapp/core';
import { useBalanceState } from '../../hooks/useBalanceState';
import { STAKING_CONTRACT } from '../../modules/dapp/dapp';
import { Transaction } from './transactions.types';

const getTransactionType = (transaction: StoredTransaction, myAddress: string) => {
  const {
    transaction: { from },
  } = transaction;
  if (from === myAddress) {
    return 'deposit';
  }
  if (from === STAKING_CONTRACT) {
    return 'withdrawal';
  }

  // TODO interest and moonsave payments
  return 'interest';
};

const formatTransaction = (transaction: StoredTransaction, myAddress: string): Transaction => ({
  transactionId: transaction.transaction.hash,
  transactionType: getTransactionType(transaction, myAddress),
  transactionAmount: transaction.transaction.value.toNumber(),
  transactionDate: new Date(transaction.submittedAt),
  totalBankAmount: 0, // TODO
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
