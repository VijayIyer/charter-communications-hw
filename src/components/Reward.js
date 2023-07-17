import { useContext, useState, useEffect, useCallback } from "react";
import { transactionsContext } from "../context/transactionsContext";
export default function Reward({ customer, months }) {
  const { transactionsData } = useContext(transactionsContext);
  const [total, setTotal] = useState(0);
  useEffect(() => {
    if (transactionsData) {
      setTotal(
        transactionsData
          .filter((transaction) => transaction.customer === customer)
          .reduce(
            (total, transaction) =>
              total + getRewardForAmount(transaction.amount),
            0
          )
      );
    }
  }, [transactionsData, customer]);
  const getRewardForAmount = (amount) =>
    amount > 100
      ? 2 * (amount - 100)
      : amount > 50 && amount < 100
      ? amount - 50
      : 0;
  const getRewardForMonth = useCallback(
    (customer, month) => {
      if (transactionsData) {
        return transactionsData
          .filter(
            (transaction) =>
              transaction.customer === customer &&
              transaction.date.getMonth() === month
          )
          .reduce((total, transaction) => {
            return total + getRewardForAmount(transaction.amount);
          }, 0);
      }
      return 0;
    },
    [transactionsData]
  );
  return (
    <tr>
      <td>{customer}</td>
      {months.map((month) => (
        <td>{getRewardForMonth(customer, month)}</td>
      ))}
      <td>{total}</td>
    </tr>
  );
}
