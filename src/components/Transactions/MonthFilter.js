import { useState, useContext, useEffect } from "react";
import { dataContext } from "../../context/dataContext";
import { getUniqueElements, monthNames } from "../../utils";
import moment from "moment";
import { transactionsContext } from "../../context/transactionsContext";
export default function MonthFilter() {
  const [months, setMonths] = useState([]);
  const { monthFilter, setMonthFilter } = useContext(transactionsContext);
  const { transactionsData } = useContext(dataContext);
  useEffect(() => {
    if (transactionsData) {
      setMonths(
        getUniqueElements(
          transactionsData.map(
            (transaction) =>
              monthNames[moment(transaction.date).format("M") - 1]
          )
        )
      );
    }
  }, [transactionsData]);
  return (
    <div>
      <label>Month</label>
      <select
        className='transactions__month-filter'
        onChange={(e) => setMonthFilter(e.target.value)}
        value={monthFilter}
      >
        <option value=''>--Select a month ---</option>
        {months.map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>
    </div>
  );
}
