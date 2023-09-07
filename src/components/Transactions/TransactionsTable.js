import "./styles.css";
import { useEffect, useState } from "react";
import moment from "moment";
import { MONTHNAMES } from "../../utils";
import { fetchTransactionsData } from "../../api/fetchTransactionsData";
import Transaction from "./Transaction";
import { useTransactions } from "../../context/transactionsContext";
export default function TransactionsTable() {
  const { customerFilter, monthFilter, transactionsData, setTransactionsData } =
    useTransactions();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
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
          MONTHNAMES[moment(transaction.date).format("M") - 1] === monthFilter
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
  useEffect(() => {
    setLoading(true);
    fetchTransactionsData()
      .then((data) => {
        setLoading(false);
        setTransactionsData(data);
      })
      .catch((err) => setError(error));
  }, [error, setTransactionsData]);
  if (error) return <h1>Error loading Transactions!!!</h1>;
  if (loading) return <h1>Loading Transactions...</h1>;
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
