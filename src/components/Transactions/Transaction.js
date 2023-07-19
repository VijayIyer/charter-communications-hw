import moment from "moment";
export default function Transaction({ rowNumber, transaction }) {
  const { customer, date, amount } = transaction;
  return (
    <tr>
      <td>{rowNumber}.</td>
      <td>{customer}</td>
      <td>{`${moment(date).format("DD MMM, YYYY")}`}</td>
      <td>{amount ?? null}</td>
    </tr>
  );
}
