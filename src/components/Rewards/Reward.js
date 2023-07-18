import { useContext, useState, useEffect, useCallback } from "react";
import { dataContext } from "../../context/dataContext";
import moment from "moment";
export default function Reward({ customer, months }) {
  const { transactionsData } = useContext(dataContext);
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
  const getRewardForAmount = (amount) => {
    if (amount > 100) return 2 * (amount - 100) + 1 * 50;
    if (amount > 50 && amount < 100) return amount - 50;
    return 0;
  };

  const getRewardForMonth = useCallback(
    (customer, month) => {
      if (transactionsData) {
        return transactionsData
          .filter(
            (transaction) =>
              transaction.customer === customer &&
              moment(transaction.date).format("M") === month
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
        <td key={month}>{getRewardForMonth(customer, month)}</td>
      ))}
      <td>{total}</td>
    </tr>
  );
}
