import TransactionsTable from "./TransactionsTable";
import Transaction from "./Transaction";
import MonthFilter from "./MonthFilter";
import Search from "./Search";
import Regenerate from "./Regenerate";
import "./styles.css";
export default function Transactions() {
  return (
    <div className='transactions'>
      <h3>Transactions:</h3>
      <Regenerate />
      <div className='transactions__filters'>
        <MonthFilter />
        <Search />
      </div>
      <TransactionsTable />
    </div>
  );
}
