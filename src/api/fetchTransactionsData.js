import { createData } from "../data";

export const fetchTransactionsData = () => {
  return new Promise((res, rej) => {
    setTimeout(() => {
      res(createData());
    }, 1000);
  });
};
