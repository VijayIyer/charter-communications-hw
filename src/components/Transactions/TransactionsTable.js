import "./styles.css";
import { useContext } from "react";
import moment from "moment";
import { monthNames } from "../../utils";
import Transaction from "./Transaction";
import { dataContext } from "../../context/dataContext";
import { transactionsContext } from "../../context/transactionsContext";
export default function TransactionsTable() {
  const { loadingTransactions, transactionsData, error } =
    useContext(dataContext);
  const { customerFilter, monthFilter } = useContext(transactionsContext);
  const renderTransactions = () => {
    return transactionsData
      .filter((transaction) => {
        if (customerFilter === "") return true;
        return (
          transaction.customer.toLowerCase() === customerFilter.toLowerCase()
        );
      })
      .filter((transaction) => {
        if (monthFilter === "") return true;
        return (
          monthNames[moment(transaction.date).format("M") - 1] === monthFilter
        );
      })
      .map((transaction, index) => {
        return (
          <Transaction
            key={transaction.id}
            rowNumber={index + 1}
            transaction={transaction}
          />
        );
      });
  };

  if (error) return <h1>Error loading Transactions!!!</h1>;
  if (loadingTransactions) return <h1>Loading Transactions...</h1>;
  return (
    <div className='transactions__table-wrapper'>
      <table className='transactions__table'>
        <thead>
          <tr>
            <th></th>
            <th>Customer Name</th>
            <th>Date</th>
            <th>Amount</th>
          </tr>
        </thead>

        <tbody>{renderTransactions()}</tbody>
      </table>
    </div>
  );
}
