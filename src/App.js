import TransactionsTable from "./components/TransactionsTable";
import RewardsTable from "./components/RewardsTable";
import { useState } from "react";
import { TransactionsProvider } from "./context/transactionsContext";
function App() {
  const [showRewardsTable, setShowRewards] = useState(false);
  return (
    <div className='App'>
      <TransactionsProvider>
        <TransactionsTable />

        {showRewardsTable ? (
          <RewardsTable />
        ) : (
          <button onClick={() => setShowRewards((value) => !value)}>
            Show Rewards
          </button>
        )}
      </TransactionsProvider>
    </div>
  );
}

export default App;
