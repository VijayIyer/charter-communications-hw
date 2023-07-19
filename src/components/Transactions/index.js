import TransactionsTable from "./TransactionsTable";
import MonthFilter from "./MonthFilter";
import Search from "./Search";
import Regenerate from "./Regenerate";
import "./styles.css";
export default function Transactions() {
  return (
    <div className='column'>
      <h3 className='transactions__header'>Transactions</h3>
      {/* <Regenerate /> */}
      <div className='transactions__filters'>
        <h3>Filters</h3>
        <MonthFilter />
        <Search />
      </div>
      <TransactionsTable />
    </div>
  );
}
