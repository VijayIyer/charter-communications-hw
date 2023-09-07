import { createMockTransactionData } from "../data/createMockTransactionData";
// import transactions from "../data/transactions.json";
export const fetchTransactionsData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(createMockTransactionData());
    }, 1000);
  });
};
