import { dataContext } from "../../context/dataContext";
import { getUniqueElements, monthNames } from "../../utils";
import "./styles.css";
import { useContext, useState, useEffect } from "react";
import moment from "moment";
import Reward from "./Reward";
export default function RewardsTable() {
  const [showRewardsTable, setShowRewards] = useState(false);

  const { transactionsData } = useContext(dataContext);
  const [months, setMonths] = useState([]);
  const [customers, setCustomers] = useState([]);
  useEffect(() => {
    if (transactionsData) {
      setMonths(
        getUniqueElements(
          transactionsData.map((transaction) =>
            moment(transaction.date).format("M")
          )
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
  if (!showRewardsTable)
    return (
      <div className='column'>
        <div>
          <button
            className='rewards__show-btn'
            onClick={() => setShowRewards((value) => !value)}
          >
            Show Rewards
          </button>
        </div>
      </div>
    );

  return (
    <div className='column'>
      <h3 className='rewards__header'>Rewards</h3>
      <div className='rewards__table-wrapper'>
        <table className='rewards__table'>
          <thead>
            <tr>
              <th>Customer Name</th>
              {months.map((month) => (
                <th key={month}>{monthNames[month - 1]}</th>
              ))}
              <th>Total</th>
            </tr>
          </thead>

          <tbody>
            {customers.map((customer) => (
              <Reward key={customer} customer={customer} months={months} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
