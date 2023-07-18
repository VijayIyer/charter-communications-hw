import { useState, createContext } from "react";
export const transactionsContext = createContext();
export const TransactionsProvider = ({ children }) => {
  const [customerFilter, setCustomerFilter] = useState("");
  const [monthFilter, setMonthFilter] = useState("");
  return (
    <transactionsContext.Provider
      value={{
        customerFilter,
        setCustomerFilter,
        monthFilter,
        setMonthFilter,
      }}
    >
      {children}
    </transactionsContext.Provider>
  );
};
