import { createContext, useEffect, useState } from "react";
import { fetchTransactionsData } from "../api/fetchTransactionsData";
export const transactionsContext = createContext({});
export const TransactionsProvider = ({ children }) => {
  const [transactionsData, setTransactionsData] = useState([]);
  const [loadingTransactions, setLoadingTransactions] = useState(false);
  const fetchData = () => {
    setLoadingTransactions(true);
    fetchTransactionsData().then((data) => {
      setLoadingTransactions(false);
      setTransactionsData(data);
    });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <transactionsContext.Provider
      value={{
        transactionsData,
        loadingTransactions,
        fetchData,
      }}
    >
      {children}
    </transactionsContext.Provider>
  );
};
