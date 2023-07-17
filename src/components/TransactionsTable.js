import "./styles.css";
import { useContext } from "react";

import Transaction from "./Transaction";
import { transactionsContext } from "../context/transactionsContext";
export default function TransactionsTable() {
  const { loadingTransactions, transactionsData } =
    useContext(transactionsContext);
  if (loadingTransactions) return <h1>Loading Transactions...</h1>;
  return (
    <>
      <h2>Transactions:</h2>
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody>
          {transactionsData.map((transaction) => {
            return (
              <Transaction key={transaction.id} transaction={transaction} />
            );
          })}
        </tbody>
      </table>
    </>
  );
}
