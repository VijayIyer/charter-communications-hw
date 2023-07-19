import Transactions from "./components/Transactions";
import RewardsTable from "./components/Rewards/RewardsTable";
import { TransactionsProvider } from "./context/transactionsContext";

function App() {
  return (
    <div className='App'>
      <TransactionsProvider>
        <Transactions />
        <RewardsTable />
      </TransactionsProvider>
    </div>
  );
}

export default App;
