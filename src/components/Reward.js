import { useContext, useState, useEffect } from "react";
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
    amount > 100 ? 2 : amount > 50 && amount < 100 ? 1 : 0;
  const getRewardForMonth = (customer, month) => {
    if (transactionsData) {
      transactionsData
        .filter(
          (transaction) =>
            transaction.customer === customer &&
            transaction.date.getMonth() === month
        )
        .reduce((total, transaction) => {
          console.log(transaction.date.getMonth(), month);
          return total + getRewardForAmount(transaction.amount);
        }, 0);
    }
  };
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
