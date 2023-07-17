import { useContext } from "react";
import { transactionsContext } from "../context/transactionsContext";
export default function Refresh() {
  const { fetchData } = useContext(transactionsContext);
  return <button onClick={fetchData}>Generate Transactions Data</button>;
}
