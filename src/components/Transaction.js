import { monthNames } from "../utils/constants";
export default function Transaction({ rowNumber, transaction }) {
  const { customer, date, amount } = transaction;

  return (
    <tr>
      <td>{rowNumber}.</td>
      <td>{customer}</td>
      <td>{`${
        monthNames[date.getMonth()]
      } ${date.getDate()}, ${date.getYear()}`}</td>
      <td>{amount}</td>
    </tr>
  );
}
