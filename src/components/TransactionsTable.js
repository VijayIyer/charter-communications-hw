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
      <h3>Transactions:</h3>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Customer Name</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody>
          {transactionsData.map((transaction, index) => {
            return (
              <Transaction
                key={transaction.id}
                rowNumber={index + 1}
                transaction={transaction}
              />
            );
          })}
        </tbody>
      </table>
    </>
  );
}
