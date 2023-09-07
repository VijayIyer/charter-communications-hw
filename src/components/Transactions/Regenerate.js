import { useContext } from "react";
import { transactionsContext } from "../../context/transactionsContext";
import { createMockTransactionData } from "../../data/createMockTransactionData";
export default function Regenerate() {
  const { setTransactionsData } = useContext(transactionsContext);
  const fetchData = () => {
    createMockTransactionData().then((data) => setTransactionsData(data));
  };

  return (
    <button className='transactions__regenerate-btn' onClick={fetchData}>
      Regenerate Transactions Data
    </button>
  );
}
