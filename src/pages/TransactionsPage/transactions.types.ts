export type TransactionType = 'deposit' | 'interest' | 'withdrawal' | 'moonSave';

export interface Transaction {
  transactionId: string;
  transactionType: TransactionType;
  transactionAmount: number;
  transactionDate: Date;
  totalBankAmount: string;
}
