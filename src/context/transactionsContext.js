import { useState, createContext } from "react";
export const transactionsContext = createContext();
export const TransactionsProvider = ({ children }) => {
  const [customerFilter, setCustomerFilter] = useState("");
  const [monthFilter, setMonthFilter] = useState("");
  const [transactionsData, setTransactionsData] = useState([]);

  return (
    <transactionsContext.Provider
      value={{
        customerFilter,
        setCustomerFilter,
        monthFilter,
        setMonthFilter,
        transactionsData,
        setTransactionsData,
      }}
    >
      {children}
    </transactionsContext.Provider>
  );
};
