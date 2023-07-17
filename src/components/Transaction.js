export default function Transaction({ transaction }) {
  const { customer, date, amount } = transaction;

  return (
    <tr>
      <td>{customer}</td>
      <td>{date.toLocaleString()}</td>
      <td>{amount}</td>
    </tr>
  );
}
