import { createData } from "../data";
import transactions from "../transactions.json";
export const fetchTransactionsData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(transactions);
    }, 1000);
  });
};
