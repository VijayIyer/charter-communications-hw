import TransactionsTable from "./components/TransactionsTable";
import RewardsTable from "./components/RewardsTable";
import Refresh from "./components/Refresh";
import { TransactionsProvider } from "./context/transactionsContext";
function App() {
  return (
    <div className='App'>
      <TransactionsProvider>
        <Refresh />
        <TransactionsTable />
        <RewardsTable />
      </TransactionsProvider>
    </div>
  );
}

export default App;
