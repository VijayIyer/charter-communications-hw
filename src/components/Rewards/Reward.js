import { getRewardForAmount } from "../../utils/getRewardForAmount";
import { getRewardForMonth } from "../../utils/getRewardForMonth";
import { useTransactions } from "../../context/transactionsContext";
export default function Reward({ customer, months }) {
  const { transactionsData } = useTransactions();

  const total = transactionsData
    .filter((transaction) => transaction.customer === customer)
    .reduce(
      (total, transaction) => total + getRewardForAmount(transaction.amount),
      0
    );

  return (
    <tr>
      <td>{customer}</td>
      {months.map((month) => (
        <td key={month}>
          {getRewardForMonth(transactionsData, customer, month)}
        </td>
      ))}
      <td>{total}</td>
    </tr>
  );
}
