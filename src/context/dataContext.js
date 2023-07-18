import { createContext, useEffect, useState } from "react";
import { fetchTransactionsData } from "../api/fetchTransactionsData";
export const dataContext = createContext({});
export const DataProvider = ({ children }) => {
  const [transactionsData, setTransactionsData] = useState([]);
  const [loadingTransactions, setLoadingTransactions] = useState(false);
  const [error, setError] = useState(false);
  const fetchData = () => {
    setLoadingTransactions(true);
    fetchTransactionsData()
      .then((data) => {
        setLoadingTransactions(false);
        setTransactionsData(data);
      })
      .catch((err) => {
        setError(true);
      });
  };
  useEffect(() => {
    fetchData();
  }, []);
  return (
    <dataContext.Provider
      value={{
        transactionsData,
        loadingTransactions,
        error,
        fetchData,
      }}
    >
      {children}
    </dataContext.Provider>
  );
};
