import { useMemo } from "react";
import { getUniqueElements, MONTHNAMES } from "../../utils";
import moment from "moment";
import { useTransactions } from "../../context/transactionsContext";
export default function MonthFilter() {
  const { transactionsData, monthFilter, setMonthFilter } = useTransactions();
  const months = useMemo(
    () =>
      getUniqueElements(
        transactionsData.map(
          (transaction) => MONTHNAMES[moment(transaction.date).format("M") - 1]
        )
      ),
    [transactionsData]
  );

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
