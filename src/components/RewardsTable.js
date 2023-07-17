import { transactionsContext } from "../context/transactionsContext";
import { monthNames } from "../constants";
import getUniqueElements from "../utils/getUniqueElements";
import "./styles.css";
import { useContext, useState, useEffect } from "react";
import Reward from "./Reward";
export default function RewardsTable() {
  const { transactionsData } = useContext(transactionsContext);
  const [months, setMonths] = useState([]);
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    if (transactionsData) {
      setMonths(
        getUniqueElements(
          transactionsData.map((transaction) => transaction.date.getMonth())
        )
      );
    }
  }, [transactionsData]);
  useEffect(() => {
    if (transactionsData) {
      setCustomers(
        getUniqueElements(
          transactionsData.map((transaction) => transaction.customer)
        )
      );
    }
  }, [transactionsData]);
  return (
    <>
      <h2>Rewards:</h2>
      <table>
        <thead>
          <tr>
            <th>Customer Name</th>
            {months.map((month) => (
              <th>{monthNames[month]}</th>
            ))}
            <th>Total</th>
          </tr>
        </thead>

        <tbody>
          {customers.map((customer) => (
            <Reward customer={customer} months={months} />
          ))}
        </tbody>
      </table>
    </>
  );
}
