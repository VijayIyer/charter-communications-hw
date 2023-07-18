import { createData } from "../data/data";
import transactions from "../data/transactions.json";
export const fetchTransactionsData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(transactions);
    }, 1000);
  });
};
