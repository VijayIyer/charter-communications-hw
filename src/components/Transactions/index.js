import TransactionsTable from "./TransactionsTable";
import MonthFilter from "./MonthFilter";
import Search from "./Search";
import "./styles.css";
export default function Transactions() {
  return (
    <div className='column'>
      <h3 className='transactions__header'>Transactions</h3>
      <div className='transactions__filters'>
        <h3>Filters</h3>
        <MonthFilter />
        <Search />
      </div>
      <TransactionsTable />
    </div>
  );
}
