import { useContext } from "react";
import { transactionsContext } from "../../context/transactionsContext";
import { createData } from "../../data/data";
export default function Regenerate() {
  const { setTransactionsData } = useContext(transactionsContext);
  const fetchData = () => {
    setTimeout(() => createData(), 1000).then((data) =>
      setTransactionsData(data)
    );
  };

  return (
    <button className='transactions__regenerate-btn' onClick={fetchData}>
      Regenerate Transactions Data
    </button>
  );
}
