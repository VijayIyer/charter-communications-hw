import moment from "moment";
import { getRewardForAmount } from "./getRewardForAmount";
export const getRewardForMonth = (transactions, customer, month) => {
  return transactions
    .filter(
      (transaction) =>
        transaction.customer === customer &&
        moment(transaction.date).format("M") === month
    )
    .reduce((total, transaction) => {
      return total + getRewardForAmount(transaction.amount);
    }, 0);
};
