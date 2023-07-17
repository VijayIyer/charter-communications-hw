import { createContext, useEffect, useState } from "react";
import { fetchTransactionsData } from "../api/fetchTransactionsData";
export const transactionsContext = createContext({});
export const TransactionsProvider = ({ children }) => {
  const [transactionsData, setTransactionsData] = useState([]);
  const [loadingTransactions, setLoadingTransactions] = useState(false);
  useEffect(() => {
    setLoadingTransactions(true);
    fetchTransactionsData().then((data) => {
      setLoadingTransactions(false);
      setTransactionsData(data);
    });
  }, []);
  return (
    <transactionsContext.Provider
      value={{
        transactionsData,
        loadingTransactions,
      }}
    >
      {children}
    </transactionsContext.Provider>
  );
};
