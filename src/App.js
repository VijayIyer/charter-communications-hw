import Transactions from "./components/Transactions";
import TransactionsTable from "./components/Transactions/TransactionsTable";
import RewardsTable from "./components/Rewards/RewardsTable";
import Regenerate from "./components/Transactions/Regenerate";
import { DataProvider } from "./context/dataContext";
import { TransactionsProvider } from "./context/transactionsContext";
import Search from "./components/Transactions/Search";
import MonthFilter from "./components/Transactions/MonthFilter";
function App() {
  return (
    <div className='App'>
      <DataProvider>
        <TransactionsProvider>
          <Transactions />
        </TransactionsProvider>

        <RewardsTable />
      </DataProvider>
    </div>
  );
}

export default App;
