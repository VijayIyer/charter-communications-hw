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
    <div className='transactions__month-filter'>
      <select
        className='transactions__month-filter__select'
        onChange={(e) => setMonthFilter(e.target.value)}
        value={monthFilter}
      >
        <option value=''>Filter by Month</option>
        {months.map((month) => (
          <option key={month} value={month}>
            {month}
          </option>
        ))}
      </select>
      <span className='highlight'></span>
    </div>
  );
}
