import Transactions from "./components/Transactions";
import TransactionsTable from "./components/Transactions/TransactionsTable";
import RewardsTable from "./components/Rewards/RewardsTable";
import { DataProvider } from "./context/dataContext";
import { TransactionsProvider } from "./context/transactionsContext";

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
